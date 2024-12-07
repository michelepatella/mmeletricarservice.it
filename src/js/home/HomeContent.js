import {motion} from "framer-motion";
import React, {useState} from "react";
import {HOME_TITLE, HOME_SUBTITLE} from "../constants";
import '../../css/home/HomeContent.css';

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
                //when the word is "auto" or "nell'autofficina", insert a <br/>
                if (word === "auto" || word === "nell'autofficina") {
                    return (
                        <React.Fragment key={index}>
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{
                                    delay: delay + index * 0.4,
                                    duration: 0.5,
                                }}
                                style={{ display: 'inline-block'}}
                            >
                                {word}{" "}
                            </motion.span>
                            <br />
                        </React.Fragment>
                    );
                } else {
                    //make bold the word "MM Eletricar Service"
                    if(word == "MM" || word == "Eletricar" || word == "Service!") {
                        return (
                            <motion.span
                                key={index}
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                transition={{
                                    delay: delay + index * 0.4,
                                    duration: 0.5,
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
                                    delay: delay + index * 0.4,
                                    duration: 0.5,
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
 * This component contains the home content
 * @returns {Element}
 * @constructor
 */
function HomeContent() {

    /**
     * To regulate when to show the subtitle, after that the title is shown
     */
    const [showSubtitle, setShowSubtitle] = useState(false);

    /**
     * Function to manage when the title animation is finished
     */
    const handleTitleAnimationComplete = () => {
        setShowSubtitle(true); //Start subtitle animation
    };

    return (
        <div className="title-container">

            {/* Title */}
            <h1 className="home-title">
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{
                        duration: 1.5,
                    }}
                    onAnimationComplete={handleTitleAnimationComplete}
                >
                    <TextAnimation text={HOME_TITLE}/>
                </motion.div>
            </h1>

            {/* Subtitle */}
            {showSubtitle && (
                <p className="home-description">
                    <TextAnimation text={HOME_SUBTITLE} delay={1.5}/>
                </p>
            )}
        </div>
    );
}

export default HomeContent;