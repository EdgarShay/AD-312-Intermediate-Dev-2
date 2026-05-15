# Health Record Symmetry Checker
Written by: Edgar

## Problem Description

This project analyzes patient health records represented as a singly linked list and determines whether the sequence is symmetric (palindrome).

## Approach

The algorithm uses:

- Fast and slow pointers to locate the middle
- In-place reversal of the second half
- Comparison of both halves

## Time Complexity

O(n)

## Space Complexity

O(1)

## Test Cases

### Normal Cases

- Odd palindrome
- Even palindrome
- Non-palindrome

### Edge Cases

- Empty list
- Single node
- Two different nodes

## Technologies Used

- JavaScript
- Node.js
- Jest