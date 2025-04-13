/**
 * Method to handle when the drawer is open
 * @param setIsDrawerOpen
 * @param id
 */
export const onUsedCarDrawerOpen = (setIsDrawerOpen, id) => {
    //set the drawer open
    setIsDrawerOpen(true);

    //make the menu hidden and the page not scrollable
    document.body.classList.add('drawer-open');
    document.documentElement.style.overflowY = 'hidden';

    //change the link dynamically
    window.history.pushState({ id: id }, '', 'used-car' + id);
};

/**
 * Method to handle when the drawer is closed
 * @param setIsDrawerOpen
 */
export const onUsedCarDrawerClose = (setIsDrawerOpen) => {
    //set the drawer closed
    setIsDrawerOpen(false);

    //make the menu visible and the page scrollable
    document.body.classList.remove('drawer-open');
    document.documentElement.style.overflowY = 'auto';

    //redirect the user to the used cars page
    window.location.hash = '#used-cars';
};

