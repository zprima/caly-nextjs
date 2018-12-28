import Head from 'next/head'
import '../styles/styles.css'

const App = ({ title, children }) => (
  <main>
    <Head>
      <title>{title || 'App'}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" />
    </Head>
    <div className="container">
      {children}
    </div>
  </main>
)

export default App