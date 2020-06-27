const hbs = require('hbs')

hbs.registerHelper('getYear', () => new Date().getFullYear())
hbs.registerHelper('upper', (text) => text.toUpperCase())

