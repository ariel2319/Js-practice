function arrays() {
  console.clear();
  const a = [0, 1, 3, '2', true]

  //slice
  const slice = a.slice(1, 4)
  console.log(slice)

  //splice
  a.splice(2, 2, 'sol');
  console.log(a)
}