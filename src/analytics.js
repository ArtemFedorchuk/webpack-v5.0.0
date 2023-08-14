function createAnalytics() {
    let counter = 0;
    let isDestroyed = false;

    const button = document.querySelector('.btn');

    const listener = () => counter++;


    button.addEventListener('click', listener);

    return {
        destroy() {
            button.removeEventListener('click', listener);
            isDestroyed = true;
        },
        getClicks() {
            if(isDestroyed){
                return 'Analytics is destroyed'
            }

            return counter;
        }
    }
}
