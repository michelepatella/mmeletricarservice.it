import { useState, useEffect } from 'react';
import { SECTIONS } from '../utils/const';
import { scrollToSection } from '../utils/scrollToSection';
import { useAnimation } from 'framer-motion';

/**
 * Custom hook to manage menu behavior (both for small and big screens)
 * @returns {{visible: boolean, menuItems: {onClick: function(): void, children: *|undefined, href: string, title: *, key: string}[], section: string, toggleDrawer: toggleDrawer}}
 */
export const useMenu = () => {

    const menuItemControls = useAnimation();

    //state to track menu visibility
    const [visible, setVisible] = useState(false);

    //state to track the current active section
    const [section, setSection] = useState('home');

    //method to toggle the menu visibility
    const toggleDrawer = () => {
        //enable/disable the scroll of the rest of the page
        //depending on if the menu is open/closed
        if (visible)
            document.documentElement.style.overflowY = 'auto';
        else
            document.documentElement.style.overflowY = 'hidden';

        setVisible(!visible);
    };

    useEffect(() => {

        menuItemControls.start({ opacity: 1, x: 0, transition: { duration: 0.8 } });

        const handleScroll = () => {
            let currentSection = '';
            let closestDistance = Infinity;

            //helper method to check element visibility and update current section
            const checkAndUpdateSection = (id) => {
                const element = document.getElementById(id);

                if (element) {
                    const rect = element.getBoundingClientRect();
                    const distanceToTop = Math.abs(rect?.top);

                    //check if the section is within the viewport
                    if (rect?.top < window.innerHeight && rect?.bottom > 0) {
                        if (distanceToTop < closestDistance) {
                            closestDistance = distanceToTop;
                            currentSection = id;
                        }
                    }
                }
            };

            //loop through each section to determine which is in view
            SECTIONS?.forEach((sec) => {
                //check for sections
                checkAndUpdateSection(sec?.id);

                //check for child sections
                if (sec?.children) {
                    sec?.children?.forEach((child) => {
                        checkAndUpdateSection(child?.id);
                    });
                }
            });

            //update the state with the current section
            setSection(currentSection);
        };

        //add scroll event listener
        window.addEventListener('scroll', handleScroll);

        return () => {
            //remove scroll event listener on cleanup
            window.removeEventListener('scroll', handleScroll);
        };
    }, [menuItemControls]);

    //method to generate menu items dynamically
    const menuItems = SECTIONS?.map((section, index) => ({
        key: 'section-' + (index + 1),
        href: '#' + section?.id,
        title: section?.title,
        onClick: () => scrollToSection(section?.id, setVisible),
        children: section?.children
            ? section?.children?.map((child, childIndex) => ({
                key: 'section-' + (index + 1) + '-child-' + (childIndex + 1),
                href: '#' + child?.id,
                title: child?.title,
                onClick: () => scrollToSection(child?.id, setVisible)
            }))
            : undefined,
    }));

    return { menuItems, menuItemControls, section, visible, toggleDrawer };
};