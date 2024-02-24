const h2 = document.querySelector('#container');
const h2Create = document.createElement('h2');
h2Create.textContent = 'Sosial Media';
h2.appendChild(h2Create)



/*

const judul = document.querySelector('h1#judul');
judul.textContent = '<span>Welcome</span> to My website'


const p2 = document.querySelector('.p2');

function newStyle(){
    p2.style.backgroundColor = 'green';
    p2.style.color = 'black';
    p2.style.padding = '1.5rem';
    p2.style.fontSize = '1.5rem'
}

const p3 = document.querySelector('.p3');
p3.addEventListener('click', () => {
    const newP = document.querySelector('p');
    newP.textContent = 'New P';
    p3.appendChild(newP);
})

const p4 = document.querySelector('section#b p');
p4.classList.add('p4');
p4.innerHTML = '<span>Paragraf 4</span>'
const newSpan =  document.createElement('span');
const newTextSpan = document.createTextNode('new Text Span');
newSpan.appendChild(newTextSpan);
p4.appendChild(newSpan)

p4.addEventListener('click', () => {
   const ul = document.querySelector('section#b ul');
   const newTagList = document.createElement('li')
   const newtTextList  = document.createTextNode('New Text List');
   newTagList.appendChild(newtTextList)
    ul.appendChild(newTagList)
    p4.style.cursor = 'pointer';
   p4.style.textAlign = 'center';
})



const li2 = document.querySelector('section#b ul li:nth-child(2)')
// li2.style.backgroundColor = 'red'
const fontSize = 0;
li2.addEventListener('click', () => {
    li2.style.fontSize = '1.2rem';
    li2.style.boxShadow = '0 10px 10px 20px rgba(0,0,0,0.1)'
})
li2.addEventListener('click', () => {
    li2.style.backgroundColor = 'red';
    li2.style.borderRadius = '2rem'
    const newText= document.createTextNode('Data Baru');
    li2.appendChild(newText)
    alert('Berhasil di simpan')
})


const sectionA = document.querySelector('section#a');
const p1 = document.querySelector('.p1');
sectionA.removeChild(p1)

const resplaceSpan = document.querySelector('span')
const newSpanReplace = document.createElement('span');
const newSpanText = document.createTextNode('New Span Data');

newSpan.appendChild(newSpanText);
const parentDiv = resplaceSpan.parentNode;

parentDiv.replaceChild(newSpanReplace, resplaceSpan)




 */

/*
 // Chalege 1


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


 */
