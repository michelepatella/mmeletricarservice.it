import React, { useState } from 'react';
import { Layout } from 'antd';
import '../css/Home.css';
import { EMAIL, PHONE, FACEBOOK } from './constants';
import { motion } from "framer-motion";

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
 * Animation for the title + subtitle of the home page
 * @param text
 * @returns {Element}
 * @constructor
 */
const TextAnimation = ({ text, delay = 0}) => {

    const words = text.split(' ');

    return (
        <div style={{ whiteSpace: 'pre' }}>
            {words.map((word, index) => {
                if (word === "auto" || word === "nell'autofficina") {
                    return (
                        <React.Fragment key={index}>
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{
                                    delay: delay + index * 0.5,
                                    duration: 0.8,
                                }}
                                style={{ display: 'inline-block'}}
                            >
                                {word}{" "}
                            </motion.span>
                            <br />
                        </React.Fragment>
                    );
                } else {

                    if(word == "MM" || word == "Eletricar" || word == "Service!") {
                        return (
                            <motion.span
                                key={index}
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                transition={{
                                    delay: delay + index * 0.5,
                                    duration: 0.8,
                                }}
                                style={{display: 'inline-block', fontWeight: 'bold'}}
                            >
                                {word}{" "}
                            </motion.span>
                        );
                    }else{
                        return (
                            <motion.span
                                key={index}
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                transition={{
                                    delay: delay + index * 0.5,
                                    duration: 0.8,
                                }}
                                style={{display: 'inline-block'}}
                            >
                                {word}{" "}
                            </motion.span>
                        );
                    }

                }
            })}
        </div>
    );
};

/**
 * This component contains the layout of the home page (header + content)
 * @returns {Element}
 * @constructor
 */
function Home() {
    const [showSubtitle, setShowSubtitle] = useState(false);

    /**
     * Function to manage when the title animation is finished
     */
    const handleTitleAnimationComplete = () => {
        setShowSubtitle(true); //Start subtitle animation
    };

    return (
        <Layout className="home-layout" id="home">
            {/* Header Section */}
            <Header className="home-header">
                {/* Email Button */}
                <button className="contact-button email-button" onClick={onEmailButtonClik}>
                    <img src="/icons/emailIcon.svg" alt="Email"/>
                </button>
                {/* Facebook Button */}
                <button className="contact-button facebook-button" onClick={onFacebookButtonClik}>
                    <img src="/icons/facebookIcon.svg" alt="Facebook"/>
                </button>
                {/* Phone Button */}
                <button className="contact-button phone-button" onClick={onPhoneButtonClik}>
                    <img src="/icons/phoneIcon.svg" alt="Phone"/>
                </button>
            </Header>

            {/* Content Section */}
            <Content className="home-content">
                <div className="title-container">

                    {/* Title */}
                    <h1 className="home-title">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                                duration: 1.5,
                            }}
                            onAnimationComplete={handleTitleAnimationComplete}
                        >
                            <TextAnimation text={"Dove la tua auto trova l'eccellenza."} />
                        </motion.div>
                    </h1>

                    {/* Subtitle */}
                    {showSubtitle && (
                        <p className="home-description">
                            <TextAnimation text={"Benvenuto nell'autofficina MM Eletricar Service!"} delay={1.5} />
                        </p>
                    )}
                </div>
            </Content>
        </Layout>
    );
}

export default Home;