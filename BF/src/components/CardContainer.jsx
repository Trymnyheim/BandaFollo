import ImageCard from './ImageCard.jsx';

function CardContainer({cards}) {
    return (
        <div>
            {cards.map((card, index) => (
                <ImageCard title = {card.title} text = {card.text} image = {card.image} id = {index}/>
            ))}
        </div>
    )
}

export default CardContainer;