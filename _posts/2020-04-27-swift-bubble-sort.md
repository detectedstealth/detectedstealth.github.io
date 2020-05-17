---
title: Swift Bubble Sort
author: Bruce Wade
date: 2020-04-27 9:00:00-0700
categories: [Algorithms and Data Structures, Swift, Sorting]
tags: [swift, Sorting]
---
```swift
/**
 Bubble sort moves through the list of items comparing the
 first value to the next and swapping them to put the smallest first.
 
 Complexity: O(n^2)
 Example:
   [9, 4, 10, 3]
    - [4, 9, 3, 10]
    - [4, 3, 9, 10]
    - [3, 4, 9, 10]
 */

func bubbleSort<T>(_ collection: inout T) where T: MutableCollection, T.Element: Comparable {
    guard collection.count >= 2 else { return }
    
    for end in collection.indices.reversed() {
        var swapped = false
        var current = collection.startIndex
        
        while current < end {
            let next = collection.index(after: current)
            if collection[current] > collection[next] {
                collection.swapAt(current, next)
                swapped = true
            }
            current = next
        }
        
        if !swapped {
            return
        }
    }
}
```
```swift
// MARK: - Example Use
var array = [9, 4, 10, 3]
print("Original: \(array)")
bubbleSort(&array)
print("Bubble sorted: \(array)")
```