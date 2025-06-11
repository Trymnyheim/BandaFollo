import {useState} from 'react';

import NavCardContainer from '../components/NavCardContainer.jsx'
import Kompresjonstoy from '../pages/produkter/Kompresjonstoy.jsx'
import Brystproteser from '../pages/produkter/Brystproteser.jsx'
import Brokkbelter from '../pages/produkter/Brokkbelter.jsx'
import Saarprodukter from '../pages/produkter/Saarprodukter.jsx'
import BackToTop from '../components/BackToTop.jsx';


function Produkter() {

    const [SelectedPage, setSelectedPage] = useState(() => Kompresjonstoy);

    const produkter = [
        {
            title: "Kompresjonstøy/strømper",
            image: "./src/assets/test.jpg",
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
        }

    ]


    return (
        <>
            <NavCardContainer items={produkter} />
            <BackToTop text="Meny" />
            <SelectedPage />
            
        </>
    )
}

export default Produkter;