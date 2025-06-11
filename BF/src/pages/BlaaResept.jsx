import {useState} from 'react';

import NavCardContainer from '../components/NavCardContainer.jsx'
import Stomi from '../pages/blaaresept/Stomi.jsx'
import Kateter from '../pages/blaaresept/Kateter.jsx'
import Inkontinens from '../pages/blaaresept/Inkontinens.jsx'
import Ernaering from '../pages/blaaresept/Ernaering.jsx'
import Hoftebeskytter from '../pages/blaaresept/Hoftebeskytter.jsx'
import Saarbehandling from '../pages/blaaresept/Saarbehandling.jsx'
import BackToTop from '../components/BackToTop.jsx';


function Blaaresept() {

    const [SelectedPage, setSelectedPage] = useState(() => Stomi);

    const reseptvarer = [
        {
            title: "Stomi",
            image: "./src/assets/test.jpg",
            page: Stomi,
            url: "/blaaresept#stomi"
        },
        {
            title: "Kateter",
            image: "./src/assets/test.jpg",
            page: Kateter,
            url: "/blaaresept#kateter"
        },
        {
            title: "Inkontinens",
            image: "./src/assets/test.jpg",
            page: Inkontinens,
            url: "/blaaresept#inkontinens"
        },
        {
            title: "Ernæring",
            image: "./src/assets/test.jpg",
            page: Ernaering,
            url: "/blaaresept#ernaering"
        },
        {
            title: "Hoftebeskytter",
            image: "./src/assets/test.jpg",
            page: Hoftebeskytter,
            url: "/blaaresept#hoftebeskytter"
        },
        {
            title: "Sårbehandling",
            image: "./src/assets/test.jpg",
            page: Saarbehandling,
            url: "/blaaresept#saarbehandling"
        },


    ]

    const style = {
        display: "grid",
        gap: "50px"

    }

    return (
        <div style={style}>
            <NavCardContainer items={reseptvarer} setSelectedPage={setSelectedPage} />
            <BackToTop text="Meny" />
            <SelectedPage />
            
        </div>
    )
}

export default Blaaresept;