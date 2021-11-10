/* eslint-disable react-hooks/exhaustive-deps */
// How many items were bought
// {nftsData.itemsRemaining}
import Head from "next/head";
import { useEffect, useState } from "react";

import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import useCandyMachine from "../hooks/useCandyMachine";
import useWalletBalance from "../hooks/useWalletBalance";
import { useWallet } from "@solana/wallet-adapter-react";

import { Toaster } from "react-hot-toast";
import Countdown from "react-countdown";
import useWalletNfts from "../hooks/useWalletNFTs";
import AnNFT from "../components/AnNFT/AnNFT";
import CountDownClockTS from "../components/CountDown"
import ReactDOM from 'react-dom';
export default function Home() {
  const [balance] = useWalletBalance();
  const {
    isSoldOut,
    mintStartDate,
    isMinting,
    startMint,
    startMintMultiple,
    nftsData,
  } = useCandyMachine();

  const [isLoading, nfts] = useWalletNfts();

  const { connected } = useWallet();

  const [isMintLive, setIsMintLive] = useState(false);
  const hStyle = { color:'#793ef9' };
  useEffect(() => {
    console.log(new Date(mintStartDate)
    )
    if (new Date(mintStartDate).getTime() < Date.now()) {
      setIsMintLive(true);
    }
  }, []);
  function percentage(partialValue:number, totalValue:number) {
    return (100 * partialValue) / totalValue+"%";
 } 

 let nicedatacountdown
 const SetupNiceTImer=(x:any)=>{
  return(
    <>
      <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <span className="font-mono text-5xl countdown">
          <span>{x.days}</span>
        </span>
            days
          
      </div> 
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <span className="font-mono text-5xl countdown">
          <span >{x.hours}</span>
        </span>
            hours
          
      </div> 
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <span className="font-mono text-5xl countdown">
          <span>{x.minutes}</span>
        </span>
            min
          
      </div> 

    </div>
    </>
)
 }
  const MintMany = () => {
    const [mintCount, setMintCount] = useState(5);

    return (
      <>
        <button
          onClick={() => startMintMultiple(mintCount)}
          disabled={isMinting}
          className="px-4 py-2 mx-auto font-bold text-white transition-opacity rounded-lg hover:opacity-70 bg-gradient-to-br from-green-300 via-blue-500 to-purple-600"
        >
          {isMinting ? "loading" : `mint ${mintCount}`}
        </button>

        <input
          disabled={isMinting}
          type="number"
          min={2}
          max={10}
          className="px-2 mx-auto mt-5 font-bold text-white bg-gray-500"
          value={mintCount}
          onChange={(e) => setMintCount((e.target as any).value)}
        />
        <p className="mx-auto mt-2">min 2; max 10;</p>
      </>
    );
  };

  return (
    <>
  <div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box ">
  <div className="flex-none">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">           
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>               
      </svg>
  </div> 
  <div className="flex-1 px-2 mx-2 ">

              {connected && (
              <div>
                <div className="stat-title">Nfts Owned</div> <p></p>
                <div className="stat-value">{document.querySelectorAll('#ownednfts .nftcardholder').length}</div>
              </div>
            )}            
  </div> 
  <div className="flex-1 lg:flex-none">
  </div> 
  <div className="flex-none">

  </div> 
  <div className="flex-none">
  {connected && (
              <div className="flex items-end mr-2">
                <p className=" stat-title">balance</p>
                <p className="mx-1 leading-none stat-value">
                  {balance.toFixed(2)}
                </p>
                <p
                  className="font-bold leading-none text-transparent bg-clip-text"
                  style={{
                    backgroundImage: `linear-gradient(to bottom right, #00FFA3, #03E1FF, #DC1FFF)`,
                  }}
                >
                  SOL
                </p>
              </div>
            )}
  </div> 
  <div className="flex-none">
  <WalletMultiButton />
  </div>
</div>  
      <Head>
        <title>Mint</title>
        <meta
          name="description"
          content="Simplified NextJs with typescript example app integrated with Metaplex's Candy Machine"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col items-center min-h-screen mx-6">
        <Toaster />
        <div className="flex items-center justify-between w-full mt-3">
          <div className="flex items-center">

            
          </div>
        </div>
        {connected && (
        
            <div className="w-full mt-20  stats border-base-600 shadow-2xl ">
            <div className="stat justify-center ">
              
              <div className="stat-title">Nfts Left</div> 
              <div className="stat-value"></div> 
              <div className="stat-value">{nftsData.itemsRemaining}/{nftsData.itemsAvailable}</div> 
              <div className="stat-desc">
              <div className="text-right">
      <span className="stat-value font-semibold inline-block text-blue-300 ">
        {percentage(nftsData.itemsRedeemed,nftsData.itemsAvailable)}
      </span>
      <p>Minted</p>
    </div>             
                <progress value={nftsData.itemsRedeemed} max={nftsData.itemsAvailable} className="progress progress-info "></progress>
              </div>
            </div>
          </div>

            

        )}
        <div className="flex items-start justify-center  my-5">
          {connected ? (
            <>
              {new Date(mintStartDate).getTime() < Date.now() ? (
                <>
                  {isSoldOut ? (
                    <div className="alert">
  <div className="flex-1">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#ff5722" className="w-6 h-6 mx-2">    
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"></path>                      
    </svg> 
    <label>The Drop has sold out</label>
  </div> 
</div>
                  ) 
                  : 
                  (

                    <>
                      <div className="">
                        <button
                          onClick={startMint}
                          disabled={isMinting}
                          className={isMinting ? "btn btn-wide btn-primary loading" : "btn btn-wide btn-primary"}
                          
                        >
                          {isMinting ? "Loading" : "Mint"}
                        </button>
                      </div>
                      <div className="flex flex-col w-1/2">

                      </div>
                    </>
                  )}
                </>
              ) : (
                <Countdown
                  date={mintStartDate}
                  onMount={({ completed }) => completed && setIsMintLive(true)}
                  onComplete={() => setIsMintLive(true)}
                  />)}</>
  ) : (

<div id="bigboy">

  <Countdown 
  className="stat-figure"
  date={Date.now() + 10000}
  onMount={({ completed }) => completed && setIsMintLive(true)}
  onComplete={() => console.log("Task done")}
  onPause={()=>{console.log("timer paused")}}
  onTick={(props)=>{
    nicedatacountdown={props}
    console.log(nicedatacountdown)
  }}
  />
<CountDownClockTS/>


</div>


          )}
        </div>
        {connected&&(
          <div className="">
          <div id="ownednfts">
          <div className="grid grid-cols-3 gap-4 md:grid-cols-6">
            {(nfts as any).map((nft: any, i: number) => {
              return <AnNFT key={i} nft={nft} /> ;
            })}
          </div>
        </div>
        </div>
        )}

      </div>
      <footer className="p-4 footer  footer-center shadow-lg bg-neutral text-neutral-content rounded-box">
  <div>
    <h2 className="stat-value">Powered by <p style={ hStyle } className="stat-value">Solana</p></h2>
  </div>
</footer>

    </>

  );


}



/*



<div className="alert">
  <div className="flex-1">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#ff5722" className="w-6 h-6 mx-2">    
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"></path>                      
    </svg> 
    <label>Connect your wallet</label>
  </div> 
</div>
*/