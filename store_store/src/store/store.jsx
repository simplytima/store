
import bgProd from './components/img/bg.jpg'
import HeaderMain from "./components/headerMain"





function Store(){
    return <div className="store">

        <img src={bgProd} alt="" className='storeBG'/>

        <HeaderMain/>


    </div>
}

export default Store