---
title: Swift Array
author: Bruce Wade
date: 2020-05-06 08:00:00-0700
categories: [Standard Library, Swift]
tags: [swift]
---

# `Array` Overview 
`Array`'s are used for a varity of different situations and you will find yourself working them on most days. They are an ordered, random-access collection that hold elements of a single type. `Array` is a value type and can hold any type of element as long as all the elements are the same, with the exception of declaring an array with the type of `Any`.


### Array creation
We can create arrays in swift in several different ways.

```swift
// Using type inference, creates a constant array of `String`s
let names = ["Tom", "Jen", "Mike", "Jena"]

// Creates a variable array of `Int`'s
var numbers = [1, 2, 3, 4]

// Creating empty array's
var empty: [String] = []
// OR
var empty2: Array<Float> = Array()

// Create a preinitialized array
var monthlyScores = Array(repeating: 0, count: 12)
print(monthlyScores)
// [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
```

### Array access
Swift provides us several ways to access elements in an array. We can use subscripts, remember arrays are 0 indexed:

```swift
numbers[2] // = 3
```

To get the first element in an array we can use:
```swift
numbers.first // = Optional(1)
```

Or the last element in an array:
```swift
numbers.last // = Optional(4)
```

`Array`.`first` and `Array`.`last` return optional values because the array could technically be empty.

Finally we can also use Swift's for-in loop to iterate through the array's elements:

```swift
for number in numbers {
    print(number)
}
// Prints
1
2
3
4
```

### Adding and Removing Elements
Swift provides us these ways to add elements to an `Array` `append(_:)`, `append(contentsOf:)`, and `insert(contentsOf:at:)`:

```swift
// [1, 2, 3, 4]
numbers.append(5)
// [1, 2, 3, 4, 5]
numbers.append(contentsOf: [6, 7])
// [1, 2, 3, 4, 5, 6, 7]
numbers.insert(0, at: 0)
// [0, 1, 2, 3, 4, 5, 6, 7]
```

When we need to remove elements from an array we have these options `remove(at:)`, `removeSubrange(_:)`, and `removeLast()`:

```swift
// [0, 1, 2, 3, 4, 5, 6, 7]
numbers.remove(at: 0)
// [1, 2, 3, 4, 5, 6, 7]
numbers.removeSubrange(1..<3)
// [1, 4, 5, 6, 7]
numbers.removeLast() 
// [1, 4, 5, 6]
numbers.popLast() // Removes and returns 6
```

We can also find a element to replace using `firstIndex(of:)`

```swift
if let index = numbers.firstIndex(of: 5) {
    numbers[index] = 3 * 3
}
// [1, 4, 9, 6]
```

### Inspecting an `Array`
We have the following options when we need to inspect an `Array` `isEmpty`, `count`, and `capacity`:

```swift
numbers.isEmpty // = false
numbers.count // = 4
numbers.capacity // = 8
```
Capacity might surprise you however we need to keep in mind it represents the largest number of elements we had at one given time, which was `[0, 1, 2, 3, 4, 5, 6, 7]` contains 8 elements.

### Summary
This artical only covered a subset of what the `Swift` `Array` can do for more information you are encuranged to look at <a href="https://developer.apple.com/documentation/swift/array" target="_blank">Apple's official documentation for `Array`'s</a>

Knowing what we covered here is important when it comes to inplementing [Stacks](/posts/swift-stacks) where we will leverage the `Array` as the storage but provide only a limited set of actions.