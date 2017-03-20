// function getTempCallback(location, callback){
//   callback(undefined, 78);
//   callback('City not found');
// }
// getTempCallback('Philadelphia', function(err, temp){
//   if(err){
//     console.log(err, 'error');
//
//   }
//   else{
//     console.log('success', temp)
//   }
// });
//
// function getTempPromise(location){
//   return new Promise(function(resolve, reject){
//     setTimeout(function(){
//       resolve(79);
//       reject('City not found');
//     }, 1000)
//   });
// }
// getTempPromise('New York').then(function(temp){
//   console.log('promise worked', temp);
// }, function(err){
//   console.log('promise error', err);
// });
//challenge area

// function addPromise(a, b){
//   return new Promise(function(resolve, reject){
//     if(typeof a === 'number' && typeof b === 'number'){
//       resolve(a + b);
//     }
//     else{
//       reject('both arent numbers');
//     }
//   })
// }
//
// addPromise(2, 2).then(function(sum){
//   console.log('promise worked', sum);
// }, function(err){
//   console.log('promise error', err);
// })
// addPromise('f', 2).then(function(sum){
//   console.log('promise worked', sum);
// }, function(err){
//   console.log('promise error', err);
// })
