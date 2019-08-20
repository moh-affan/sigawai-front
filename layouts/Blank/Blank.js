import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import $ from "jquery";

import PerfectScrollbar from 'react-perfect-scrollbar';

const useStyles = makeStyles(() => ({
  root: {
    height: '100%'
  },
  content: {
    height: '100%'
  }
}));

const Blank = props => {


  const { children } = props;

  const classes = useStyles();

  React.useEffect(function () {
    $("." + classes.root).height($(document).height());
  });

  return (
    <PerfectScrollbar>
      <div className={classes.root}>
        <main className={classes.content}>
          {children}
        </main>
      </div>
    </PerfectScrollbar>
  );
};

Blank.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default Blank;
