import Slideshow from '/src/components/Slideshow.jsx';
import useLinkify from '/src/utils/useLinkify.jsx';
import { Fragment } from 'react';

function Produkt({ produkt, id, children}) {
  
  const linkedParagraphs = produkt.about.map((p) => useLinkify(p));
  const linkedUnderText = produkt.underText ? produkt.underText.map((p) => useLinkify(p)) : [];

  return (
    <div className="container" id={id}>
      <div className="produkt-text-container">
        <h1>{produkt.title}</h1>
        {linkedParagraphs.map((linked, index) => (
          <Fragment key={index}>{linked}</Fragment>
        ))}

        <ul>
          {produkt.subProducts.map((subProduct, index) => (
            <li key={index}>{subProduct}</li>
          ))}
        </ul>

        {linkedUnderText.map((linked, index) => (
          <Fragment key={index}>{linked}</Fragment>
        ))}

      </div>
      <div className="produkt-image-container">
        <Slideshow
          images={produkt.images}
          time={1000000}
          withArrows={true}
          contain
        />
      </div>
      <div className="container justify-center padding">
          {children}
      </div>
    </div>
  );
}


export default Produkt;
