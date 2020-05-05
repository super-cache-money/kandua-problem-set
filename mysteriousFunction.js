// Given the following mysterious function:
function mysteriousFunction(string){
  return string.split("_")
    .map(elem => [parseInt(elem.slice(0, elem.length - 1)), elem[elem.length - 1]])
    .reduce((accum, currentPair) => accum + currentPair[1].repeat(currentPair[0]), "")
}

// TASK 1: Provide an example of non-empty input that won't produce an error

// TASK 2: Write the inverse of the mysterious function above, using the following template, only editing within the specified area:
function inverseMysteriousFunction(string){
  return string.split("").reduce((accum, currentChar)=>{
    // YOUR CODE STARTS HERE

    // YOUR CODE ENDS HERE
  },[])
    .map(pair=>pair.join("_"))
    .join("");
}

// TASK 3: Suggest more descriptive names for the original `mysteriousFunction` and its inverse
