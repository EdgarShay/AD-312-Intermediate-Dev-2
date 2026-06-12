const Order = require("../src/Order");
const LinkedList = require("../src/SinglyLinkedList");

describe("Linked List Tests", () => {

    test("append orders correctly", () => {
        const list = new LinkedList();

        list.append(new Order(1, "A", "Phone"));
        list.append(new Order(2, "B", "Tablet"));

        expect(list.display()).toEqual([1, 2]);
    });

    test("display maintains insertion order", () => {
        const list = new LinkedList();

        list.append(new Order(10, "A", "Item"));
        list.append(new Order(20, "B", "Item"));

        expect(list.display()).toEqual([10, 20]);
    });

    test("reverse multiple orders", () => {
        const list = new LinkedList();

        list.append(new Order(1, "A", "Phone"));
        list.append(new Order(2, "B", "Tablet"));
        list.append(new Order(3, "C", "Laptop"));

        list.reverse();

        expect(list.display()).toEqual([3, 2, 1]);
    });

    test("reverse empty list", () => {
        const list = new LinkedList();

        list.reverse();

        expect(list.display()).toEqual([]);
    });

    test("reverse single order", () => {
        const list = new LinkedList();

        list.append(new Order(1, "A", "Phone"));

        list.reverse();

        expect(list.display()).toEqual([1]);
    });

    test("same customer multiple orders", () => {
        const list = new LinkedList();

        list.append(new Order(1, "John", "Phone"));
        list.append(new Order(2, "John", "Laptop"));

        list.reverse();

        expect(list.display()).toEqual([2, 1]);
    });

});