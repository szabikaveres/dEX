import { useEffect } from 'react';
import { ethers } from 'ethers'; // Ethers library let's us talk to the blockchain, this is what turns this app into a Dapp
import config from '../config.json';
import TOKEN_ABI from '../abis/Token.json';
import '../App.css';

function App() {

  //fetch accounts from metamask and log it to console
  const loadBlockchainData = async () => {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
    console.log(accounts[0])

    //Connect Ethers to Blockchain
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const { chainId } = await provider.getNetwork()
    console.log(chainId)

    //Talk to Token Smart Contract
    const token = new ethers.Contract( config[chainId].dEX.address, TOKEN_ABI, provider )
    console.log(token.address)
    const symbol =  await token.symbol()
    console.log(symbol)

  }

  useEffect( () => {
    loadBlockchainData()
  })

  return (
    <div>

      {/* Navbar */}

      <main className='exchange grid'>
        <section className='exchange__section--left grid'>

          {/* Markets */}

          {/* Balance */}

          {/* Order */}

        </section>
        <section className='exchange__section--right grid'>

          {/* PriceChart */}

          {/* Transactions */}

          {/* Trades */}

          {/* OrderBook */}

        </section>
      </main>

      {/* Alert */}

    </div>
  );
}

export default App;
