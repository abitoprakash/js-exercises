/**
 * Debounce function - 22/04/2024
 * 
 * @param {function} func 
 * @param {number} delay 
 * @returns Debounced function
 */
const debounce = (func, delay) => {
    let timerId;

    return function(...args) {
        const context = this;
        clearTimeout(timerId);

        timerId = setTimeout(() => {
            func.apply(context, args);
        }, delay);
    };
};

module.exports = debounce;