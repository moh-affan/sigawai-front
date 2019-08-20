import React from "react";
import { Dashboard as DashboardView } from "views";
import WithLayout from "components/WithLayout/WithLayout";
import Main from "layouts/Main";

const Dashboard = props => {
    return (<WithLayout component={DashboardView} layout={Main} loginRequired={true} redirectLogin="/" />);
}
export default Dashboard;