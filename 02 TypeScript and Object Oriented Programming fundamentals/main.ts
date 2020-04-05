function letVsVar() {
    //using the var keyword 
    for (var j = 0; j < 5; j++) {
        console.log(j);
    }
    console.log('Finally' + j);  //(J is scoped to nearest fucntion i.e. letVsVar here so it gives no errors)   

    //using the let keyword 
    for (let i = 5; i < 10; i++) {
        console.log(i);
    }
    console.log('Finally ' + i); // (i is scoped to for block so it gives "Error Can't find name 'i'")

    //But in Javascript file the let will be replaced by var as per transpilation to ES2015 and JS will run smoothly.
}

