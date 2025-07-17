import NavCard from './NavCard.jsx'

function NavCardContainer({items, setSelectedPage}) {

    return (
        <div className="container justify-center">
                {items.map((item, index) => (
                    <NavCard
                        key={index}
                        title={item.title}
                        text={item?.text ? item.text : ""}
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