import {useState} from 'react';

import NavCardContainer from '../components/NavCardContainer.jsx'
import Kompresjonstoy from './produkter/Kompresjonstoy.jsx'
import Brystproteser from './produkter/Brystproteser.jsx'
import Brokkbelter from './produkter/Brokkbelter.jsx'
import Saarprodukter from './produkter/Saarprodukter.jsx'
import Saalerogsko from './produkter/Saalerogsko.jsx'
import Stottebandasjer from './produkter/Stottebandasjer.jsx'
import Stomi from './produkter/Stomi.jsx'
import Kateter from './produkter/Kateter.jsx'
import Inkontinens from './produkter/Inkontinens.jsx'
import Ernaering from './produkter/Ernaering.jsx'
import Hoftebeskytter from './produkter/Hoftebeskytter.jsx'
import Saarbehandling from './produkter/Saarbehandling.jsx'
import BackToTop from '../components/BackToTop.jsx';


function Produkter() {

    const [SelectedPage, setSelectedPage] = useState(() => () => null);

    const produkter = [
        {
            title: "Stomi",
            image: "/images/test.jpg",
            page: Stomi,
            url: "/produkter#stomi"
        },
        {
            title: "Ernæring",
            image: "/images/test.jpg",
            page: Ernaering,
            url: "/produkter#ernaering"
        },
                {
            title: "Brystproteser",
            image: "/images/test.jpg",
            page: Brystproteser,
            url: "/produkter#brystproteser"
        },
        /*
        {
            title: "Kateter",
            image: "/images/test.jpg",
            page: Kateter,
            url: "/produkter#kateter"
        },
        {
            title: "Inkontinens",
            image: "/images/test.jpg",
            page: Inkontinens,
            url: "/produkter#inkontinens"
        },
        {
            title: "Hoftebeskytter",
            image: "/images/test.jpg",
            page: Hoftebeskytter,
            url: "/produkter#hoftebeskytter"
        },
        {
            title: "Sårbehandling",
            image: "/images/test.jpg",
            page: Saarbehandling,
            url: "/produkter#saarbehandling"
        },
        {
            title: "Kompresjonstøy/strømper",
            image: "/images/produkter/stromper.jpg",
            page: Kompresjonstoy,
            url: "/produkter#kompresjonstoy"
        },
        {
            title: "Brokkbelter",
            image: "/images/test.jpg",
            page: Brokkbelter,
            url: "/produkter#brokkbelter"
        },
        {
            title: "Sårprodukter",
            image: "/images/test.jpg",
            page: Saarprodukter,
            url: "/produkter#saarprodukter"
        },
        {
            title: "Støttebandaser/ortoser",
            image: "/images/test.jpg",
            page: Stottebandasjer,
            url: "/produkter#stottebandasjer"
        },
        {
            title: "Såler og sko",
            image: "/images/produkter/saalerogsko/sandal.jpg",
            page: Saalerogsko,
            url: "/produkter#saalerogsko"
        },
        */

    ]

    const style = {
        display: "grid",
        gap: "50px",
        marginTop: '48px'

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