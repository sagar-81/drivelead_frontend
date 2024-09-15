import Front from './front'
import Footer from './footer'
import Cards from './cards'
import Ratio from './ratio';
import LeadAlertSection from './leadalert';
import Faq from './faq';
import PlatformsSection from './platformsection'
import PricingTable from './pricingtable';


const LandingPage = () => {

  return (
    <div className="bg-gradient-to-b from-purple-100 to-white">
      <Front />
      <Cards />
      <Ratio />
      <LeadAlertSection />
      <PricingTable />
      <Faq />
      <PlatformsSection />
      <Footer />
    </div >




  );
};

export default LandingPage;
