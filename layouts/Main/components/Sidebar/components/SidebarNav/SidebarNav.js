/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React, { forwardRef } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { List } from '@material-ui/core';
import Router from "next/router";
import Menu from "../Menu";

const useStyles = makeStyles(theme => ({
  root: {}
}));


const SidebarNav = props => {
  const { pages, className, ...rest } = props;
  const classes = useStyles();

  return (
    <List
      {...rest}
      className={clsx(classes.root, className)}
    >
      {pages.map((page, i) => {
        return (<Menu page={page} key={page.title} />)
      })}
    </List>
  );
};

SidebarNav.propTypes = {
  className: PropTypes.string,
  pages: PropTypes.array.isRequired
};

export default SidebarNav;
