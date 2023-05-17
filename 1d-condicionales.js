function condicionales() {

  let name = prompt('what is your name?')

  if (name == "ariel" || name == "Ariel") {
    alert('Thank you for your visit ', name)
  } else {
    alert('nos vemos perro')
  }
}

function ternario() {
  let a = prompt('What is my number?  (2)')

  a == 3
    ? console.log('Your number is correct')
    : alert('Error!')
}