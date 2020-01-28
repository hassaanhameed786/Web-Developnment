//alert("hello its working");



// object in Js 

var student = {
    FirstName: 'Muahmmad',
    LastName: 'Hassaan',
    age: 22,


    address: {
        struct: 'Islamabad, Nuces, Uni',
        city: 'rahim yar khan',
        state: 'punjab'


    },
    //Functions

    add: function(a, b) {
        return a + b;
    },
    swap: function(a, b) {
        var temp;
        temp = a;
        a = b;
        b = temp;


    }

}


//console.log(student.swap(5, 10));


//object  Constructor
// var apple = new Object();
// apple.color = 'red';
// apple.shape = 'round';

// apple.describe = function() {
//     return 'An apple is the color ' + this.color + ' and shape is ' + this.shape;
// }

function Fruit(name, color, shape) {
    this.name = name;
    this.color = color;
    this.shape = shape;
    this.describe = function() {
        return 'A ' + this.name + ' and color is ' + this.color + 'and shape ' +
            this.shape;

    }

}

var melon = new Fruit('melon', 'lightgreen', 'oval');

//console.log(melon.describe());


//arrays of objects


var users = [{

        name: 'hassan',
        age: 30
    },
    {
        name: 'ammar',
        age: 23
    },

    {
        name: 'junaid',
        age: 30
    }
];
console.log(users[0].name);
console.log(users[0].age);
console.log(users[2].name);