import Layout from '../src/Common/Layout';
import '../styles/globals.css'

function MyApp({ Component, pageProps, menuItems }) {
  return (
    <Layout menu={menuItems}>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
