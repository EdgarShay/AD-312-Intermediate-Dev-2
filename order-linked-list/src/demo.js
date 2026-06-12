const Order = require("./Order");
const SinglyLinkedList = require("./SinglyLinkedList");

const orders = new SinglyLinkedList();

orders.append(
    new Order(
        101,
        "Alice",
        "Gaming Laptop"
    )
);

orders.append(
    new Order(
        102,
        "Bob",
        "Mechanical Keyboard"
    )
);

orders.append(
    new Order(
        103,
        "Charlie",
        "Wireless Mouse"
    )
);

console.log("Before Reverse:");
console.log(orders.display());

orders.reverse();

console.log("\nAfter Reverse:");
console.log(orders.display());