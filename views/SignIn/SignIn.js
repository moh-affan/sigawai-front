import React, { useState, useEffect } from 'react';
import { Link as NextLink } from 'next/link';
import validate from 'validate.js';
import { makeStyles } from '@material-ui/styles';
import {
  Grid,
  Button,
  TextField,
  Link,
  Typography
} from '@material-ui/core';
import Router from "next/router";

import $ from "jquery";

import { AuthAPI } from "utils/net";

import toastr from "toastr";
import { login } from "utils/auth";

const schema = {
  username: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      maximum: 64
    }
  },
  password: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      maximum: 128
    }
  }
};

const useStyles = makeStyles(theme => (
  {
    root: {
      backgroundColor: theme.palette.background.default,
      height: '100%'
    },
    grid: {
      height: '100%'
    },
    quoteContainer: {
      [theme.breakpoints.down('md')]: {
        display: 'none'
      }
    },
    quote: {
      backgroundColor: theme.palette.neutral,
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundImage: 'url(/static/images/auth.webp)',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'top'
    },
    quoteInner: {
      marginTop: 'auto',
      textAlign: 'center',
      flexBasis: '600px'
    },
    quoteText: {
      color: theme.palette.dark,
      fontWeight: 300
    },
    name: {
      marginTop: theme.spacing(3),
      color: theme.palette.white
    },
    bio: {
      color: theme.palette.white
    },
    contentContainer: {},
    content: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    },
    contentHeader: {
      display: 'flex',
      alignItems: 'center',
      paddingTop: theme.spacing(5),
      paddingBototm: theme.spacing(2),
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2)
    },
    logoImage: {
      marginLeft: theme.spacing(4)
    },
    contentBody: {
      flexGrow: 1,
      display: 'flex',
      alignItems: 'center',
      [theme.breakpoints.down('md')]: {
        justifyContent: 'center'
      }
    },
    form: {
      paddingLeft: 100,
      paddingRight: 100,
      paddingBottom: 125,
      flexBasis: 700,
      [theme.breakpoints.down('sm')]: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2)
      }
    },
    title: {
      marginTop: theme.spacing(3)
    },
    socialButtons: {
      marginTop: theme.spacing(3)
    },
    socialIcon: {
      marginRight: theme.spacing(1)
    },
    sugestion: {
      marginTop: theme.spacing(2)
    },
    textField: {
      marginTop: theme.spacing(2)
    },
    signInButton: {
      margin: theme.spacing(2, 0)
    }
  }
));

const SignIn = props => {

  const classes = useStyles();

  const [formState, setFormState] = useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {}
  });

  useEffect(() => {
    const errors = validate(formState.values, schema);

    // setTimeout(function () {
    //   $('input[name=username]').focus();
    // }, 1000);

    setFormState(formState => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {}
    }));
  }, [formState.values]);

  const handleChange = event => {
    event.persist();

    setFormState(formState => ({
      ...formState,
      values: {
        ...formState.values,
        [event.target.name]:
          event.target.type === 'checkbox'
            ? event.target.checked
            : event.target.value
      },
      touched: {
        ...formState.touched,
        [event.target.name]: true
      }
    }));
  };

  const handleSignIn = event => {
    event.preventDefault();
    const formdata = $(event.target).serializeArray().reduce(function (map, obj) {
      map[obj.name] = obj.value;
      return map;
    }, {});
    AuthAPI.post('login', formdata).then(function (response) {
      if (response.data.token) {
        login(response.data.token);
        Router.replace('/dashboard');
      }
    }).catch(function (error) {
      try {
        toastr.error(error.response.data.message, "Galat");
      } catch (ex) {
        toastr.error(ex.message, "Galat");
      }
    })
  };

  const hasError = field =>
    formState.touched[field] && formState.errors[field] ? true : false;

  return (
    <div className={classes.root} >
      <Grid
        className={classes.grid}
        container
      >
        <Grid
          className={classes.quoteContainer}
          item
          lg={5}
        >
          <div className={classes.quote}>
            <div className={classes.quoteInner}>
              <Typography
                className={classes.quoteText}
                variant="h3"
              >
                Sistem Informasi Manajemen Data Pegawai
              </Typography>
              <Typography
                className={classes.quoteText}
                variant="h4"
              >
                Dinas Pekerjaan Umum Bina Marga
              </Typography>
              <div className={classes.person}>
                <Typography
                  className={classes.name}
                  variant="body1"
                >
                  @ {new Date().getFullYear()}
                </Typography>
                <Typography
                  className={classes.bio}
                  variant="body2"
                >
                  https://github.com/moh-affan
                </Typography>
              </div>
            </div>
          </div>
        </Grid>
        <Grid
          className={classes.content}
          item
          lg={7}
          xs={12}
        >
          <div className={classes.content}>
            <div className={classes.contentBody}>
              <form
                className={classes.form}
                onSubmit={handleSignIn}
              >
                <Typography
                  className={classes.title}
                  variant="h2"
                >
                  Sign in
                </Typography>
                <Typography
                  color="textSecondary"
                  gutterBottom
                >
                  Masuk ke aplikasi
                </Typography>
                <TextField
                  className={classes.textField + " inpEmail"}
                  error={hasError('username')}
                  fullWidth
                  helperText={
                    hasError('username') ? formState.errors.username[0] : null
                  }
                  label="Username / Email address"
                  name="username"
                  onChange={handleChange}
                  type="text"
                  value={formState.values.username || ''}
                  variant="outlined"
                />
                <TextField
                  className={classes.textField + " inpPassword"}
                  error={hasError('password')}
                  fullWidth
                  helperText={
                    hasError('password') ? formState.errors.password[0] : null
                  }
                  label="Password"
                  name="password"
                  onChange={handleChange}
                  type="password"
                  value={formState.values.password || ''}
                  variant="outlined"
                />
                <Button
                  className={classes.signInButton}
                  color="primary"
                  disabled={!formState.isValid}
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                >
                  Sign in now
                </Button>
                <Typography
                  color="textSecondary"
                  variant="body1"
                  hidden
                >
                  Don't have an account?{' '}
                  <Link
                    component={NextLink}
                    href="/sign-up"
                    variant="h6"
                  >
                    Sign up
                  </Link>
                </Typography>
              </form>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default SignIn;
