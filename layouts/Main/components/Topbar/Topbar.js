import React, { useState } from 'react';
import Link from "next/link";
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar, Badge, Hidden, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import Avatar from '@material-ui/core/Avatar';
import Popover from '@material-ui/core/Popover';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { logout } from "utils/auth";
import { AuthAPI } from "utils/net";
import Cookies from "js-cookie";
import { AUTH_COOKIE_KEY } from "utils/constants";
import toastr from "toastr";

const useStyles = makeStyles(theme => ({
  root: {
    // boxShadow: 'none',
    // display: 'flex',
    zIndex: theme.zIndex.drawer + 1,
  },
  flexGrow: {
    flexGrow: 1
  },
  signOutButton: {
    marginLeft: theme.spacing(1)
  },
}));

const useStylesAvatar = makeStyles(theme => ({
  avatar: {
    margin: theme.spacing(1)
  }
}));


const user = {
  name: 'Shen Zhi',
  avatar: '/static/images/avatars/avatar_11.png',
  bio: 'Brain Director'
};

const doLogout = () => {
  AuthAPI.delete('login', { headers: { authorization: Cookies.get(AUTH_COOKIE_KEY) } }).then(function (response) {
    if (response.data.success)
      logout();
  }).catch(function (error) {
    try {
      toastr.error(error.response.data.message, "Galat");
    } catch (ex) {
      toastr.error(ex.message, "Galat");
    }
  })
}

const Topbar = props => {
  const { className, onSidebarOpen, ...rest } = props;

  const classes = useStyles();
  const avatarClass = useStylesAvatar();

  const [notifications] = useState([1, 2, 3]);

  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <AppBar
      {...rest}
      position="fixed"
      className={clsx(classes.root, className)}
    >
      <Toolbar>
        <Link href="/">
          <img
            alt="Logo"
            src="/static/images/logos/logo--white.svg"
          />
        </Link>
        <div className={classes.flexGrow} />
        <Hidden mdDown>
          <IconButton color="inherit">
            <Badge
              badgeContent={<span>{notifications.length}</span>}
              color="error"
              variant="standard"
            >
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <Avatar
            alt="Person"
            className={avatarClass.avatar}
            src={user.avatar}
            onClick={handleClick}
          />

        </Hidden>
        <Hidden lgUp>
          <Avatar
            alt="Person"
            className={avatarClass.avatar}
            src={user.avatar}
            onClick={handleClick}
          />
          <IconButton
            color="inherit"
            onClick={onSidebarOpen}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <MenuList>
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={doLogout}>Logout</MenuItem>
        </MenuList>
      </Popover>

    </AppBar>
  );
};

Topbar.propTypes = {
  className: PropTypes.string,
  onSidebarOpen: PropTypes.func
};

export default Topbar;
