/*
    This :
        Implicite Binding:
        Explicite Binding:
        New Binding
        Default Binding
*/

// function sayMyName(name) {
//     console.log(`My Name is ${name}`);
// }
// sayMyName('Prays')
// sayMyName('Pratik')

const person = {
    name : 'Mowglee',
    sayMyName : function(){
        console.log(`My Name is ${this.name}`);
    }
}
// person.sayMyName();

// Explicite Binding
function sayMyName(){
        console.log(`My Name is ${this.name}`);
}
// sayMyName.call(person);


// New Binding
function Person(name){
    this.name = name
}
const p1 = new Person('Pratik');
const p2 = new Person('Batman');

console.log(p1.name, p2.name);