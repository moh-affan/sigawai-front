import { useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles } from '@material-ui/styles';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
    Card,
    CardActions,
    CardContent,
    Avatar,
    Checkbox,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography,
    TablePagination
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {},
    content: {
        padding: 0
    },
    inner: {
        minWidth: 1050
    },
    nameContainer: {
        display: 'flex',
        alignItems: 'center'
    },
    avatar: {
        marginRight: theme.spacing(2)
    },
    actions: {
        justifyContent: 'flex-end'
    }
}));

const TableContent = props => {
    const { className, data, columns, rowsPerPageOptions, ...rest } = props;
    const classes = useStyles();
    const [selectedRows, setSelectedRows] = useState([]);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [page, setPage] = useState(0);
    const [startAt, setStartAt] = useState(0);
    const _columns = columns.map((c, i) => {
        if (c.render === undefined) {
            c.render = (data, rowData, rowIndex, colIndex) => {
                return data;
            }
        }
        return c;
    });

    const handleSelectAll = event => {
        const { data } = props;
        let _selectedRows;
        if (event.target.checked) {
            _selectedRows = data.map(d => d.id);
        } else {
            _selectedRows = [];
        }
        setSelectedRows(_selectedRows);
    };

    const handleSelectOne = (event, id) => {
        const selectedIndex = selectedRows.indexOf(id);
        let newSelectedRows = [];

        if (selectedIndex === -1) {
            newSelectedRows = newSelectedRows.concat(selectedRows, id);
        } else if (selectedIndex === 0) {
            newSelectedRows = newSelectedRows.concat(selectedRows.slice(1));
        } else if (selectedIndex === selectedRows.length - 1) {
            newSelectedRows = newSelectedRows.concat(selectedRows.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelectedRows = newSelectedRows.concat(
                selectedRows.slice(0, selectedIndex),
                selectedRows.slice(selectedIndex + 1)
            );
        }
        setSelectedRows(newSelectedRows);
    };

    const handlePageChange = (event, page) => {
        setPage(page);
        setStartAt(page * (rowsPerPage));
    };

    const handleRowsPerPageChange = event => {
        setRowsPerPage(event.target.value);
    };

    return (
        <Card {...rest} className={clsx(classes.root, className)} >
            <CardContent className={classes.content}>
                <PerfectScrollbar>
                    <div className={classes.inner}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell padding="checkbox">
                                        <Checkbox
                                            checked={selectedRows.length === data.length}
                                            color="primary"
                                            indeterminate={
                                                selectedRows.length > 0 &&
                                                selectedRows.length < data.length
                                            }
                                            onChange={handleSelectAll}
                                        />
                                    </TableCell>
                                    {columns.map((col, i) => (<TableCell key={i + (new Date()).getTime()}>{col.name}</TableCell>))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data.slice(startAt, (rowsPerPage + startAt)).map((d, n) => (
                                    <TableRow
                                        className={classes.tableRow}
                                        hover
                                        key={d.id}
                                        selected={selectedRows.indexOf(d.id) !== -1}
                                    >
                                        <TableCell padding="checkbox" key={n}>
                                            <Checkbox
                                                checked={selectedRows.indexOf(d.id) !== -1}
                                                color="primary"
                                                onChange={event => handleSelectOne(event, d.id)}
                                                value="true"
                                            />
                                        </TableCell>
                                        {columns.map((col, i) => {
                                            return (<TableCell key={i + n + (new Date()).getSeconds()}>{col.render(d[col.key], d, n, (i + 1))}</TableCell>)
                                        })}
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </PerfectScrollbar>
            </CardContent>
            <CardActions className={classes.actions}>
                <TablePagination
                    component="div"
                    count={data.length}
                    onChangePage={handlePageChange}
                    onChangeRowsPerPage={handleRowsPerPageChange}
                    page={page}
                    rowsPerPage={rowsPerPage}
                    rowsPerPageOptions={rowsPerPageOptions}
                />
            </CardActions>
        </Card>
    );
}

TableContent.propTypes = {
    columns: PropTypes.arrayOf(PropTypes.object),
    data: PropTypes.array.isRequired,
    rowsPerPageOptions: PropTypes.arrayOf(PropTypes.number)
};

TableContent.defaultProps = {
    rowsPerPageOptions: [5, 10, 25]
}

export default TableContent