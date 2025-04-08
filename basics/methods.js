

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// // const filter = array.filter((item)=> console.log(item * 2))

// // Reduce
//  const combined = array.reduce((total, num)=> total + num, 0)

// //  console.log(combined)

//  // Find 
  
//   const get = array.find((item)=> item > 3)
// //   console.log(get)

// //Reverse
//   const Reverse = array.reverse()
// //   console.log(Reverse)

// const stringSet = ["one", "Two", "Three", "Four"]
 
//   const splice = stringSet.splice(0, 2)
// //   console.log(splice)
// //   console.log(array)
// // console.log(stringSet)

// const slice = stringSet.slice(0, 2)
// console.log(slice)

// // Map 
// // const data = array.map((i) => {
// //     if(i%2==0)
// //     {
// //         return i * 10
// //     }
// // })
// // console.log(data)
const string_array = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];
const splice = string_array.splice(0, 5, "orang","banana ")
console.log(splice)
console.log(string_array);

const multi = string_array.reduce((anany, manoj) => anany + " " + manoj)
console.log(multi)


// const splice = string_array.splice(4, 2)
// // console.log(splice)
// console.log(string_array)

// // splice == array.splice(starting index, no. of element)
// // Slice == (starting index, ending)


function Person(naam, umar)
{
   this.naam = naam;
   this.uamr = umar;

}

const person1 = new Person("manoj", 28)
console.log(`${person1.naam} and ${person1.uamr}`)


const person2 = new Person("Anany", 23)
console.log(person2)

