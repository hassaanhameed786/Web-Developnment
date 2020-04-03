///most common function 
function fac(number) {
    //Base case
    if (number <= 0) {
        return -1;
    }
    
    else {
        return (number * fac(number -1));
    }
}
console.log(fac(4))