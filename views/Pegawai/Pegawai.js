import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/styles';
// import { TableView } from 'components';
import data, { columns as cols } from './data';
import { Button, List, ListItem, ListItemIcon, ListItemText, Divider, Drawer, IconButton, Grid } from '@material-ui/core';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { PegawaiForm } from './components'
import MUIDataTable from "mui-datatables";
import moment from "moment";
import "moment/locale/id";
import AddIcon from '@material-ui/icons/Add';

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
    row: {
        height: '42px',
        display: 'flex',
        alignItems: 'center',
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(2),
    },
    spacer: {
        flexGrow: 1
    },
}));


const Pegawai = () => {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const dtCols = [
        {
            name: "nik",
            label: "NIK",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "nama",
            label: "Nama",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "tgl_lahir",
            label: "Tempat, Tanggal Lahir",
            options: {
                filter: true,
                sort: true,
                customBodyRender: function (value, tableMeta, updateValue) {
                    const tgl = moment(value, "DD-MM-YYYY").locale('id').format('LL');
                    const tempatLahir = data[tableMeta.rowIndex].tempat_lahir;
                    return `${tempatLahir}, ${tgl}`;
                }
            }
        },
        {
            name: "jenis_kelamin",
            label: "Jenis Kelamin",
            options: {
                filter: true,
                sort: true,
            }
        },
    ];

    const options = {
        filterType: 'checkbox',
        customToolbar: () => {
            return (<IconButton color="default" onClick={() => setOpen(true)}><AddIcon /></IconButton>)
        }
    };

    const buttons = [
        <Button variant="contained" color="primary" onClick={() => setOpen(true)}>Pegawai Baru</Button>
    ];

    return (
        <div className={classes.root}>
            <div className={classes.row}>
                <span className={classes.spacer} />
                {buttons.map(function (el, i) {
                    return React.cloneElement(el, { key: i })
                })}
            </div>

            <MUIDataTable
                size="small"
                title={"Data Pegawai"}
                data={data}
                columns={dtCols}
                options={options}
            />

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
