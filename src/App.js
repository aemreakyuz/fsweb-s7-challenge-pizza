import React, { useEffect, useState } from "react";
import OrderPage from "./pages/OrderPage";
import Home from "./pages/Home";

import { Switch, Route } from "react-router-dom";
import SuccessPage from "./pages/SuccessPage";

const App = () => {
  const productData = [
    {
      title: "Position Absolute Acı Pizza",
      price: 85.5,
      description:
        "Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizatta denir.",
      rate: 4.9,
      comment: 200,
    },
  ];

  const [order, setOrder] = useState();

  useEffect(() => {
    console.log("app", order);
  }, [order]);

  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/pizza">
          <OrderPage productData={productData} />
        </Route>
        <Route path="/pizza/success">
          <SuccessPage />
        </Route>
      </Switch>
    </>
  );
};
export default App;
