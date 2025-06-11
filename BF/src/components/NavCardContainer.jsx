import NavCard from './NavCard.jsx'

function NavCardContainer({items}) {

    const style = {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center"
    }

    return (
        <div style={style}>
                {items.map((item, index) => (
                    <NavCard
                        key={index}
                        title={item.title}
                        image={item.image}
                        url={item.url}
                        select={() => setSelectedPage(() => item.page)}
                    />
                ))
                }
        </div>
    )
}

export default NavCardContainer;