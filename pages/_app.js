// import React from 'react'
// import App from 'next/app'
// import { Chart } from 'react-chartjs-2';
// import { ThemeProvider } from '@material-ui/styles';
// import validate from 'validate.js';

// import { chartjs } from 'helpers';
// import theme, { getTheme } from 'theme';
// import 'react-perfect-scrollbar/dist/css/styles.css';
// import 'assets/scss/index.scss';
// import validators from 'common/validators';

// Chart.helpers.extend(Chart.elements.Rectangle.prototype, {
//     draw: chartjs.draw
// });

// validate.validators = {
//     ...validate.validators,
//     ...validators
// };

// class MyApp extends App {
//     // Only uncomment this method if you have blocking data requirements for
//     // every single page in your application. This disables the ability to
//     // perform automatic static optimization, causing every page in your app to
//     // be server-side rendered.
//     //
//     // static async getInitialProps(appContext) {
//     //   // calls page's `getInitialProps` and fills `appProps.pageProps`
//     //   const appProps = await App.getInitialProps(appContext);
//     //
//     //   return { ...appProps }
//     // }

//     render() {
//         const { Component, pageProps } = this.props
//         // const thm = getTheme();
//         return (
//             <ThemeProvider theme={theme}>
//                 <Component {...pageProps} />
//             </ThemeProvider>
//         )
//     }
// }

// export default MyApp


import React from 'react'
import App from 'next/app'
import { Chart } from 'react-chartjs-2';
import { ThemeProvider } from '@material-ui/styles';
import validate from 'validate.js';

import { chartjs } from 'helpers';
import theme, { getTheme } from 'theme';
import 'react-perfect-scrollbar/dist/css/styles.css';
import 'assets/scss/index.scss';
import validators from 'common/validators';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import { CircularProgress } from "components";
import "assets/loader.css";
import $ from 'jquery';

Chart.helpers.extend(Chart.elements.Rectangle.prototype, {
    draw: chartjs.draw
});

validate.validators = {
    ...validate.validators,
    ...validators
};

class MyApp extends App {
    // Only uncomment this method if you have blocking data requirements for
    // every single page in your application. This disables the ability to
    // perform automatic static optimization, causing every page in your app to
    // be server-side rendered.
    //
    // static async getInitialProps(appContext) {
    //   // calls page's `getInitialProps` and fills `appProps.pageProps`
    //   const appProps = await App.getInitialProps(appContext);
    //
    //   return { ...appProps }
    // }

    componentDidMount() {
        $('.loader-view').hide();
        $('.page').show();
    }

    render() {
        const { Component, pageProps } = this.props
        // const thm = getTheme();
        return (
            <ThemeProvider theme={theme}>
                <MuiPickersUtilsProvider utils={MomentUtils}>
                    <div className="loader-view"
                        style={{ height: 'calc(100vh)' }}>
                        <CircularProgress />
                    </div>
                    <div className="page" style={{ display: 'none' }}>
                        <Component {...pageProps} />
                    </div>
                </MuiPickersUtilsProvider>
            </ThemeProvider>
        )
    }
}

export default MyApp