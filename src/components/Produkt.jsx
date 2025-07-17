import Slideshow from '/src/components/Slideshow.jsx';
import useLinkify from '/src/utils/useLinkify.jsx';

function Produkt({ produkt, id }) {
  const containerStyle = { flex: '1 0 300px' };

  // Call useLinkify on each paragraph BEFORE rendering
  const linkedParagraphs = produkt.about.map((p) => useLinkify(p));

  // For underText
  const linkedUnderText = produkt.underText ? useLinkify(produkt.underText) : null;

  return (
    <div className="container" id={id}>
      <div style={containerStyle}>
        <h1>{produkt.title}</h1>

        {/* Linkified paragraphs */}
        {linkedParagraphs.map((linked, index) => (
          // linkify already returns <p>, so just render it
          <p key={index}>{linked}</p>
        ))}

        {/* Sub-products list */}
        <ul>
          {produkt.subProducts.map((subProduct, index) => (
            <li key={index}>{subProduct}</li>
          ))}
        </ul>

        {/* Under text (if exists) */}
        {linkedUnderText}

      </div>

      {/* Slideshow */}
      <div style={{...containerStyle, border: 'solid 1px rgba(209, 209, 209, 1)'}} >
        <Slideshow
          images={produkt.images}
          time={10000}
          withArrows={true}
          height='50'
          contain
        />
      </div>
    </div>
  );
}


export default Produkt;
