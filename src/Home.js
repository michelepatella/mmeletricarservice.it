import './Home.css';
import React from "react";

function Home() {
    return (
        <>
            {/*Home page definition*/}
            <div id="home-container" className="home-container">
                <div className="title-container">
                    <h1 className="home-title">Dove la tua auto<br/>trova l'eccellenza.</h1>
                    <h2 className="home-description">
                        Benvenuto nell'officina <br/> <strong>MM Eletricar Service!</strong>
                        </h2>
                </div>
            </div>
        </>

);
}

export default Home;