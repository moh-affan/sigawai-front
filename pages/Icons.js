import React, { Component } from "react";
import WithLayout from "components/WithLayout/WithLayout";
import { Icons } from "views";
import Main from "layouts/Main";
import { withAuthSync } from "utils/auth";

const IconsPage = props => {
    return (<WithLayout component={Icons} layout={Main} />);
}
export default withAuthSync(IconsPage);