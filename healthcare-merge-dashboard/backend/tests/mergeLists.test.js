const ListNode =
    require("../src/LinkedList");

const mergeLists =
    require("../src/mergeLists");

function toArray(head) {

    const arr = [];

    while (head) {

        arr.push(head.ssn);

        head = head.next;
    }

    return arr;
}

/* NORMAL CASES */

test("merge normal lists", () => {

    const a = new ListNode(1, 20, "A");

    const b = new ListNode(3, 30, "B");

    a.next = b;

    const c = new ListNode(2, 40, "C");

    expect(
        toArray(
            mergeLists(a, c)
        )
    ).toEqual([1, 2, 3]);
});

test("merge duplicate ssn", () => {

    const a = new ListNode(2, 20, "A");

    const c = new ListNode(2, 40, "C");

    expect(
        toArray(
            mergeLists(a, c)
        )
    ).toEqual([2, 2]);
});

test("different lengths", () => {

    const a = new ListNode(1, 20, "A");

    const b = new ListNode(5, 30, "B");

    a.next = b;

    const c = new ListNode(2, 40, "C");

    expect(
        toArray(
            mergeLists(a, c)
        )
    ).toEqual([1, 2, 5]);
});

/* EDGE CASES */

test("empty first list", () => {

    const c = new ListNode(2, 40, "C");

    expect(
        toArray(
            mergeLists(null, c)
        )
    ).toEqual([2]);
});

test("empty second list", () => {

    const a = new ListNode(1, 20, "A");

    expect(
        toArray(
            mergeLists(a, null)
        )
    ).toEqual([1]);
});

test("both lists empty", () => {

    expect(
        mergeLists(null, null)
    ).toBeNull();
});