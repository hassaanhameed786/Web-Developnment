// function showtodo (todo :{title :string, text: string})
// {
//     console.log(todo.title +' : ' + todo.text)
// }

// let mytodo = {title: "interface ", text:"take out the trash "}
// showtodo(mytodo);


interface Todo
{
    title :string;
    text   :string;
}
function showtodo(todo: Todo)
{
    console.log(todo.title + ' : ' + todo.text)
}

let mytodo = {title: "out  ", text:"take out the trash "}
showtodo(mytodo)