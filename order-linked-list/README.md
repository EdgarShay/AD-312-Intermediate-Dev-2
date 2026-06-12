# Order Linked List Reversal

## Author:
Edgar

Computer Science Student

Linked List Reversal Assignment

## Overview

This project simulates an e-commerce order processing system using a Singly Linked List. Orders are initially stored in the order they are received, with the oldest order at the head of the list.

Due to a change in fulfillment strategy, the business now wants to process the most recent orders first. To achieve this, the linked list is reversed in place so that the newest order becomes the first order processed.

The project demonstrates:

* Object-Oriented Programming (OOP)
* Singly Linked List implementation
* In-place linked list reversal
* Unit testing with Jest
* Time and Space Complexity Analysis
* Interview-style problem solving and communication

---

## Problem Statement

Orders are stored in a singly linked list:

Before Reversal:

HEAD → 101 → 102 → 103 → 104 → null

Processing Order:

101 → 102 → 103 → 104

After Reversal:

HEAD → 104 → 103 → 102 → 101 → null

Processing Order:

104 → 103 → 102 → 101

The goal is to reverse the linked list without creating a second list.

---

## Clarifying Questions

Before implementing the solution, the following assumptions were made:

### 1. Can the linked list be empty?

Yes.

### 2. Can there be only one order in the list?

Yes.

### 3. Are Order IDs unique?

Yes.

### 4. Should the reversal create a new list?

No.

The reversal should be performed in place to minimize memory usage.

---

## Project Structure

order-linked-list/

├── src/

│   ├── Order.js

│   ├── Node.js

│   ├── SinglyLinkedList.js

│   └── demo.js

│

├── tests/

│   └── linkedList.test.js

│

├── diagrams/

│   ├── before-reversal.png

│   └── after-reversal.png

│

├── README.md

├── package.json

└── .gitignore

---

## Data Structures

### Order

Represents an e-commerce order.

Attributes:

* orderId
* customerName
* orderDetails

### Node

Represents a node in the singly linked list.

Attributes:

* order
* next

### SinglyLinkedList

Supports:

* append(order)
* display()
* reverse()

---

## Reverse Algorithm

The reversal is performed using three pointers:

* previous
* current
* next

Pseudo Code:

prev = null

current = head

while current exists:

```
next = current.next

current.next = prev

prev = current

current = next
```

head = prev

This approach reverses the list in place without allocating additional nodes.

---

## Running the Application

Install dependencies:

npm install

Run the demo:

npm start

Expected Output:

Before Reverse:

[101, 102, 103]

After Reverse:

[103, 102, 101]

---

## Running Tests

Execute all unit tests:

npm test

Expected Result:

PASS tests/linkedList.test.js

✓ append orders correctly

✓ display maintains insertion order

✓ reverse multiple orders

✓ reverse empty list

✓ reverse single order

✓ same customer multiple orders

---

## Test Cases

### Normal Cases

#### Test Case 1

Append Orders

Input:

1, 2

Expected Output:

[1, 2]

#### Test Case 2

Display Orders

Input:

10, 20

Expected Output:

[10, 20]

#### Test Case 3

Reverse Multiple Orders

Input:

1 → 2 → 3

Expected Output:

3 → 2 → 1

---

### Edge Cases

#### Test Case 4

Reverse Empty List

Input:

[]

Expected Output:

[]

#### Test Case 5

Reverse Single Order

Input:

[1]

Expected Output:

[1]

#### Test Case 6

Same Customer Multiple Orders

Input:

Order 1 (John)

Order 2 (John)

Expected Output:

[2, 1]

---

## Time and Space Complexity

### append()

Time Complexity:

O(n)

Space Complexity:

O(1)

Reason:

The list may need to be traversed to find the last node.

---

### display()

Time Complexity:

O(n)

Space Complexity:

O(n)

Reason:

Every node must be visited and stored in the returned array.

---

### reverse()

Time Complexity:

O(n)

Space Complexity:

O(1)

Reason:

Each node is visited exactly once, and only three pointers are used regardless of list size.

---

## Optimization Discussion

Can the reverse operation be improved beyond O(n)?

No.

Every node must be visited at least once to reverse its pointer, making O(n) the optimal time complexity.

The implementation already achieves O(1) auxiliary space by reversing the list in place.

---

## Interview Discussion Points

* Why use a linked list instead of an array?
* Why reverse in place instead of creating a new list?
* What happens if the list is empty?
* What happens if the list contains only one order?
* Why is O(n) the optimal solution?
* How would the implementation change for a doubly linked list?

---

## Technologies Used

* JavaScript (Node.js)
* Jest
* GitHub

---
