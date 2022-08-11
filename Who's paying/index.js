let names = ['Femi', 'Kanyin', 'Shade', 'Ijeoma'];

function whosPaying(names) {

    personPaying = names[(Math.floor(Math.random() * names.length))]

    return `${personPaying} is paying for lunch`

}