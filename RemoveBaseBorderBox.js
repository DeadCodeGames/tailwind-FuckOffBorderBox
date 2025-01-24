module.exports = function ({ addBase }) {
    addBase({
        '*': {
            boxSizing: 'content-box',
            borderWidth: 'initial',
            borderStyle: 'initial',
            borderColor: 'initial',
        },
        '::before': {
            boxSizing: 'content-box',
            borderWidth: 'initial',
            borderStyle: 'initial',
            borderColor: 'initial',
        },
        '::after': {
            boxSizing: 'content-box',
            borderWidth: 'initial',
            borderStyle: 'initial',
            borderColor: 'initial',
        },
    });
};