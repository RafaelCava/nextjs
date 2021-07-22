import '../../styles/globals.css'
import { Button } from '@material-ui/core';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Button>Hello World</Button>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
