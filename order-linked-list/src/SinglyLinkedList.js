const Node = require("./Node");

class SinglyLinkedList {
    constructor() {
        this.head = null;
    }

    append(order) {
        const newNode = new Node(order);

        if (!this.head) {
            this.head = newNode;
            return;
        }

        let current = this.head;

        while (current.next) {
            current = current.next;
        }

        current.next = newNode;
    }

    display() {
        let current = this.head;
        const orders = [];

        while (current) {
            orders.push(current.order.orderId);
            current = current.next;
        }

        return orders;
    }

    reverse() {
        let prev = null;
        let current = this.head;

        while (current) {
            const next = current.next;

            current.next = prev;

            prev = current;

            current = next;
        }

        this.head = prev;
    }
}

module.exports = SinglyLinkedList;