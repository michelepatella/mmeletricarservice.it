import { useState, useEffect } from 'react';
import { SECTIONS } from '../utils/constants';
import { scrollToSection } from '../utils/scrollToSection';
import {useAnimation} from "framer-motion";

/**
 * To manage menu behavior (both for small and big screens)
 * @returns {{visible: boolean, menuItems: {onClick: function(): void, children: *|undefined, href: string, title: *, key: string}[], section: string, toggleDrawer: toggleDrawer}}
 */
export const useMenu = () => {

    const menuItemControls = useAnimation();

    //state to track menu visibility
    const [visible, setVisible] = useState(false);

    //state to track the current active section
    const [section, setSection] = useState('home');

    //function to toggle the menu visibility
    const toggleDrawer = () => {
        setVisible(!visible);
    };

    useEffect(() => {

        menuItemControls.start({ opacity: 1, x: 0, transition: { duration: 0.8 } });

        const handleScroll = () => {
            let currentSection = '';
            let closestDistance = Infinity;

            //loop through each section to determine which is in view
            SECTIONS.forEach((sec) => {

                const element = document.getElementById(sec.id);

                if (element) {

                    const rect = element.getBoundingClientRect();
                    const distanceToTop = Math.abs(rect.top);

                    //check if the section is within the viewport
                    if (rect.top < window.innerHeight && rect.bottom > 0) {
                        //update the current section if it's the closest to the top
                        if (distanceToTop < closestDistance) {
                            closestDistance = distanceToTop;
                            currentSection = sec.id;
                        }
                    }
                }

                //check for child sections
                if (sec.children) {
                    sec.children.forEach((child) => {

                        const childElement = document.getElementById(child.id);

                        if (childElement) {

                            const childRect = childElement.getBoundingClientRect();
                            const distanceToTop = Math.abs(childRect.top);

                            if (childRect.top < window.innerHeight && childRect.bottom > 0) {
                                if (distanceToTop < closestDistance) {
                                    closestDistance = distanceToTop;
                                    currentSection = child.id;
                                }
                            }
                        }
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

    //generate menu items dynamically
    const menuItems = SECTIONS.map((section, index) => ({
        key: 'section-' + (index + 1),
        href: '#' + section.id,
        title: section.title,
        onClick: () => scrollToSection(section.id, setVisible),
        children: section.children
            ? section.children.map((child, childIndex) => ({
                key: 'section-' + (index + 1) + '-child-' + (childIndex + 1),
                href: '#' + child.id,
                title: child.title,
                onClick: () => scrollToSection(child.id, setVisible),
            }))
            : undefined,
    }));

    return { menuItems, menuItemControls, section, visible, toggleDrawer };
};