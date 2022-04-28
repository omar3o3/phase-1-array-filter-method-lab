// Code your solution here

///***************************FIRST QUESTION*********************************************

// const findMatching = (arr, name) => {
//     let result = arr.filter((element)=> element === name);
//     // result.forEach(lowerCaseFunction)
//     return result;
// }

const findMatching = (arr, name) => {
    let result = arr.filter((element)=> element.toLowerCase() === name.toLowerCase());
    return result;
}

// const lowerCaseFunction = (name) =>{
//     return name.lowerCaseFunction()
// }

// const findMatching = (arr, name) => {
//     let lowerCaseName = name.lowerCaseFunction();
//     if (lowerCaseName){
//         return 
//     }
// }

///***************************SECOND QUESTION*********************************************

//break up each string/name into individual strings/letters
//analyze the first leter of the stirng, and match it to the first letter of the search entry
//

const fuzzyMatch = (array , sought) => {
    //let firstLetterOfSought = sought.charAt(0);
    // let result = array.filter((element) => element.toLowerCase().indexOf(sought.toLowerCase()) === 0);
    // let result = array.filter((element) => element.toLowerCase().charAt(0) === sought.toLowerCase().charAt(0));
    let result = array.filter((element) => element.charAt(0) === sought.charAt(0));
    console.log(result)
    //let resultLowerCase = result.charAt(0);
    // if (firstLetterOfSought === resultLowerCase){
    //     return result;
    // }
    return result
}


// const fuzzyMatch = (array , sought) => {
//     let firstLetterOfSought = sought.charAt(0);
//     let resultLowerCase = result.charAt(0);
//     if (firstLetterOfSought === resultLowerCase){
//         return result;
//     }
//     // return result
// }

//////////^^^^^^^^I think the problem with this code is that i wasnt returning all drivers, i was only returning the first one?

///***************************THIRD QUESTION*********************************************


const matchName = (array, sought) =>{
    let result = array.filter((element) => element.name === sought)
    return result;
}