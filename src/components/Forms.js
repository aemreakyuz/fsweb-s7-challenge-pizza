import React, { useState, useEffect } from "react";
import "./Forms.css";
import "./Checkbox.css";
import "./TextInput.css";
import * as Yup from "yup";
import axios from "axios";

import { Form, FormGroup, Label, Input, Button } from "reactstrap";

export default function OrderForm(props) {
  const { productData } = props;

  //initial values
  const malzemeler = [
    "Pepperoni",
    "Domates",
    "Biber",
    "Sosis",
    "Sucuk",
    "Kanada Jambonu",
    "Sucuk",
    "Ananas",
    "Tavuk Izgara",
    "Jalapeno",
    "Kabak",
    "Soğan",
    "Sarımsak",
  ];

  const boyutlar = ["S", "M", "L"];

  const hamurlar = ["Süper İnce 5₺", "İnce 10₺", "Kalın 15₺"];

  const initFormData = {
    title: "",
    price: 0,
    comment: "",
    size: "",
    hamur: "",
    ekstraMalzemeler: "",
    totalprice: 0,
    amount: 1,
  };
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

  const [totalPrice, setTotalPrice] = useState(0);

  //helper functions
  const handleIncrement = () => {
    setSayac(sayac + 1);
  };
  const handleDecrement = () => {
    if (sayac > 1) {
      setSayac(sayac - 1);
    }
  };

  const handleEkstraMalzemeler = (event) => {
    setEkstraMalzemeler([...ekstraMalzemeler, event.target.value]);
  };

  const handleChange = (event) => {
    const newFormData = {
      ...formData,
      ...productData,
      amount: sayac,
      [event.target.name]: event.target.value,
    };
    setFormData(newFormData);
  };

  //Yup

  const formSchema = Yup.object().shape({
    size: Yup.string()
      .oneOf(["S", "M", "S"], "Bir pizza boyu seçmelisiniz.")
      .required("Pizza boyu seçimi gereklidir."),
    hamur: Yup.string()
      .oneOf(
        ["Süper İnce 5₺", "İnce 10₺", "Kalın 15₺"],
        "Bir pizza hamur kalınlığı seçmelisiniz."
      )
      .required("Pizza hamuru seçimi gereklidir."),
    extraOptions: Yup.array().max(10).of(Yup.string()),
  });

  useEffect(() => {
    formSchema.isValid(formData).then((valid) => setIsValid(valid));
  }, [formData, ekstraMalzemeler]);

  return (
    <div className="main-container">
      <div className="all-forms">
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
                  />
                  {boyut}
                </label>
              );
            })}
          </div>

          <div className="dropdown-form">
            <h3>
              Hamur Seç<span>*</span>
            </h3>
            <div className="hamurlar">
              <select
                id="hamur"
                name="hamur"
                defaultValue="doughThickness"
                onChange={handleChange}
              >
                <option value="doughThickness" selected>
                  Hamur Kalınlığı
                </option>

                {hamurlar.map((hamur) => {
                  return (
                    <option
                      selected={formData.hamur === hamur}
                      value={hamur}
                      name="hamur"
                    >
                      {hamur}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
        </div>
        <div>
          <h2>Ek Malzemeler</h2>
          <p>En fazla 10 malzeme seçebilirsiniz. 5₺</p>
        </div>
        <div className="checkbox-container">
          {malzemeler.map((malzeme, index) => {
            return (
              <div className="input-container">
                <input type="checkbox" />
                <label class="container" key={index}>
                  {malzeme}
                  <span class="checkmark"></span>
                </label>
              </div>
            );
          })}
        </div>
        <div className="comment">
          <Form>
            <FormGroup>
              <Label for="note">
                <h3>Sipariş Notu</h3>
              </Label>
              <br />
              <Input
                className="input-note"
                id="note"
                name="text"
                placeholder="Siparişine eklemek istediğin bir not var mı?"
                type="textarea"
              />
            </FormGroup>
          </Form>
        </div>
        <div className="bottom-form">
          <div style={{ display: "flex", alignItems: "center" }}>
            <Button className="btn-1" onClick={handleDecrement}>
              -
            </Button>
            <div className="sayac-3" style={{ fontSize: "32px" }}>
              {sayac}
            </div>
            <Button className="btn-2" onClick={handleIncrement}>
              +
            </Button>
          </div>
          <div className="">
            <div className="">
              <h3>Sipariş Toplamı</h3>
              <div className="">
                <h4>Seçimler</h4>
                <p>{ekstraMalzemelerFiyat}₺</p>
              </div>
              <div className="">
                <h4>Toplam</h4>
                <p>{totalPrice}₺</p>
              </div>
            </div>
            <div className="">
              <button className="" type="submit" disabled={!isValid}>
                SİPARİŞ VER
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
