import {ChainId,ThirdwebProvider} from '@thirdweb-dev/react'
import '../styles/globals.css' 
import {ThemeProvider} from 'next-themes'
function MyApp({ Component, pageProps }) {
  return(
  <ThirdwebProvider
    desiredChainId={ChainId.Goerli}
    chianRpc={{[
      ChainId.Goerli
    ]:'https://goerli.infura.io/v3/b59a14097d5f4883a02a8a1196f08d2e'}}>
  <ThemeProvider>
  <Component {...pageProps} />
  </ThemeProvider>
    </ThirdwebProvider>
)
}
export default MyApp
