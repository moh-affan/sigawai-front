import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { TableView } from 'components';
import data, { columns as cols } from './data';


const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3)
    },
    content: {
        marginTop: theme.spacing(2)
    }
}));

const Pegawai = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <TableView columns={cols} data={data}></TableView>
        </div>
    );
};

export default Pegawai;
