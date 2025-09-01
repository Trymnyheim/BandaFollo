import {useState} from 'react';

import NavCardContainer from '../components/NavCardContainer.jsx';
import BackToTop from '../components/BackToTop.jsx';

import Kompresjonstoy from './produkter/Kompresjonstoy.jsx';
import Brystproteser from './produkter/Brystproteser.jsx';
import Brokkbelter from './produkter/Brokkbelter.jsx';
import Saalerogsko from './produkter/Saalerogsko.jsx';
import Stottebandasjer from './produkter/Stottebandasjer.jsx';
import Stomi from './produkter/Stomi.jsx';
import Kateter from './produkter/Kateter.jsx';
import Inkontinens from './produkter/Inkontinens.jsx';
import Ernaering from './produkter/Ernaering.jsx';
import Hoftebeskytter from './produkter/Hoftebeskytter.jsx';
import Saarbehandling from './produkter/Saarbehandling.jsx';
import Hjelpemidler from './produkter/Hjelpemidler.jsx';

function Produkter() {

    const [SelectedPage, setSelectedPage] = useState(() => () => null);

    const produkter = [
        {
            title: "Stomi",
            image: "/images/produkter/stomi/salt_uro.png",
            page: Stomi,
            url: "/produkter#stomi"
        },
        {
            title: "Kateter",
            image: "/images/produkter/kateter/kateter_illustrasjon.webp",
            page: Kateter,
            url: "/produkter#kateter"
        },
        {
            title: "Inkontinens",
            image: "/images/produkter/inkontinens/inkontinens.webp",
            page: Inkontinens,
            url: "/produkter#inkontinens"
        },
        {
            title: "Brokkbelter",
            image: "/images/produkter/brokkbelter/brokkbelte1.jpg",
            page: Brokkbelter,
            url: "/produkter#brokkbelter"
        },
        {
            title: "Ernæring",
            image: "/images/produkter/ernaering/resource_apple.webp",
            page: Ernaering,
            url: "/produkter#ernaering"
        },
        {
            title: "Brystproteser",
            image: "/images/produkter/brystproteser/diamond_attach.jpg",
            page: Brystproteser,
            url: "/produkter#brystproteser"
        },
        {
            title: "Hoftebeskytter",
            image: "/images/produkter/hoftebeskytter/hoftebeskytter.jpg",
            page: Hoftebeskytter,
            url: "/produkter#hoftebeskytter"
        },
        {
            title: "Kompresjonstøy/strømper",
            image: "/images/produkter/kompresjonstoy/active_black.webp",
            page: Kompresjonstoy,
            url: "/produkter#kompresjonstoy"
        },
        {
            title: "Støttebandasjer/ortoser",
            image: "/images/produkter/stottebandasjer/kne.webp",
            page: Stottebandasjer,
            url: "/produkter#stottebandasjer"
        },
        {
            title: "Såler og sko",
            image: "/images/produkter/saalerogsko/sko.webp",
            page: Saalerogsko,
            url: "/produkter#saalerogsko"
        },
        {
            title: "Sårbehandling",
            image: "/images/produkter/saarprodukter/plaster.jpg",
            page: Saarbehandling,
            url: "/produkter#saarbehandling"
        },
        {
            title: "Hjelpemidler",
            image: "/images/produkter/hjelpemidler/hjelpemiddel.webp",
            page: Hjelpemidler,
            url: "/produkter#hjelpemidler"
        }

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