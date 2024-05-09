import sale2 from './img/sale2.jpg'



function MidSale(){
    return <div className="midSale">
        <div className="img">
          <img src={sale2} alt="" />  
        </div>
        <div className="desc">
            <h1>Mid Season Sale</h1>
            <p>Get ready to revamp your wardrobe and home with our unbeatable deals!</p>
            <button>VIEW COLLECTION</button>
        </div>
        
    </div>
}


export default MidSale