function casting() {
  let a = 1; b = '2'; c = true;

  console.log(typeof a)
  console.log(typeof b)
  console.log(typeof c)

  //cadenas
  a = a.toString()
  console.log(a, 'type => ', typeof a);

  //boolean
  a = Boolean(a)
  console.log(a, 'type => ', typeof a);

  a = a.toString();
  console.log(a, 'type => ', typeof a);
}