import Advantages from './components/Advantages/Advantages.jsx';
import Banner from './components/Banner/Banner.jsx';
import Comments from './components/Comments/Comments.jsx';
import Companies from './components/Companies/Companies.jsx';
import Contact from './components/Contact/Contact.jsx';
import Conviction from './components/Conviction/Conviction.jsx';
import Directors from './components/Directors/Directors.jsx';
import Footer from './components/Footer/Footer.jsx';
import Statistic from './components/Statistic/Statistic.jsx';
import Navbar from './components/UI/Navbar/Navbar.jsx';
import WhyChoose from './components/WhyChoose/WhyChoose.jsx';

import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Companies>
        Trusted by 150+ worlds best companies  
      </Companies>
      <Conviction 
        title='Why choose Savingz?' 
        description='Move Forward from conventional CAs and Wealth Manger and Experience what you can do with your hard earned money'
        buttonText='STILL UNSURE'
      />
      <WhyChoose/>
      <Companies>
        As seen on loading media 
      </Companies>
      <Statistic/>
      <Conviction 
        title='Our features' 
        description='Because Success Deserves a Partner, Everything you need in one app'
        buttonText='DOWNLOAD THE APP'
      />
      <Advantages/>
      <Conviction 
        title='Testimonials' 
        description='Our customers are our loudest cheerleader, Once you come onboard you would never want to go back through the conventional way'
        buttonText='TALK TO US'
      />
      <Comments/>
      <Comments/>
      <Conviction 
        title='Our team' 
        description='Check out the team behind the scenes with value driven of industry experience'
        buttonText='APPSTORE'
      />
      <Directors/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
