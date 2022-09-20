const Item = ({item, addItem}) => {
    return (
        <div className="col-sm-6 col-md-5 col-lg-4 item">
            <div className="box">
                <img className="rounded img-fluid churros-img" src={item.img} alt={item.name}/>
                <h3 className="name">{item.name}</h3>
                <p className="description">{item.desc}</p>
                <div className="d-flex justify-content-around align-items-center">
                    <button onClick={() => addItem(item)} className="btn btn-success" type="button">
                        Adicionar
                    </button>
                    <span className="badge rounded-pill bg-danger price">${item.price}</span>
                </div>
            </div>
        </div>
    );
};

export default Item;