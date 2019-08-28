import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/styles';
import { TableView } from 'components';
import data, { columns as cols } from './data';
import { Button, List, ListItem, ListItemIcon, ListItemText, Divider, Drawer, IconButton, Grid } from '@material-ui/core';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { PegawaiForm } from './components'

const drawerWidth = 250;

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3)
    },
    content: {
        marginTop: theme.spacing(2)
    },
    list: {
        marginTop: theme.mixins.toolbar.minHeight
    },
    drawer: {
        // width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        // width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-start',
    },
}));

const Pegawai = () => {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = useState(false);

    const buttons = [
        <Button variant="contained" color="primary" onClick={() => setOpen(true)}>Pegawai Baru</Button>
    ];

    return (
        <div className={classes.root}>
            <TableView columns={cols} data={data} buttons={buttons}></TableView>

            <Drawer
                className={classes.drawer}
                variant="persistent"
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor="right"
                open={open}
            >
                <PerfectScrollbar>
                    <div className={classes.list}>
                        <div className={classes.drawerHeader}>
                            <IconButton onClick={() => setOpen(false)}>
                                {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                            </IconButton>
                        </div>
                        <Divider />
                        <PegawaiForm />
                    </div>
                </PerfectScrollbar>
            </Drawer>
        </div>
    );
};

export default Pegawai;
