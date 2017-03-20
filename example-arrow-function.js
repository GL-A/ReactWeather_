var names = ['Andrew', 'Rachel', 'Peng'];
//
// names.forEach(function(name) {
//   console.log('forEach', name)
// })
// names.forEach((name) => {
//   console.log('arrowFunc', name)
//   console.log('something else')
// })
// names.forEach((name) => console.log(name))
// var returnMe = (name) => name + '!'
// console.log(returnMe('George'))

// var person = {
//   name: 'George',
//   greet: function(){
//     names.forEach((name) => {
//       console.log(this.name + 'says hi to' + name)
//     })
//   }
// }
// person.greet();

//challenge Area

function add(a, b){
  return a + b
}

//addstatement
var addstatement = (a,b) =>{
  return a+b
}
//expressionStatement
var addExpression = (a, b) => a + b

console.log(addExpression(0, 7))

// console.log(addstatement(4, 7))
// console.log(add(1, 3))
// console.log(add(9, 0))
