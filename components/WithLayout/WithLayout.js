// import React from 'react';
// import PropTypes from 'prop-types';
// import Cookies from "js-cookie";
// import Router from 'next/router';
// import { AUTH_COOKIE_KEY } from 'utils/constants';

// const WithLayout = props => {
//   const { layout: Layout, component: Component, loginRequired, redirectLogin, ...rest } = props;

//   if (process.browser)
//     if (loginRequired)
//       if (Cookies.get(AUTH_COOKIE_KEY) === undefined)
//         Router.push(redirectLogin)

//   return (
//     <Layout>
//       <Component {...rest} />
//     </Layout>

//   );
// };

// WithLayout.propTypes = {
//   component: PropTypes.any.isRequired,
//   layout: PropTypes.any.isRequired,
// };

// WithLayout.defaultProps = {
//   loginRequired: false,
//   redirectLogin: '/'
// }

// export default WithLayout;


import React from 'react';
import PropTypes from 'prop-types';

const WithLayout = props => {
  const { layout: Layout, component: Component, ...rest } = props;

  return (
    <Layout>
      <Component {...rest} />
    </Layout>

  );
};

WithLayout.propTypes = {
  component: PropTypes.any.isRequired,
  layout: PropTypes.any.isRequired,
};

export default WithLayout;