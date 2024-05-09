import sweatshirt from './imgItem/sweatshirt.jpeg'







function DescriptionItem(){
    return <div className="descriptionItem">
        <div className="imgItem">
            <img src={sweatshirt} alt="" />
        </div>
        <div className="descSpec">
            <div className="desc">
                <h4>Description</h4>
                <p>A vintage-inspired popover with all the right details: ribbed paneling, zippered half-zip collar, and a cool faded wash that gets better with time. </p>
            </div>
            <div className="spec">
                <h4>Specification</h4>
                <ul>
                    <li>100% Cotton</li>
                </ul>
                
            </div>
        </div>
    </div>
}



export default DescriptionItem