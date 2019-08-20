import React, { Component } from "react";
import WithLayout from "components/WithLayout/WithLayout";
import { ProductList } from "views";
import Main from "layouts/Main";
import { withAuthSync } from "utils/auth";

const Products = props => {
    return (<WithLayout component={ProductList} layout={Main} />);
}
export default withAuthSync(Products);