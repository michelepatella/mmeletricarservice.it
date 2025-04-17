import { HOME_TITLE, HOME_SUBTITLE } from "../../utils/const";

/**
 * Home Content
 * @returns {Element}
 * @constructor
 */
function HomeContent() {
    return (
        <>
            <div id="/home">

                {/* Title */}
                <h1
                    className="home-title"
                    dangerouslySetInnerHTML={{__html: HOME_TITLE}} />

                {/* Subtitle */}
                <p
                    className="home-subtitle"
                    dangerouslySetInnerHTML={{__html: HOME_SUBTITLE}} />

            </div>
        </>
    );
}

export default HomeContent;