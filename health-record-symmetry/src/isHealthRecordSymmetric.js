function reverseList(head) {

    let prev = null;
    let current = head;

    while (current !== null) {

        let nextTemp = current.next;
        current.next = prev;
        prev = current;
        current = nextTemp;
    }

    return prev;
}

function isHealthRecordSymmetric(head) {

    if (head === null || head.next === null) {
        return true;
    }

    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    let secondHalf = reverseList(slow);
    let firstHalf = head;

    while (secondHalf !== null) {

        if (firstHalf.value !== secondHalf.value) {
            return false;
        }

        firstHalf = firstHalf.next;
        secondHalf = secondHalf.next;
    }

    return true;
}

module.exports = isHealthRecordSymmetric;