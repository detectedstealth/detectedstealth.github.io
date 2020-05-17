---
title: Swift Insertion Sort
author: Bruce Wade
date: 2020-04-27 9:00:00-0700
categories: [Algorithms & Data Structures, Swift, Sorting]
tags: [swift, Sorting]
---
```swift
func insertionSort<T>(_ collection: inout T) where T: BidirectionalCollection & MutableCollection, T.Element: Comparable {
    guard collection.count >= 2 else { return }
    
    for current in collection.indices {
        var shifting = current
        
        while shifting > collection.startIndex {
            let previous = collection.index(before: shifting)
            if collection[shifting] < collection[previous] {
                collection.swapAt(shifting, previous)
            } else {
                break
            }
            shifting = previous
        }
    }
}
```

```swift
// Usage
array = [15, 9, 8, 1, 4, 11, 7, 12, 13, 6, 5, 3, 16, 2, 10, 14]
print("Original: \(array)")
insertionSort(&array)
print("Sorted: \(array)")
```