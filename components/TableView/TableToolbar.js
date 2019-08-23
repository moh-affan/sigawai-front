import React from "react";
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';

import { SearchInput } from 'components';

const useStyles = makeStyles(theme => ({
    root: {},
    row: {
        height: '42px',
        display: 'flex',
        alignItems: 'center',
        marginTop: theme.spacing(1)
    },
    spacer: {
        flexGrow: 1
    },
    importButton: {
        marginRight: theme.spacing(1)
    },
    exportButton: {
        marginRight: theme.spacing(1)
    },
    searchInput: {
        marginRight: theme.spacing(1)
    }
}));

const TableToolbar = props => {
    const { className, onSearchListener, buttons, ...rest } = props
    delete rest.onSearchListener;
    const classes = useStyles();

    return (
        <div
            {...rest}
            className={clsx(classes.root, className)}
        >
            <div className={classes.row}>
                <span className={classes.spacer} />
                {buttons.map(function (el, i) {
                    return React.cloneElement(el, { key: i })
                })}
            </div>
            <div className={classes.row}>
                <SearchInput
                    className={classes.searchInput}
                    placeholder="Search..."
                    onChange={(event) => { onSearchListener(event.target.value); }}
                />
            </div>
        </div>
    );
}

TableToolbar.propTypes = {
    className: PropTypes.string,
    onSearchListener: PropTypes.func.isRequired,
    buttons: PropTypes.arrayOf(PropTypes.element)
};

TableToolbar.defaultProps = {
    buttons: []
}

export default TableToolbar