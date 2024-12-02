import './Home.css';
import React from "react";

function Home() {
    return (
        <>
            {/*Home page definition*/}
            <div id="home" className="home-container">
                <div className="title-container">

                    {/*Title*/}
                    <h1 className="home-title">Dove la tua auto<br/>trova l'eccellenza.</h1>

                    {/*Subtitle*/}
                    <h2 className="home-description">
                        Benvenuto nell'officina <br/> <strong>MM Eletricar Service!</strong>
                    </h2>

                </div>

                {/*Email, Facebook and Phone button*/}
                <div className="contacts-home-container">
                    <button className="email-button">
                        <img src="/icons/emailIcon.svg" />
                    </button>
                    <button className="facebook-button">
                        <img src="icons/facebookIcon.svg" className="facebool-icon"/>
                    </button>
                    <button className="phone-button">
                        <img src="icons/phoneIcon.svg" className="phone-icon"/>
                    </button>
                </div>
            </div>
        </>

);
}

export default Home;