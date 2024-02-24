function solusi() {
    const num = {
        a: 1,
        b: 2
    }

    const {a, b} = num;
    console.log(a + b);
}
solusi()

let school = {
    name: "Otong",
    location: "New York",
    established: '9999',
    displayInfo: () => {
        console.log(`${school.name} wes established in ${school.established} at ${school.location}`);
    },
    displaySeconInfo: () => {
        console.log(`Nama saya ${school.name} name school ${school.location.split('')[0]}`)
    }
}

for (const schoolKey in school) {
    console.log(schoolKey.split().join(''))
}

school.displayInfo()
school.displaySeconInfo()
console.log('=======')
let school1 = {
    ...school.displayInfo()
}
console.log(school1)
console.log('=======')
let school3 = Object.assign({}, school)
console.log(school3)
console.log('=======')
let school4 = JSON.parse(JSON.stringify((school)))
console.log(school4)


console.log('=======')

const person = {
    firstName: 'Geek',
    lastName: 'Sharma',
    address: {
        street: 'Connaught Place',
        city: 'New Delhi',
        country: 'India'
    }
}
console.log('===============================');
let parseStrinigfy = JSON.parse(JSON.stringify(person))
console.log(parseStrinigfy)
console.log('===============================');

console.log(person)
console.log('===============================');
let copyPerson = Object.assign({}, person);
console.log(copyPerson)

copyPerson.firstName = 'Otong'
copyPerson.address.street = 'Niwaru'; // connected
copyPerson.address.city = 'Jaipur'; // connected

console.log(copyPerson)


const student = {
    sdudet: {
        name: 'Alex'
    }
}

console.log(student.cat?.name)
console.log(student.sdudet?.name)

/*
let listBooks = {
    name: "Otong",
    ege: 30,
    nam: "2078899",
    time: 12,
    isGoHome: function (speed) {
        let addSpeed = speed + this.time;
        if (addSpeed => 20) {
            console.log(`Sekarang kecepatan ${addSpeed}`)
        }
        return addSpeed;
    }
}

console.log(listBooks.isGoHome(22));

*/
