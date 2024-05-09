import Click from "./components/click"
import Footer from "./components/footer"
import Header from "./components/header"
import Products from "./components/products"




function Main(){
    return <div className="main">
        <Header/>
        <Click/>
        <Products/>
        <Footer/>
    </div>
}


export default Main