import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./Forms.css";
import "./Checkbox.css";
import * as Yup from "yup";
import axios from "axios";

import { EkstraMalzemeler } from "../utils/EkstraMalzemeler.js";

import { Form, FormGroup, Label, Input, Button } from "reactstrap";

export default function OrderForm(props) {
  const { productData, handleOrder } = props;
  let history = useHistory();

  //initial values

  const boyutlar = ["S", "M", "L"];
  const hamurlar = ["İnce", "Orijinal", "Parmesan Kenar"];

  const initFormData = {
    id: 1,
    title: "",
    size: "",
    hamur: "",
    isim: "",
    note: "",
    ekstraMalzemeler: "",
    ekstraMalzemelerFiyat: 0,
    totalPrice: 0,
    amount: 0,
  };
  // console.log(initFormData);
  //dynamic datas
  const [formData, setFormData] = useState(initFormData);

  const [errors, setErrors] = useState({
    size: "",
    hamur: "",
    ekstraMalzemeler: "",
  });
  const [isValid, setIsValid] = useState(false);

  const [sayac, setSayac] = useState(1);

  const [ekstraMalzemeler, setEkstraMalzemeler] = useState([]);
  const [ekstraMalzemelerFiyat, setEkstraMalzemelerFiyat] = useState(0);
  const malzemeFiyat = 5;

  const [totalPrice, setTotalPrice] = useState(85.5);

  //helpers

  const handleDecrement = (e) => {
    e.preventDefault();
    if (sayac > 1) {
      setSayac(sayac - 1);
    }
  };

  const handleIncrement = (e) => {
    e.preventDefault();
    setSayac(sayac + 1);
  };

  const handleEkstraMalzemeler = (event) => {
    const { value } = event.target;
    const secim = value;
    if (ekstraMalzemeler.includes(secim)) {
      setEkstraMalzemeler(
        ekstraMalzemeler.filter((malzeme) => {
          return malzeme !== secim;
        })
      );
    } else {
      setEkstraMalzemeler([...ekstraMalzemeler, secim]);
    }
  };

  //Yup

  const formSchema = Yup.object().shape({
    size: Yup.string()
      .oneOf(["S", "M", "L"])
      .required("Lütfen pizza boyu seçiniz."),
    hamur: Yup.string()
      .oneOf(["İnce", "Orijinal", "Parmesan Kenar"])
      .required("Lütfen hamur kalınlığı seçiniz"),
    ekstraMalzemeler: Yup.array().max(10, "Maksimum 10 malzeme ekleyebilirsin"),
    isim: Yup.string()
      .min(2, "En az 2 karakter olmalıdır.")
      .required("İsim alanı zorunludur."),
  });

  //useEffect: formdata, price

  useEffect(() => {
    setEkstraMalzemelerFiyat(ekstraMalzemeler.length * malzemeFiyat * sayac);
    setTotalPrice(productData.price * sayac + ekstraMalzemelerFiyat);
    const newFormData = {
      ...formData,
      ekstraMalzemeler: ekstraMalzemeler,
      ekstraMalzemelerFiyat: ekstraMalzemelerFiyat,
      amount: sayac,
      totalPrice: totalPrice,
    };
    setFormData(newFormData);
  }, [ekstraMalzemeler, ekstraMalzemelerFiyat, sayac, totalPrice]);

  //handleChange

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    //yup control
    const newValue = type === "checkbox" ? checked : value;
    if (name !== "note" && name !== "isim") {
      Yup.reach(formSchema, name)
        .validate(newValue)
        .then((valid) => {
          setErrors({ ...errors, [name]: "" });
        })
        .catch((err) => {
          setErrors({ ...errors, [name]: err.errors[0] });
        });
    }
    console.log("name:", name, "value:", value, "checked", newValue);
    setFormData({
      ...formData,
      ...productData,
      [name]: value,
    });
  };

  //validasyon

  useEffect(() => {
    formSchema.isValid(formData).then((valid) => setIsValid(!valid));
    console.log(formData);
  }, [formData]);

  //submit

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("https://reqres.in/api/users", formData)
      .then((res) => {
        handleOrder(res.data);
      })
      .catch((err) => {
        console.error(err.response.message);
      });
    setFormData(initFormData);
    history.push("/success");
  };

  return (
    <div className="main-container">
      <Form
        className="all-forms"
        id="pizza-form"
        onSubmit={handleSubmit}
        data-cy="pizza-form"
      >
        <div className="top-form">
          <div className="boyut">
            <h3>
              Boyut Seç<span>*</span>
            </h3>
            {boyutlar.map((boyut) => {
              return (
                <label key={boyut}>
                  <input
                    type="radio"
                    value={boyut}
                    checked={formData.size === boyut}
                    name="size"
                    onChange={handleChange}
                    data-cy="size-input"
                  />
                  {boyut}
                </label>
              );
            })}
            {errors.size && <p className="error">{errors.size}</p>}
          </div>

          <div className="dropdown-form">
            <h3>
              Hamur Seç<span>*</span>
            </h3>
            <div className="hamurlar">
              <select
                id="hamur"
                name="hamur"
                value={formData.hamur}
                onChange={handleChange}
                data-cy="hamur-input"
              >
                <option value="">--Hamur Kalınlığı Seçiniz--</option>

                {hamurlar.map((hamur, index) => {
                  return (
                    <option
                      id="hamur-dropdown"
                      value={hamur}
                      name="hamur"
                      key={index}
                    >
                      {hamur}
                    </option>
                  );
                })}
              </select>
              {errors.hamur.length > 0 && (
                <p className="error">{errors.hamur} </p>
              )}
            </div>
          </div>
        </div>
        <hr className="space" />
        <div>
          <h2>Ek Malzemeler</h2>
          <p>En fazla 10 malzeme seçebilirsiniz. 5₺</p>
        </div>
        <div className="checkbox-container">
          {EkstraMalzemeler.map((malzeme, index) => {
            return (
              <div className="input-container" key={index}>
                <label className="label-container">
                  <input
                    type="checkbox"
                    name="ekstraMalzemeler"
                    value={malzeme}
                    checked={ekstraMalzemeler.includes(malzeme)}
                    onChange={handleEkstraMalzemeler}
                    data-cy="malzeme-input"
                    className="checkbox-input"
                  />
                  <div className="checkmark"></div>
                  {malzeme}
                </label>
              </div>
            );
          })}
          {<p className="error">{errors.ekstraMalzemeler}</p>}
        </div>
        <hr className="space" />
        <div className="name-area">
          <FormGroup>
            <Label>
              <h3>Teslim Edilecek Kişi</h3>
            </Label>
            <Input
              id="name-input"
              placeholder="İsminizi giriniz"
              className="note"
              type="text"
              name="isim"
              onChange={handleChange}
              data-cy="name-input"
            />
          </FormGroup>
          {errors.isim && <p className="error">{errors.size}</p>}
        </div>

        <div className="order-note">
          <FormGroup>
            <Label>
              <h3>Sipariş Notu</h3>
            </Label>
            <Input
              id="special-text"
              className="note"
              placeholder="Siparişine eklemek istediğin bir not var mı?"
              type="text"
              name="note"
              onChange={handleChange}
              data-cy="note-input"
            />
          </FormGroup>

          <hr className="separator" />
        </div>
        <div className="bottom-form">
          <div className="count-button">
            <button className="decrease" onClick={handleDecrement}>
              -
            </button>
            <div className="sayac">{sayac}</div>
            <button className="increase" onClick={handleIncrement}>
              +
            </button>
          </div>
          <div className="order-summary-container">
            <div className="summary-container">
              <h3>Sipariş Toplamı</h3>
              <div className="options-container">
                <h4>Seçimler</h4>
                <p>{ekstraMalzemelerFiyat}₺</p>
              </div>
              <div className="total-price-container">
                <h4>Toplam</h4>
                <p>{totalPrice}₺</p>
              </div>
            </div>
            <div className="order-button">
              <button
                id="order-button"
                type="submit"
                disabled={isValid}
                data-cy="submit-button"
              >
                SİPARİŞ VER
              </button>
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
}
