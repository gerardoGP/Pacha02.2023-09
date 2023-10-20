// Cree una función que tome una matriz de estudiantes y devuelva una matriz de nombres de estudiantes.
// getStudentNames([
//   { name: "Steve" },
//   { name: "Mike" },
//   { name: "John" }
// ]) ➞ ["Becky", "John", "Steve"]
const getStudentNames = (arr) => {
    let resultado = []
    arr.forEach(element => {
        resultado.push(element.name)
    });
    return resultado;
}
console.log(getStudentNames([
    { name: "Steve" },
    { name: "Mike" },
    { name: "John" }
  ]
  ))