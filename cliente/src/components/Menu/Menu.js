import Item from "./Item";


const Menu = ({name, desc, menu, addItem}) => {
    return (
        <section className="features-boxed">
            <div className="container">
                <div className="intro">
                    <h2 className="text-center">{name}</h2>
                    <p className="text-center">{desc}</p>
                </div>
                <div className="row justify-content-center features">
                    {menu.map((churros) => (
                        <Item key={churros.id} item={churros} addItem={addItem}/>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Menu;