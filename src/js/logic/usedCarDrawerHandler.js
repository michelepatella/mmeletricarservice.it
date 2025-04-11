/**
 * Method to handle when the drawer is open
 * @param setIsDrawerOpen
 */
export const onUsedCarDrawerOpen = (setIsDrawerOpen) => {
    setIsDrawerOpen(true);
    document.body.classList.add('drawer-open');
    document.documentElement.style.overflowY = 'hidden';
}

/**
 * Method to handle when the drawer is closed
 * @param setIsDrawerOpen
 */
export const onUsedCarDrawerClose = (setIsDrawerOpen) => {
    setIsDrawerOpen(false);
    document.body.classList.remove('drawer-open');
    document.documentElement.style.overflowY = 'auto';
}