import React from "react";
import WithLayout from "components/WithLayout/WithLayout";
import { Dashboard as DashboardView } from "views";
import Main from "layouts/Main";

const Content = props => {
    return (<div>Affan</div>)
}

const Dashboard = props => {
    // return (<WithLayout component={Content} layout={Main} loginRequired={true} redirectLogin="/" />);
    return (<WithLayout component={Content} layout={Main} />);
}
export default Dashboard;