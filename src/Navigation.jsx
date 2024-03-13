function Navigation( props ){
    return <div className="navigation">
        <input type="radio" name="page-option" id="page-0" 
        defaultChecked onClick={ () => props.changeSelectedPage( 0 )}/>
        <label htmlFor="page-0">Pratos Principais</label>
        <input type="radio" name="page-option" id="page-1" 
        onClick={ () => props.changeSelectedPage( 1 )}/>
        <label htmlFor="page-1">Sobremesas</label>
        <input type="radio" name="page-option" id="page-2" 
        onClick={ () => props.changeSelectedPage( 2 )}/>
        <label htmlFor="page-2">Bebidas</label>
    </div>
}

export default Navigation