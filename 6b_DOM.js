console.clear();

//selectores 

//bytagname
const div = document.getElementsByTagName('div')
/* console.log(div[1]) */
div[1].innerText = 'Soy el  div en la posición 1'

div[2].innerHTML = '<b>Soy el div 2, pero modificando la negrita</div>'
div[3].innerHTML = '<i> Soy el div 3, en cursiva</i>'


//byID
const divQuinto = document.getElementById('div5')
console.log(divQuinto)

//byCLASSNAME
const clase = document.getElementsByClassName('estilo1')
clase[0].innerText = 'soy un div con clase ;)'

//querySelector
//? elije el primer elemento con la descripción
const div2 = document.querySelector('div')
console.log(div2)

const divTercero = document.querySelector('#div3')
console.log(divTercero.innerText)


//QuerySelectorALL
const divAll = document.querySelectorAll('div')
divAll.forEach(div => div.classList.add('estilo2'))
console.log(divAll)

//classNAME => reescribe el atributo CLASS

//classLIST.ADD('clase que quiero agregar')

const estilo2 = document.querySelector('.estilo1')
console.log('estilo2: ', estilo2.innerHTML)