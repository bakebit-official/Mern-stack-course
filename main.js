
const inputIdName = "inp"
const btnId = "addBtn"




const getInput = () => {
    const inputValue = document.getElementById(inputIdName).value;


    let node = document.createElement("li");
   
    let textnode = document.createTextNode(inputValue);
    node.appendChild(textnode);
    
    document.getElementById("myList").appendChild(node);
    

}

const clickBtn = document.getElementById(btnId).addEventListener("click",getInput)

// PURE FUNCTION
// const isConfirmed = () => {
//   const c = confirm("Are you sure?")
//     console.log(c);
//     if (c === true) {
//         console.log("Clicked done")
//     }
//     if (c === false) {
//         console.log("Clicked failed")
//     }
// }



// const getBtn = document.getElementById("btn");

// const btnClicked = getBtn.addEventListener("click",isConfirmed);


// document.getElementById("btn").addEventListener("click",() => {
//     const c = confirm("Are you sure?")
//     console.log(c);
//     if (c === true) {
//         console.log("Clicked done")
//     }
//     if (c === false) {
//         console.log("Clicked failed")
//     } 
// });

// const clickMe = ()=>{
//     const c = confirm("Are you sure?")
//     console.log(c);
//     if (c === true) {
//         console.log("Clicked done")
//     }
//     if (c === false) {
//         console.log("Clicked failed")
//     }
// }