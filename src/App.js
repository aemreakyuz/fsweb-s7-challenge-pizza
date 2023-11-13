import React, { useEffect, useState } from "react";
import OrderPage from "./pages/OrderPage";
import Home from "./pages/Home";
import SuccessPage from "./pages/SuccessPage";
import { menuData } from "./utils/menuData";
import { useHistory } from "react-router-dom";
import { Switch, Route } from "react-router-dom";

const App = (props) => {
  const history = useHistory();
  const [order, setOrder] = useState({});
  const [product, setProduct] = useState({});

  const handleOrder = (order) => {
    setOrder(order);
  };

  const selectedProduct = (id) => {
    const matchedProduct = menuData.find((product) => product.id === id);
    setProduct(matchedProduct);
    history.push("/order");
  };

  useEffect(() => {
    console.log("order", order);
  }, [order]);

  return (
    <div className="min-w-screen">
      <Switch>
        <Route exact path="/">
          <Home productData={menuData} selectedProduct={selectedProduct} />
        </Route>
        <Route path="/order">
          <OrderPage
            productData={product}
            handleOrder={handleOrder}
            name="candidate"
          />
        </Route>
        <Route path="/success">
          <SuccessPage order={order} />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
