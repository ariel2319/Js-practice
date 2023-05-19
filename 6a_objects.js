const desestructurar = () => {
  console.clear();

  const objeto = { a: 1, b: 2, name: 'toto' }
  const perrito = { a: 1, b: 2, name: 'totito' }

  console.log('object => ', objeto)
  //! destructurar un objeto
  const { a, b, name } = perrito

  function showName({ name, a }) {
    console.log('this name is => ', name)
  }

  showName(objeto);
  showName(perrito);



  const array = [1, 2, 3, 4, 5, 6]
  //! destructurar un array
  const [pos1, pos2, , posicion4] = array; //? si guardo el lugar en vacío, también ocupa posición, por eso posicion4 mantiene el mismo valor

  console.log(pos1, pos2, posicion4)

  console.clear();

  //! spread operator
  const array2 = array //* copio la dirección de memoria, no obtengo un nuevo array..por eso desp se modifica..por lo que =>

  const arraySpread = [...array] //? => acá SI copio el array en un nuevo lugar

  array2[8] = 10;
  console.log({ array2 })
  console.log({ array })
  console.log({ arraySpread })

  //* con el spread puedo agregar nuevos elementos al nuevo obj, como así también modificar alguno, nombrandolo en los parámetros
  const objectSpread = { ...objeto , id: 2, a:123}
  console.log(objectSpread)

}

desestructurar()