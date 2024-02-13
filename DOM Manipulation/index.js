const newTitel = document.querySelector('#judul')
newTitel.innerText = 'Welcome Website Company'

const newFragment = document.querySelector("#container")
const fragMend = document.createDocumentFragment()
const li = fragMend
    .appendChild(document.createElement("section"))
    .appendChild(document.createElement("ul"))
    .appendChild(document.createElement("li"))
li.textContent = "Membuat Fragment Conten List "

newFragment.appendChild(fragMend)

const sectionA = document.querySelector('section#a .p2');
sectionA.classList.add('desc', 'titel')
sectionA.classList.remove('desc');
sectionA.classList.item(1);
sectionA.classList.replace('p2', 'newClas')

const sectionB = document.querySelector("section#b")
sectionB.setAttribute('class', "halo")

const a = document.querySelector('a')
a.setAttribute('class', 'link')
a.removeAttribute('class')
a.removeAttribute('href')
a.setAttribute('href', 'https://instagram.com/diyawan.an')
a.style.backgroundColor = 'red'

// sectionB.getAttribute()
// console.log(sectionB)
// console.log(sectionB)
// const newElemetP = document.createElement('p');
// const newText = document.createDocumentFragment("This'is new Paragraf for example appand")
// sectionB.append(newElemetP, newText)
// sectionB.appendChild(newElemetP)
