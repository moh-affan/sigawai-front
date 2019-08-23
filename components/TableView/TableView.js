import { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from '@material-ui/styles';
import TableContent from "./TableContent";
import TableToolbar from "./TableToolbar";

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3)
    },
    content: {
        marginTop: theme.spacing(2)
    }
}));

const TableView = props => {
    const classes = useStyles();
    const { data, minQueryLength, columns, ...rest } = props
    const [filteredData, setFilteredData] = useState(data)
    const onSearchListener = (query) => {
        if (query.length >= minQueryLength) {
            let newData = data.filter(function (u) {
                return (JSON.stringify(u).toLowerCase().includes(query.toLowerCase()))
            });
            setFilteredData(newData);
        }
        if (query === "")
            setFilteredData(data);
    }

    return ([
        <TableToolbar onSearchListener={onSearchListener} key={1} />,
        <div className={classes.content} key={2}>
            <TableContent data={filteredData} columns={columns} {...rest} />
        </div>
    ]
    );
}

TableView.propTypes = {
    columns: PropTypes.arrayOf(PropTypes.object),
    data: PropTypes.array.isRequired,
    minQueryLength: PropTypes.number,
};

TableView.defaultProps = {
    minQueryLength: 2
}

export default TableView