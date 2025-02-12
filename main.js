import { LinkedList } from "./linkedlist.js";

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());
console.log(list.getSize());
console.log(list.getHead());
console.log(list.getTail());
console.log(list.at(4));
console.log(list.at(10));
console.log(list.contains("cat"));
console.log(list.contains("alligator"));

list.prepend("alligator");
list.pop();
console.log(list.toString());
console.log(list.getSize());
console.log(list.getHead());
console.log(list.getTail());
console.log(list.at(4));
console.log(list.at(10));
console.log(list.contains("alligator"));
