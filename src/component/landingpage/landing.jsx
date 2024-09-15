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
    <>
    <Front/>
      <Cards />
      <Ratio />
      <LeadAlertSection />
      <PricingTable />
      <Faq />
      <PlatformsSection />
      <Footer />
    </>




  );
};

export default LandingPage;
