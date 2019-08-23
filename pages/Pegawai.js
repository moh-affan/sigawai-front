import React, { Component } from "react";
import WithLayout from "components/WithLayout/WithLayout";
import { Pegawai as PegawaiContent } from "views";
import Main from "layouts/Main";
import { withAuthSync } from "utils/auth";

const Pegawai = props => {
    return (<WithLayout component={PegawaiContent} layout={Main} />);
}
export default withAuthSync(Pegawai);