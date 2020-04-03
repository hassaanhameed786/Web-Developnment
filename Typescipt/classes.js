var user = /** @class */ (function () {
    //private  id: number;
    function user(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
        console.log('User created: ' + this.name);
    }
    // method in class
    user.prototype.register = function () {
        console.log(this.name + ' is now registered in this class');
    };
    user.prototype.payRent = function () {
        console.log(this.name + ' paid a rent of may');
    };
    return user;
}());
//created a object or instance of class
var has = new user('hassaanhmaeed', 'hassy@gmail.com', 20);
//console.log(has.age);
console.log(has.email);
//create  another object
var obj = new user('mak', 'mak@gmail.com', 22);
console.log(obj.name);
console.log(has.payRent());
console.log(obj.email);
// age is not acced because it is protected member/ field of class
//console.log(obj.age); 
