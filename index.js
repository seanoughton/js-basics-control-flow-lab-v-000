// Write your code in this file!
function scuberGreetingForFeet(someValue) {
  let result
  if (someValue <= 400) {
    result = 'This one is on me!';
  } else if (someValue > 2000) {
      result = 'I will gladly take your thirty bucks.';
      if (someValue > 2500){
        result = 'No can do.';
      }
  }
  return result
}

function ternaryCheckCity(city){
  let result
  result = ('NYC') ? true : false 
  return result
}
