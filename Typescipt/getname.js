function getName(firstName, lastName) {
    if (lastName == undefined) {
        return firstName;
    }
    return firstName + ' ' + lastName;
}
console.log(getName('hassy'));
//void type function return nothing 
function myvoid() {
    return;
}
