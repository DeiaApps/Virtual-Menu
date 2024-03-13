function MenuItem({ name, description, price, image }){
    return (
        <div>
            <div className="container-item-menu">
                <div className="">
                    <h2>{name}</h2>
                    <p>{price}</p>
                    <p>{description}</p>
                </div>
                <img src={image} alt=""></img>
            </div>
        </div>
    );
}
export default MenuItem