
const country = "Bangla desh desh desh"
// undefined
// null


const language = ['Bangla', 'English', 'Hindi', 'Jarman', 'Japanese',];

 let withA = language.map((list) => {
  if (list.includes('a')) {
        return list
  } else {
    return null
  }
})

let withoutA = language.map((list) => {
  if (!list.includes('a')) {
       return list
  }else {
    return null
  }
})
 
const a = 21; // integer

if (a !== 20) {
  console.log('a is true')
}

// console.log('withA = ', withA)
// console.log('withoutA = ', withoutA)
// console.log("========================")

// withA = withA.filter((item) => {
  
//   if (item !== "null") {
//     return item
//   }
// })
// console.log('withA = ', withA)

// different type of property
// list of objects
// object of objects

// const myObj = {
//   student_Name: 'ERA',
//   student_Gender: 'Female',
//   age: 20,
//   is_active: true,
//   makeActive: (isActive, name) => {
    
//     if (isActive === true) {
//        console.log(`YES! ${name} is Active`)
//     }
//     if (isActive === false) {
//        console.log(`NO! ${name} is not Active`)
//     }
   
//   }

// }
// myObj.makeActive(false,myObj.student_Name)
// console.log(myObj)

 const marks = {
    c_programming: {
      mark: 80,
      gpa:"A+"
    },
    history: {
      mark: 60,
      gpa:"A"
    }
  } 
 const products = [
    {
    product_title: "Cloths",
    product_price: 200,
    product_variants: {
        color: "black",
        size: "L",
        quality:null
      }
    },
    {
    product_title: "books",
    product_price: 300,
      product_variants: {
      color:null,
      size:null,
      quality:"good"
    }
    },
    {
    product_title: "Foods",
    product_price: 400,
     product_variants: {
      color:null,
      size:null,
      quality:"good"
    }
    }
  ]
