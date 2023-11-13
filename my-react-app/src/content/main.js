import Scene0 from '../Scenes/Scene0.js';
import About from './About.js';
import ProblemStatement from './ProblemStatement.js';
import Solution from './Solution.js';
import Mission from './Mission.js';
import WebsiteStats from "./WebsiteStats.js";
import Services from "./services";
import HowItWorks from "./howItWorks.js";
import CustomerReview from "./customerReview.js";
import Experts from "./experts.js";
import Footer from "./footer.js";

const main =() =>{
    return(
        <main className="main">
            <Scene0 />
            <About/>
            <ProblemStatement/>
            <Solution/>
            <Mission/>
            <Services/>
            <WebsiteStats />
            <HowItWorks/>
            <CustomerReview />
            <Experts />
            <Footer/>   
        </main>
    );
};

export default main;