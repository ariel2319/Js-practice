function iteraciones() {
  let student = 30;
  let studentsNames = ['ariel', 'alejandro', 'yesica', 'adriana']

  for (let i = 0; i < studentsNames.length; i++) {
    console.log(studentsNames[i])
  }
  /* for (let i = 1; i <= student; i++) {
    console.log(i)
  } */

  //SWITCH
  console.log('switch')
  i = 2
  switch (i) {
    case 'a':
      console.log('a');
    case 'b':
      console.log('b');
    case 2:
      console.log(2);
    default:
      console.log('No hay coincidencias..')
  }

}