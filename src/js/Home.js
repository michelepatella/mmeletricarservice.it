import React from 'react';
import { Layout } from 'antd';
import '../css/Home.css';
import { EMAIL, PHONE, FACEBOOK } from './constants';

const { Header, Content } = Layout;

/**
 * Method to call when the email button is clicked
 */
function onEmailButtonClik() {
    window.location.href = `mailto:${EMAIL}`;
}

/**
 * Method to call when the facebook button is clicked
 */
function onFacebookButtonClik() {
    window.open(FACEBOOK, "_blank");
}

/**
 * Method to call when the phone button is clicked
 */
function onPhoneButtonClik() {
    window.location.href = `tel:${PHONE}`;
}

/**
 * This component contains the layout of the home page (header + content)
 * @returns {Element}
 * @constructor
 */
function Home() {
    return (
            <Layout className="home-layout" id="home">

                {/* Header Section */}
                <Header className="home-header">
                    {/* Email Button */}
                    <button className="contact-button email-button" onClick={onEmailButtonClik}>
                        <img src="/icons/emailIcon.svg"/>
                    </button>
                    {/* Facebook Button */}
                    <button className="contact-button facebook-button" onClick={onFacebookButtonClik}>
                        <img src="/icons/facebookIcon.svg"/>
                    </button>
                    {/* Phone Button */}
                    <button className="contact-button phone-button" onClick={onPhoneButtonClik}>
                        <img src="/icons/phoneIcon.svg"/>
                    </button>
                </Header>

                {/* Content Section */}
                <Content className="home-content">
                    <div className="title-container">

                        {/* Title */}
                        <h1 className="home-title">
                            Dove la tua auto<br/>trova l'eccellenza.
                        </h1>
                        {/* Subtitle */}
                        <p className="home-description">
                            Benvenuto nell'officina <br/>
                            <strong>MM Eletricar Service</strong>!
                        </p>
                    </div>
                </Content>
            </Layout>
    );
}

export default Home;