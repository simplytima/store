
import { useState } from 'react'



function Choose(){

    const[search,setSearch] = useState('')

    const onhandlerSearch=(e)=>{
        setSearch(e.target.value)
    }


    return <div className="choose">
        <ul>
            <li>Home</li>
            <li>/</li>
            <li>Catalog</li>
            <li>/</li>
            <li>All items</li>
        </ul>

        <div className="search">
            <input type="text" value={search} onChange={onhandlerSearch} placeholder='What are you looking for?' />
            <button>
                <ion-icon name="search-outline"></ion-icon>
            </button>
        </div>
    </div>
}


export default Choose