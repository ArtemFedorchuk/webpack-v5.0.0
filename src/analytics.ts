function createAnalytics() {
    let counter: number = 0;
    let isDestroyed: boolean = false;

    const button = document.querySelector('.btn');

    const listener = (): number => counter++;


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

window["analytics"] = createAnalytics();
