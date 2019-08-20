import React, { Component } from "react";
import WithLayout from "components/WithLayout/WithLayout";
import { Settings } from "views";
import Main from "layouts/Main";
import { withAuthSync } from "utils/auth";

const SettingsPage = props => {
    return (<WithLayout component={Settings} layout={Main} />);
}
export default withAuthSync(SettingsPage);