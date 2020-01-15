const hbs = require('hbs')


hbs.registerHelper('getYear', () => { return new Date().getFullYear() })

hbs.registerHelper('capitalize', (string) => {
    let words = string.split(' ')
    words.forEach((word, idx) => {
        words[idx] = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    });

    return words.join(' ');
})