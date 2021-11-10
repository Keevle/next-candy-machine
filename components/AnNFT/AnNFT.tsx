/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import { useEffect } from "react";

export default function AnNFT({ nft }: any) {
  const isLegendary=nft.attributes[0]["value"]=="Legendary"?true:false 
  useEffect(() => {
    console.log(nft);
  }, []);
  function handleSubmit(as:any) {
    console.log(as)
  }
//    <p>{nft.description}</p>  
  return (
<div className={isLegendary? "compact card text-center  shadow-2xl w-1/1 nftcardholder backdrop-filter  " : "compact card text-center  shadow-2xl w-1/1 nftcardholder"}  
onClick={(e) => handleSubmit(nft.image)}>
      
  <figure className="indicator">
  {isLegendary && (<div className="indicator-item indicator-bottom indicator-center badge badge-primary">Legendary</div> )}
    <img src={nft.image} className="rounded-2xl" alt=""></img>
  </figure> 
  <div className="card-body">
    <h2 className=" card-title">{nft.name}</h2> 

  </div>
</div> 


  );
}
