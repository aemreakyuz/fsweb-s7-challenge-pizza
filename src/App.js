import React, { useEffect, useState } from "react";
import OrderPage from "./pages/OrderPage";
import Home from "./pages/Home";
import SuccessPage from "./pages/SuccessPage";
import { menuData } from "./utils/menuData";

import { Switch, Route } from "react-router-dom";

const App = (props) => {
  const [order, setOrder] = useState();

  const handleOrder = (order) => {
    setOrder(order);
  };

  useEffect(() => {
    console.log("order", order);
  }, [order]);

  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/pizza">
          <OrderPage
            productData={menuData[0]}
            handleOrder={handleOrder}
            name="candidate"
          />
        </Route>
        <Route path="/success">
          <SuccessPage order={order} />
        </Route>
      </Switch>
    </>
  );
};
export default App;
