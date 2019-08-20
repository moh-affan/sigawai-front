import React from "react";
import { Dashboard as DashboardView } from "views";
import WithLayout from "components/WithLayout/WithLayout";
import Main from "layouts/Main";
import { withAuthSync } from "utils/auth";

const Dashboard = props => {
    return (<WithLayout component={DashboardView} layout={Main} loginRequired={true} redirectLogin="/" />);
}

export default withAuthSync(Dashboard);