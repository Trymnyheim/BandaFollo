import NavCard from './NavCard.jsx'

function NavCardContainer({items, setSelectedPage}) {

    const style = {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "20px"
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