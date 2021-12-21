/* Event Lister */

// const changeBoxRedColor = () => {
//     console.log("Red Clicked")
//     document.getElementById("box").style.color = "#fff"
//     document.getElementById("box").style.backgroundColor = "red"
//     document.getElementById("box").innerText =
//         "I am red box"
// }

// const changeBoxGreenColor = () => {
//     console.log("Green Clicked")
//     document.getElementById("box").style.color = "#fff"
//     document.getElementById("box").style.backgroundColor = "green"
//         document.getElementById("box").innerText =
//         "I am green box"
// }

const changeBoxColor = (text, textColor, bgColor) => {
    const confirmKey = confirm(`You have clicked ${bgColor}`);
    

    console.log(confirmKey);

    /* back tick ` - tab er upore, esc er niche */
    console.log(`I am  ${bgColor} clicked`)
    
    if (confirmKey == true) {
       document.getElementById("box").style.color = textColor
    document.getElementById("box").style.backgroundColor = bgColor
    document.getElementById("box").innerText = text
    } 


    if (confirmKey == false) {
        alert("Failed");
    }
    


 
}


/* Arrow function */

// const studentName = "Lorin";
// const dob = "31-12-2002";

// const ageCalculator = (para1,para2) => {
//    console.log(para1)
//     console.log(para2)
//     const d = new Date()

//     const splitted_dob = para2.split("-");

//     const usersDay = splitted_dob[0];
//     const usersMonth = splitted_dob[1];
//     const usersYear = splitted_dob[2];

//     console.log(splitted_dob)

//     const year = d.getFullYear()
//     const month = d.getMonth()
//     const date = d.getDate()
    
//     console.log(year + "/" + month + "/" + date);

//     console.warn('Age of ' + para1)
//     const age = year - usersYear + " year";
//     return age

// }


// const getAge = ageCalculator(studentName, dob)
// console.log(getAge)

/* Function */
// function ageCalculator(para1,para2) {
//     console.log(para1)
//     console.log(para2)
//     const d = new Date()

//     const splitted_dob = para2.split("-");

//     const usersDay = splitted_dob[0];
//     const usersMonth = splitted_dob[1];
//     const usersYear = splitted_dob[2];

//     console.log(splitted_dob)

//     const year = d.getFullYear()
//     const month = d.getMonth()
//     const date = d.getDate()
    
//     console.log(year + "/" + month + "/" + date);

//     console.warn('Age of ' + para1)
//     const age = year - usersYear + " year";
//     return age

// }


// const getAge = ageCalculator(studentName, dob);

// console.log('getAge = ' + getAge);



/* DOM */
/* EVENT HANDLING */
      let a = "Hello";
      let b = "World";
    //   alert(a + " " + b);


// document.getElementsByTagName("h1")[0].innerHTML = "AMI VAT KHAI"

// document.getElementsByTagName("h1")[1].innerHTML = "AMI VAT KHAI"

// document.getElementsByTagName("h1")[2].innerHTML="AMI VAT KHAI"
   
    // document.getElementById("red").innerHTML = "Hello World!";
   
// console.log(document.getElementsByClassName("btn"))
    

// document.getElementsByClassName("btn")[0].innerHTML = "Hello World!";
      
// document.getElementsByClassName("btn")[1].innerHTML = "Hello World!";

// document.getElementsByClassName("btn")[2].innerHTML = "Hello World!";

// document.getElementsByClassName("btn")[3].innerHTML = "Hello World!";