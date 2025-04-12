/**
 * Method to handle the background container style dynamically
 * @param image
 * @returns {{background: string}}
 */
export const handleContainerStyle = (image) => {
    return {
        height: 'var(--background_container_height)',
        background:
            'linear-gradient(to top, rgba(20, 20, 20, 0) 50%, rgba(20, 20, 20, 1) 100%), ' +
            'linear-gradient(to bottom, rgba(20, 20, 20, 0) 50%, rgba(20, 20, 20, 1) 100%), ' +
            'linear-gradient(to left, rgba(20, 20, 20, 0) 50%, rgba(20, 20, 20, 1) 100%), ' +
            'url(' + image + ')',
        backgroundPosition: 'right',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    };
};