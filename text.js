let string = 'Anany'
console.log(string.charAt(0))

let s = 0;
let e = string.length-1;

while(s<=e)
{
  let temp = string[s]
  string[s] = string[e]
  string[e] = temp

 s++
 e--
}

// string are immutable in javascript


