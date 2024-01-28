/*
Map()

*/

let map = new Map();

map.set("Pratik","JavaScript");
map.set("Navin","Java");
map.set("Arjun", "ML");
map.set("Pratik", "AI");

// console.log(map.keys());
// console.log(map.values());
// console.log(map.has("Pratik"));
// console.log(map.get("Pratik"));

// to get all the values we need to use loop

for(let [key,value] of map){
    console.log(key, " : ", value);
}
