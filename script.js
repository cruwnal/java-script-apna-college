// let namsteBtn = document.querySelector('button');
// namsteBtn.addEventListener('click',inputMsg);

// //The querySelector() is a method used for searching
// // and returning the very first element within the 
// //document that matches the given selector.
// // The queryselector in javascript only returns the element that matches with one of the specified CSS selectors, or a group of selectors.

// function inputMsg(){
//     let name = prompt('Enter the name of student');
//     namsteBtn.textContent = 'Roll No. 1:'+ name;
// }



let namsteBtn = document.querySelector('button');
namsteBtn.addEventListener('click',inputMsg);

function inputMsg(){
    let i = 1;
     
    let name =  prompt('enter the of the student') ;
    
    namsteBtn.textContent = 'roll No' + (i++) + name;
}

//export PATH=$PATH:/usr/local/git/bin:/usr/local/bin