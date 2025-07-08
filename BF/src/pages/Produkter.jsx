import {useState} from 'react';

import NavCardContainer from '../components/NavCardContainer.jsx'
import Kompresjonstoy from '../pages/produkter/Kompresjonstoy.jsx'
import Brystproteser from '../pages/produkter/Brystproteser.jsx'
import Brokkbelter from '../pages/produkter/Brokkbelter.jsx'
import Saarprodukter from '../pages/produkter/Saarprodukter.jsx'
import Saalerogsko from '../pages/produkter/Saalerogsko.jsx'
import Stottebandasjer from '../pages/produkter/Stottebandasjer.jsx'
import Stomi from '../pages/produkter/Stomi.jsx'
import Kateter from '../pages/produkter/Kateter.jsx'
import Inkontinens from '../pages/produkter/Inkontinens.jsx'
import Ernaering from '../pages/produkter/Ernaering.jsx'
import Hoftebeskytter from '../pages/produkter/Hoftebeskytter.jsx'
import Saarbehandling from '../pages/produkter/Saarbehandling.jsx'
import BackToTop from '../components/BackToTop.jsx';


function Produkter() {

    const [SelectedPage, setSelectedPage] = useState(() => () => null);

    const produkter = [
        {
            title: "Stomi",
            image: "./src/assets/test.jpg",
            page: Stomi,
            url: "/produkter#stomi"
        },
        {
            title: "Kateter",
            image: "./src/assets/test.jpg",
            page: Kateter,
            url: "/produkter#kateter"
        },
        {
            title: "Inkontinens",
            image: "./src/assets/test.jpg",
            page: Inkontinens,
            url: "/produkter#inkontinens"
        },
        {
            title: "Ernæring",
            image: "./src/assets/test.jpg",
            page: Ernaering,
            url: "/produkter#ernaering"
        },
        {
            title: "Hoftebeskytter",
            image: "./src/assets/test.jpg",
            page: Hoftebeskytter,
            url: "/produkter#hoftebeskytter"
        },
        {
            title: "Sårbehandling",
            image: "./src/assets/test.jpg",
            page: Saarbehandling,
            url: "/produkter#saarbehandling"
        },
        {
            title: "Kompresjonstøy/strømper",
            image: "./src/assets/produkter/stromper.jpg",
            page: Kompresjonstoy,
            url: "/produkter#kompresjonstoy"
        },
        {
            title: "Brystproteser",
            image: "./src/assets/test.jpg",
            page: Brystproteser,
            url: "/produkter#brystproteser"
        },
        {
            title: "Brokkbelter",
            image: "./src/assets/test.jpg",
            page: Brokkbelter,
            url: "/produkter#brokkbelter"
        },
        {
            title: "Sårprodukter",
            image: "./src/assets/test.jpg",
            page: Saarprodukter,
            url: "/produkter#saarprodukter"
        },
        {
            title: "Støttebandaser/ortoser",
            image: "./src/assets/test.jpg",
            page: Stottebandasjer,
            url: "/produkter#stottebandasjer"
        },
        {
            title: "Såler og sko",
            image: "./src/assets/produkter/saalerogsko/sandal.jpg",
            page: Saalerogsko,
            url: "/produkter#saalerogsko"
        },


    ]

    const style = {
        display: "grid",
        gap: "50px"

    }

    return (
        <div style={style}>
            <div className="center">
                <h1>Våre produkter</h1>
                <h2>For din helse, komfort og medisinske behov</h2>
            </div>
            <NavCardContainer items={produkter} setSelectedPage={setSelectedPage} />
            <BackToTop text="Meny" />
            <SelectedPage />
        </div>
    )
}

export default Produkter;