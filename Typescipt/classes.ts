interface UserInterface {
    name:string;
    email:string
    age:number;
    register();
    payRent();



}

class user implements UserInterface{
    public  name :string;
    public  email :string;
    public  age :number;
    //private  id: number;


    constructor(name:string,email:string, age:number)
    {
        this.name =name;
        this.email=email;
        this.age=age;
        console.log('User created: '+this.name);
    }

    // method in class

    register()
    {
        console.log(this.name+' is now registered in this class')
    }

    payRent()
    {
        console.log(this.name+' paid a rent of may')
    }

}

//created a object or instance of class
let has = new user('hassaanhmaeed' ,'hassy@gmail.com' ,20) ;
//console.log(has.age);
console.log(has.email);

//create  another object

let obj = new user('mak', 'mak@gmail.com', 22);
console.log(obj.name);
console.log(has.payRent());

console.log(obj.email);
// age is not acced because it is protected member/ field of class

//console.log(obj.age); 

