import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './components/components.css';
import Navigation from './components/Navigation.jsx';
import Footer from './components/Footer.jsx';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './pages/Home.jsx';
import OmOss from './pages/OmOss.jsx';
import Kontakt from './pages/Kontakt.jsx';
import Tjenester from './pages/Tjenester.jsx';
import Produkter from './pages/Produkter.jsx';
import Ansatt from './pages/Ansatt.jsx';

function App() {

  return (
    <BrowserRouter>
      	<Navigation />
      	<div className="content">
          	<Routes>
				<Route index path='/' element={<Home />} />
				<Route path='/omoss' element={<OmOss />} />
				<Route path='/kontakt' element={<Kontakt />} />
				<Route path='/produkter' element={<Produkter />} />
				<Route path='/tjenester' element={<Tjenester />} />
				<Route path='/ansatt' element={<Ansatt />} />
          	</Routes>
      	</div>
      	<Footer />
    </BrowserRouter>
  )
}

export default App
