import Header from "../src/components/Layout/Header";
import React, { Fragment } from "react";
import Meals from "./components/Meals/Meals";

const App = () => {
  return (
    <Fragment>
      <Header />
      <Meals />
    </Fragment>
  );
};

export default App;
