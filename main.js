import { LinkedList } from "./linkedList.js";

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
// list.append("turtle");
list.prepend("panda");

console.log(list.toString());

console.log(list.size());

console.log(list.getHead());

console.log(list.tail());

console.log(list.at(2));

list.pop();
console.log(list.toString());

console.log(list.contains("hamster"));

console.log(list.find("parrot"));

list.insertAt("kabootar", 2);
console.log(list.toString());

list.removeAt(2);
console.log(list.toString());
