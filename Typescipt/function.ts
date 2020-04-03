function add (x:number,y:number)
{
    return x+ y
}

console.log(add(2,20))
//console.log(add(2, 2))

// make some different function 

function employee_detail (id:number,name :string , age:number , salary:number)
{
    console.log("id" ,id)
    console.log("name", name)
    console.log("age", age)
    console.log("salary" ,salary )

    if ( id != undefined)
        console.log("Id is ", id);


}
employee_detail(123,"jon",20,1313)





/// Rest parameters in TS
function addNumbers(...nums: number[]) {
    var i;
    var sum: number = 0;

    for (i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
    }
    console.log("sum of the numbers", sum)
}
addNumbers(1, 2, 3)
addNumbers(10, 10, 10, 10, 10)


