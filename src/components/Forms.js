import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./Forms.css";
import * as Yup from "yup";
import axios from "axios";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { EkstraMalzemeler } from "../utils/EkstraMalzemeler.js";

import { Form, FormGroup, Label, Input, Button } from "reactstrap";

export default function OrderForm(props) {
  const { productData, handleOrder } = props;
  let history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty, dirtyFields },
    setValue,
  } = useForm({
    defaultValues: {
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
    },
    mode: "onChange",
  });

  //initial values

  const boyutlar = ["S", "M", "L"];
  const hamurlar = ["İnce", "Orijinal", "Parmesan Kenar"];

  // const initFormData = {
  //   id: 1,
  //   title: "",
  //   size: "",
  //   hamur: "",
  //   isim: "",
  //   note: "",
  //   ekstraMalzemeler: "",
  //   ekstraMalzemelerFiyat: 0,
  //   totalPrice: 0,
  //   amount: 0,
  // };
  // console.log(initFormData);
  //dynamic datas
  // const [formData, setFormData] = useState(initFormData);

  // const [errors, setErrors] = useState({
  //   size: "",
  //   hamur: "",
  //   ekstraMalzemeler: "",
  // });
  // const [isValid, setIsValid] = useState(false);

  const [sayac, setSayac] = useState(1);

  const [ekstraMalzemeler, setEkstraMalzemeler] = useState([]);
  const [ekstraMalzemelerFiyat, setEkstraMalzemelerFiyat] = useState(0);
  const malzemeFiyat = 5;

  const [totalPrice, setTotalPrice] = useState(85.5);

  //helpers

  //Yup

  // const formSchema = Yup.object().shape({
  //   size: Yup.string()
  //     .oneOf(["S", "M", "L"])
  //     .required("Lütfen pizza boyu seçiniz."),
  //   hamur: Yup.string()
  //     .oneOf(["İnce", "Orijinal", "Parmesan Kenar"])
  //     .required("Lütfen hamur kalınlığı seçiniz"),
  //   ekstraMalzemeler: Yup.array().max(10, "Maksimum 10 malzeme ekleyebilirsin"),
  //   isim: Yup.string()
  //     .min(2, "En az 2 karakter olmalıdır.")
  //     .required("İsim alanı zorunludur."),
  // });

  //useEffect: formdata, price

  // useEffect(() => {
  //   setEkstraMalzemelerFiyat(ekstraMalzemeler.length * malzemeFiyat * sayac);
  //   setTotalPrice(productData.price * sayac + ekstraMalzemelerFiyat);
  //   const newFormData = {
  //     ...formData,
  //     ekstraMalzemeler: ekstraMalzemeler,
  //     ekstraMalzemelerFiyat: ekstraMalzemelerFiyat,
  //     amount: sayac,
  //     totalPrice: totalPrice,
  //   };
  //   setFormData(newFormData);
  // }, [ekstraMalzemeler, ekstraMalzemelerFiyat, sayac, totalPrice]);

  //handleChange

  // const handleChange = (event) => {
  //   console.log("handleChange function called");
  //   const { name, value, type, checked } = event.target;
  //   //yup control
  //   const newValue = type === "checkbox" ? checked : value;
  //   if (name !== "note" && name !== "isim") {
  //     Yup.reach(formSchema, name)
  //       .validate(newValue)
  //       .then((valid) => {
  //         setErrors({ ...errors, [name]: "" });
  //       })
  //       .catch((err) => {
  //         setErrors({ ...errors, [name]: err.errors[0] });
  //       });
  //   }
  //   console.log("name:", name, "value:", value);
  //   setFormData({
  //     ...formData,
  //     ...productData,
  //     [name]: value,
  //   });
  // };

  //validasyon

  // useEffect(() => {
  //   formSchema.isValid(formData).then((valid) => setIsValid(!valid));
  //   console.log(formData);
  // }, [formData]);

  //submit

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   axios
  //     .post("https://reqres.in/api/users", formData)
  //     .then((res) => {
  //       handleOrder(res.data);
  //     })
  //     .catch((err) => {
  //       console.error(err.response.message);
  //     });
  //   setFormData(initFormData);
  //   history.push("/success");
  // };
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
    console.log("Ekstra Malzemeler:", ekstraMalzemeler);
  };

  const onFormSubmit = (formData, e) => {
    const { name, value, type, checked } = e.target;
    console.log(formData);

    console.log("Ekstra Malzemeler: ");

    const ekstraMalzemelerFiyat =
      ekstraMalzemeler.length * malzemeFiyat * sayac;

    console.log("Ekstra Malzemeler Fiyat:", ekstraMalzemelerFiyat);

    const totalPrice = productData.price * sayac + ekstraMalzemelerFiyat;
    console.log("Total Price:", totalPrice);

    formData = {
      ...formData,
      ekstraMalzemeler: ekstraMalzemeler,
      ekstraMalzemelerFiyat: ekstraMalzemelerFiyat,
      amount: sayac,
      totalPrice: totalPrice,
      title: productData.title,
      [name]: value,
    };

    axios
      .post("https://reqres.in/api/users", formData)
      .then((res) => {
        handleOrder(res.data);
      })
      .catch((err) => {
        console.error(err.response.message);
      });
    history.push("/success");
    toast.info("En kısa sürede sizinle iletişime geçeceğiz.", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };
  return (
    <div className="main-container">
      <form
        className="all-forms"
        id="pizza-form"
        onSubmit={handleSubmit(onFormSubmit)}
        data-cy="pizza-form"
      >
        <div className="top-form">
          <div className="top-radio">
            <h3>
              Boyut Seç<span>*</span>
            </h3>
            <div className="all-radio">
              <div className="radio">
                <input
                  {...register("size", {
                    required: true,
                  })}
                  className="radio-input"
                  id="S"
                  type="radio"
                  value="S"
                />
                <label data-cy="S" className="radio-label" htmlFor="S">
                  S
                </label>
                <input
                  {...register("size", {
                    required: true,
                  })}
                  className="radio-input"
                  id="M"
                  type="radio"
                  value="M"
                />
                <label data-cy="M" className="radio-label" htmlFor="M">
                  M
                </label>
                <input
                  {...register("size", {
                    required: true,
                  })}
                  className="radio-input"
                  id="L"
                  type="radio"
                  value="L"
                />
                <label data-cy="L" className="radio-label" htmlFor="L">
                  L
                </label>
                {errors.name && <div> {errors.name.message} </div>}
              </div>
            </div>
          </div>
          <div className="dropdown-form">
            <h3>
              Hamur Seç<span>*</span>
            </h3>
            <div className="hamurlar">
              <select
                {...register("hamur", {
                  required: "Lütfen hamur kalınlığı seçiniz",
                })}
                id="hamur"
                name="hamur"
                data-cy="hamur-input"
                className="hamur-input"
              >
                <option className="hamur-option" value="">
                  --Hamur Kalınlığı Seçiniz--
                </option>

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
              {errors.hamur && <div> {errors.hamur.message} </div>}
            </div>
          </div>
        </div>
        <hr className="space" />
        <div className="ek-malzemeler">
          <h3>Ek Malzemeler</h3>
          <p>En fazla 10 malzeme seçebilirsiniz. 5₺</p>
        </div>
        <div className="checkbox-container">
          {EkstraMalzemeler.map((malzeme, index) => {
            return (
              <div className="input-container" key={index}>
                <label className="label-container">
                  <input
                    {...register("ekstraMalzemeler", {
                      max: 10,
                    })}
                    type="checkbox"
                    value={malzeme}
                    checked={ekstraMalzemeler.includes(malzeme)}
                    onChange={handleEkstraMalzemeler}
                    data-cy="malzeme-input"
                    className="checkbox-input"
                  />

                  <div className="checkmark"></div>
                  {malzeme}
                </label>
                {errors.ekstraMalzemeler && (
                  <div>{errors.ekstraMalzemeler.message} </div>
                )}
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
                disabled={!isValid}
                data-cy="submit-button"
              >
                SİPARİŞ VER
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
