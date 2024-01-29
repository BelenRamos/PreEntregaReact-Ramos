const Item = ({producto}) => {

    return(
        <div className="card border-0">
            <img src={producto.image} alt={producto.name} style={{ maxWidth: '100%', height: 'auto' }} />
                <div className="card-body">
                    <h5 className="card-title">{producto.name}</h5>
                    <p className="card-text"> ${producto.price}</p>
                </div>
        </div>
    )
}

export default Item;