function solve(array) {
    let persons = array
    .shift()
    .split(', ')
    .reduce((a, b) => {
        a[b] = 0
        return a
    }, {})
    let patternChars = /[a-zA-Z]/gm;
    let patternDigits = /\d/gm;

    array
    .slice(0, array.indexOf('end of race'))
    .forEach(line => {
        let name = line
        .match(patternChars)
        .join('');
        let distance = line
        .match(patternDigits)
        .map(Number)
        .reduce((a, b) => { return a + b }, 0)
        if (persons.hasOwnProperty(name)) {
            persons[name] += distance;
        }
    })
    let sorted = Object.keys(persons)
    .sort((a, b) => {
        return persons[b] - persons[a];
    })

    console.log(`1st place: ${sorted[0]}\n2nd place: ${sorted[1]}\n3rd place: ${sorted[2]}`)
}
solve([
    'George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'
])