import {useAddress,useMetamask} from '@thirdweb-dev/react'
import Main from '../components/Home/index.js'
import Image from 'next/image'
import Exabyte from './Exabyte-1.png'
import Head from 'next/head'

import logo from '../components/Header/logonaya.jpeg'
const style={
  wrapper:'flex flex-col h-screen items-center justify-center transition-all duration-500 bg-gradient-to-tl from-[#260033] via-[#003333] to-[#33001a] bg-size-200 bg-pos-0 hover:bg-pos-100',
  connectWalletButton:'bg-green-600 text-white py-3 px-2 hover:bg-green-900 hover:text-indigo-300 rounded-xl mt-12'
}

export default function Home() {
  const connectWithMetamask=useMetamask();
  const address=useAddress();
  const Auth=()=>{
    return(
      <div>
      <Head>
        <title>Connect Wallet | Nftflix</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="https://seeklogo.com/images/N/next-js-icon-logo-EE302D5DBD-seeklogo.com.png" />
      </Head>
      <div className={style.wrapper}>
        <div className="px-3">
          <Image src={logo} height={100} width={500} className='rounded-lg'/>
        </div>
        <div className="flex items-center justify-center space-x-2">
          <span className='mr-2 text-slate-400'>Powered by </span><Image src={Exabyte} height={32} width={105}/>
        </div>
    <button onClick={connectWithMetamask} className={style.connectWalletButton}>Connect to Metamask</button>
    {/* <ConnectWallet/> */}
        </div>
        
        </div>
    )
  }
  return (
    <div>
      {address?<Main/>:Auth()}
    </div>
  )
}
