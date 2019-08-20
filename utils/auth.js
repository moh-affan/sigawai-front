import { Component } from 'react'
import Router from 'next/router'
import nextCookie from 'next-cookies'
import cookie from 'js-cookie'
import { AUTH_COOKIE_KEY } from "./constants";

function login({ token }) {
  cookie.set(AUTH_COOKIE_KEY, token, { expires: 1 }); //{ expires: 1, domain: window.location.hostname, secure: true }
  Router.push('/dashboard')
}

function logout() {
  cookie.remove(AUTH_COOKIE_KEY)
  // to support logging out from all windows
  window.localStorage.setItem('logout', Date.now());
  Router.push('/login')
}

// Gets the display name of a JSX component for dev tools
const getDisplayName = Component =>
  Component.displayName || Component.name || 'Component'

function withAuthSync(WrappedComponent) {
  return class extends Component {
    static displayName = `withAuthSync(${getDisplayName(WrappedComponent)})`

    static async getInitialProps(ctx) {
      const authorization = auth(ctx)

      const componentProps =
        WrappedComponent.getInitialProps &&
        (await WrappedComponent.getInitialProps(ctx))

      return { ...componentProps, authorization }
    }

    constructor(props) {
      super(props)

      this.syncLogout = this.syncLogout.bind(this)
    }

    componentDidMount() {
      window.addEventListener('storage', this.syncLogout)
    }

    componentWillUnmount() {
      window.removeEventListener('storage', this.syncLogout)
      window.localStorage.removeItem('logout')
    }

    syncLogout(event) {
      if (event.key === 'logout') {
        console.log('logged out from storage!')
        Router.push('/login')
      }
    }

    render() {
      return <WrappedComponent {...this.props} />
    }
  }
}

function auth(ctx) {
  const { authorization } = nextCookie(ctx)

  /*
   * If `ctx.req` is available it means we are on the server.
   * Additionally if there's no token it means the user is not logged in.
   */
  if (ctx.req && !authorization) {
    ctx.res.writeHead(302, { Location: '/login' })
    ctx.res.end()
  }

  // We already checked for server. This should only happen on client.
  if (!authorization) {
    Router.push('/login')
  }

  return authorization
}

export { login, logout, withAuthSync, auth }
