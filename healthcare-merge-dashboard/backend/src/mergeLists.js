const ListNode = require("./LinkedList");

function mergeLists(l1, l2) {

    const dummy = new ListNode(0, 0, "");

    let current = dummy;

    while (l1 && l2) {

        if (l1.ssn <= l2.ssn) {

            current.next = l1;

            l1 = l1.next;

        } else {

            current.next = l2;

            l2 = l2.next;
        }

        current = current.next;
    }

    current.next = l1 || l2;

    return dummy.next;
}

module.exports = mergeLists;