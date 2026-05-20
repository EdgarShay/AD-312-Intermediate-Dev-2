const ListNode = require("./LinkedList");

function buildList(data) {

    let head = null;

    let current = null;

    for (let patient of data) {

        const node = new ListNode(
            patient.ssn,
            patient.age,
            patient.fullName
        );

        if (!head) {

            head = node;

        } else {

            current.next = node;
        }

        current = node;
    }

    return head;
}

module.exports = buildList;