/**
 * Method to handle when the drawer is open
 * @param setIsDrawerOpen
 */
export const onCustomUsedCarDrawerOpen = (setIsDrawerOpen) => {
    setIsDrawerOpen(true);
    document.body.classList.add('drawer-open');
    document.documentElement.style.overflow = 'hidden';
}

/**
 * Method to handle when the drawer is closed
 * @param setIsDrawerOpen
 */
export const onUsedCarDrawerClose = (setIsDrawerOpen) => {
    setIsDrawerOpen(false);
    document.body.classList.remove('drawer-open');
    document.documentElement.style.overflow = 'auto';
}