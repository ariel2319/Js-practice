function operaciones() {

  let a = 5; b = 2;
  let suma = a + b;
  let resta = a - b
  let producto = a * b
  let resto = a % b
  let div = a / b
  let exp = b ** 3

  console.log({ suma }, { resta }, { producto }, { resto }, { div }, { exp })


  //operador binarios
  console.log('BINARIOS')
  a = a + 4
  console.log(a)
  a += 5
  console.log(a)


  console.log('UNARIOS')
  console.log(a++)
  console.log(++a)
}