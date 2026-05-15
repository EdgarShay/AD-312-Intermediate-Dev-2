const Node = require('../src/Node');
const isHealthRecordSymmetric = require('../src/isHealthRecordSymmetric');

function createLinkedList(values) {

    if (values.length === 0) {
        return null;
    }

    let head = new Node(values[0]);
    let current = head;

    for (let i = 1; i < values.length; i++) {
        current.next = new Node(values[i]);
        current = current.next;
    }

    return head;
}

test('Odd length palindrome', () => {
    const head = createLinkedList([1, 2, 3, 2, 1]);
    expect(isHealthRecordSymmetric(head)).toBe(true);
});

test('Even length palindrome', () => {
    const head = createLinkedList([1, 2, 2, 1]);
    expect(isHealthRecordSymmetric(head)).toBe(true);
});

test('Not symmetric', () => {
    const head = createLinkedList([1, 2, 3]);
    expect(isHealthRecordSymmetric(head)).toBe(false);
});

test('Empty list', () => {
    const head = createLinkedList([]);
    expect(isHealthRecordSymmetric(head)).toBe(true);
});

test('Single node', () => {
    const head = createLinkedList([1]);
    expect(isHealthRecordSymmetric(head)).toBe(true);
});

test('Two different nodes', () => {
    const head = createLinkedList([1, 2]);
    expect(isHealthRecordSymmetric(head)).toBe(false);
});