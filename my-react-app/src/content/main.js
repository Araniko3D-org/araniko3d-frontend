import Scene0 from '../Scenes/Scene0.js';
import WebsiteStats from "./WebsiteStats.js";
import Services from "./services";
import CustomerReview from "./customerReview.js";
import Experts from "./experts.js";
import Footer from "./footer.js";

const main =() =>{
    return(
        <main className="main">
            <Scene0 />
            <WebsiteStats />
            <Services/>
            <CustomerReview />
            <Experts />
            <Footer/>   
        </main>
    );
};

export default main;