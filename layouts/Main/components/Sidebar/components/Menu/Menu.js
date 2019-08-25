import React, { forwardRef, useState } from 'react';
import { MakeLink } from 'components';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { List, ListItem, Button, colors, Collapse } from '@material-ui/core';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import Router from "next/router";

const useStyles = makeStyles(theme => ({
    root: {},
    item: {
        display: 'flex',
        paddingTop: 0,
        paddingBottom: 0
    },
    button: {
        color: colors.blueGrey[800],
        padding: '10px 8px',
        justifyContent: 'flex-start',
        textTransform: 'none',
        letterSpacing: 0,
        width: '100%',
        fontWeight: theme.typography.fontWeightMedium
    },
    icon: {
        color: theme.palette.icon,
        width: 24,
        height: 24,
        display: 'flex',
        alignItems: 'center',
        marginRight: theme.spacing(1)
    },
    active: {
        color: theme.palette.primary.main,
        fontWeight: theme.typography.fontWeightMedium,
        '& $icon': {
            color: theme.palette.primary.main
        }
    },
    submenu: {
        paddingLeft: theme.spacing(5),
    },
}));

const CustomLink = forwardRef((props, ref) => {
    const { children, ...rest } = props
    return (
        <div
            ref={ref}
            style={{ flexGrow: 1 }}
        >
            <MakeLink {...rest}><div>{children}</div></MakeLink>
        </div>
    )
});

const Menu = props => {
    const classes = useStyles();
    const { page, ...rest } = props;
    const [open, setOpen] = useState(false);

    const toggleSubmenu = () => {
        setOpen(!open);
    }

    let hasSubs = false;
    if (page.submenu)
        hasSubs = true;
    let marker = '';
    if (hasSubs)
        if (open)
            marker = <ExpandLess />
        else
            marker = <ExpandMore />
    const selected = process.browser ? Router.pathname.includes(page.href) : false;
    if (page.divider)
        return (
            <React.Fragment>
                {page.divider}
            </React.Fragment>
        );
    return (
        <React.Fragment>
            <ListItem
                className={classes.item}
                disableGutters
            // selected={selected}
            >
                <Button
                    activeclassname={classes.active}
                    className={clsx(classes.button, selected ? classes.active : '')}
                    component={hasSubs ? 'div' : CustomLink}
                    href={hasSubs ? '#' : page.href}
                    onClick={hasSubs ? toggleSubmenu : null}
                >
                    <div className={classes.icon}>{page.icon}</div>
                    <div style={{ flex: 1 }}>
                        {page.title}
                    </div>
                    {marker}
                </Button>
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {hasSubs && page.submenu.map((sub, i) => {
                        return (
                            <ListItem
                                className={classes.item}
                                disableGutters
                                key={sub.title}
                            // selected={selected}
                            >
                                <Button
                                    activeclassname={classes.active}
                                    className={clsx(classes.button, classes.submenu, selected ? classes.active : '')}
                                    component={CustomLink}
                                    href={sub.href}
                                >
                                    {sub.icon ? (<div className={classes.icon}>{sub.icon}</div>) : ''}
                                    {sub.title}
                                </Button>
                            </ListItem>
                        );
                    })}
                </List>
            </Collapse>
        </React.Fragment>
    );
}

Menu.propTypes = {
    page: PropTypes.object.isRequired
}

export default Menu;