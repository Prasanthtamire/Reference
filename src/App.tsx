import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import BackToTop from './components/BackToTop';
import Home from './pages/Home';
import Services from './pages/Services';
import ThirdpartyServices from './pages/ThirdpartyServices.js';
import ThirdpartyProducts from './pages/ThirdpartyProducts.js';

import About from './pages/About';
import Products from './pages/Products';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import Blogs from './pages/BlogPage';
import WebDevelopment from './pages/WebDevelopment';

import InnovativeSoutions from './pages/Services/InnovativeSolutions.js';
import ExpertTeam from './pages/Services/ExpertTeam.js';
import ModernTechnology from './pages/Services/ModernTechnology.js';
import Webdesigning from './pages/Services/Webdesigning.js';

import Webapplication from './pages/Services/Webapplication';
import Mobileapps from './pages/Services/Mobileapps';
import Apiintegration from './pages/Services/Apiintegration.js';
import CreditBureau from './pages/Services/creditbureau.js';
import Hrmpayroll from './pages/Services/Hrmpayroll.js';
import HousingFinance from './pages/Services/Housingfinance.js';


import VehicleFinance from "./pages/Products/Vehiclefinance.js"
import WarehouseReceipt from "./pages/Products/WarehouseReceipt.js"
import Microfinance from "./pages/Services/Microfinance.js"
import GoldLaon from "./pages/Services/Goldloansoftware.js"
import ERP from "./pages/Services/ERP.js"
import Corebanking from "./pages/Services/Corebanking.js"
import Cooperativesociety from "./pages/Services/Cooperativesociety.js"


import Bbps from './pages/Thirdpartyservices/Bbps.js'
import Kisok from './pages/Thirdpartyservices/Kisok.js'
import AtmVan from './pages/Thirdpartyservices/Atmservices.js'
import Microatm from './pages/Thirdpartyservices/Microatm.js'
import Paymentgateway from './pages/Thirdpartyservices/Paymentgateway.js'
import POS from './pages/Thirdpartyservices/POS.js'
import Payout from './pages/Thirdpartyservices/Payout.js'
import NcrAtmServices from './pages/Thirdpartyservices/NcrAtmServices.js'
import NcrMicroatm from './pages/Thirdpartyservices/Microatm.js'
import HyosungAtmServices from './pages/Thirdpartyservices/HyosungAtmServices.js'
import PetroAtmServices from './pages/Thirdpartyservices/PertoAtmServices .js'
import OtcAtmLockSolution from './pages/Thirdpartyservices/PertoAtmServices .js'
import VideoKyc from './pages/Thirdpartyservices/VideoKyc .js'
import Reconciliation from './pages/Thirdpartyservices/Reconciliation.js'
import HumanATM from './pages/Thirdpartyservices/HumanAtm.js'


import StaffAugmentation from './pages/Thirdpartyservices/StaffAugmentation.js'



function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/blogs" element={<Blogs />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/webdevelopment" element={<WebDevelopment />} />
          <Route path="/our-services" element={<Services />} /> 
          <Route path="/our-Products" element={<Products />} />
          <Route path="/services/ThirdpartyServices" element={<ThirdpartyServices />} />


          <Route path="/services/InnovativeSoutions" element={<InnovativeSoutions />} />
          <Route path="/services/ExpertTeam" element={<ExpertTeam />} />
          <Route path="/services/ModernTechnology" element={<ModernTechnology />} />
          <Route path="/services/WebDesigning" element={<Webdesigning/>} />


          <Route path="/services/Webapplication" element={<Webapplication />} />
          <Route path="/services/MobileApps" element={<Mobileapps />} />
          <Route path="/services/Apiintegration" element={<Apiintegration />} />
          <Route path="/services/creditbureau" element={<CreditBureau/>} />
          <Route path="/services/Hrmpayroll" element={<Hrmpayroll/>} />
          <Route path="/services/HousingFinance" element={<HousingFinance/>} />
          <Route path="/services/Microfinance" element={<Microfinance/>} />
          <Route path="/services/Goldloansoftware" element={<GoldLaon/>} />
          <Route path="/services/ERP" element={<ERP/>} />
          <Route path="/services/corebanking" element={<Corebanking/>} />
          <Route path="/services/Cooperativesociety" element={<Cooperativesociety/>} />
          <Route path="/services/NcrMicroatm" element={<NcrMicroatm/>} />


          
          <Route path="/products/vehiclefinance" element={<VehicleFinance/>} />
          <Route path="/products/WarehouseReceipt" element={<WarehouseReceipt/>} />



          <Route path="/Thirdpartyservices/Bbps" element={<Bbps/>} />
          <Route path="/Thirdpartyservices/Kiosk" element={<Kisok/>} />
          <Route path="/Thirdpartyservices/AtmVan" element={<AtmVan/>} />
          <Route path="/Thirdpartyservices/Microatm" element={<Microatm/>} />
          <Route path="/Thirdpartyservices/Paymentgateway" element={<Paymentgateway/>} />
          <Route path="/Thirdpartyservices/Pos" element={<POS/>} />
          <Route path="/Thirdpartyservices/Payout" element={<Payout/>} />
          <Route path="/Thirdpartyservices/NcrAtmServices" element={<NcrAtmServices/>} />
          <Route path="/Thirdpartyservices/NcrMicroatm" element={<NcrMicroatm/>} />
          <Route path="/Thirdpartyservices/HyosungAtmServices" element={<HyosungAtmServices/>} />
          <Route path="/Thirdpartyservices/PetroAtmServices" element={<PetroAtmServices/>} />
          <Route path="/Thirdpartyservices/OtcAtmLockSolution" element={<OtcAtmLockSolution/>} />
          <Route path="/Thirdpartyservices/VideoKyc" element={<VideoKyc/>} />
          <Route path="/Thirdpartyservices/Reconciliation" element={<Reconciliation/>} />
          <Route path="/Thirdpartyservices/HumanATM" element={<HumanATM/>} />

          <Route path="/Thirdpartyservices/StaffAugmentation" element={<StaffAugmentation/>} />




          <Route path="/products/third-party" element={<ThirdpartyProducts />} />


          {/* <Route path="/Testinomial" element={<Testinomial />} /> */}

        </Routes>
        <Footer />            
        <BackToTop />
      </div>
    </Router>
  );
}

export default App