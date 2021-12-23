
//Creating Element
// let myPara = document.createElement("p");
// let link = document.createElement("a");
// link.setAttribute('href', "http://google.com");
// const linkText = document.createTextNode("See More");

// link.append(linkText)

// const mynode = document.createTextNode("Comilla is beautiful <br>");

// const mynode2 = document.createTextNode("I love icecream <br>");

// const mynode3 = document.createTextNode("fafdadsf ");

// myPara.appendChild(mynode)
// myPara.appendChild(mynode2)
// myPara.appendChild(mynode3)
// const element = document.getElementById("testId");
// element.appendChild(myPara);
// element.appendChild(link)



let comment = ""
let email = ""


const handleComment = (e) =>comment= e
const handleEmail = (e) => email=e

const getInput = () => {
  
    const date = new Date();
    console.log(comment)
    console.log(email)
    let datetime =  date.getDate() + "/"
                + (date.getMonth()+1)  + "/" 
                + date.getFullYear() + " @ "  
                + date.getHours() + ":"  
                + date.getMinutes() + ":" 
        + date.getSeconds();
    
    let div = document.createElement("div");
    div.setAttribute("class", "list-item");

    const listHtml = `
              <p>       
                <span>${datetime}#</span>
                ${comment}
              </p>
              <div class="list-btn-group">
                <a href="" target="_blank">See More</a>
                <span>${email}</span>
              </div>
    `;

    div.innerHTML = listHtml;

    document.getElementById("notes-list").appendChild(div);
    
    document.getElementById("comment").value = ""
    document.getElementById("email").value =""

    // let node = document.createElement("li");
   
    // let textnode = document.createTextNode(inputValue);
    // node.appendChild(textnode);

    // document.getElementById("myList").appendChild(node);
    

}

const clickBtn = document.getElementById("addBtn").addEventListener("click",getInput)

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