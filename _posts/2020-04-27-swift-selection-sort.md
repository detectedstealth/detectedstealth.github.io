---
title: Swift Selection Sort
author: Bruce Wade
date: 2020-04-27 9:00:00-0700
categories: [Algorithms and Data Structures, Swift, Sorting]
tags: [swift, Sorting]
---
```swift
func selectionSort<T>(_ collection: inout T) where T: MutableCollection, T.Element: Comparable {
    guard collection.count >= 2 else { return }
    
    for current in collection.indices {
        var lowest = current
        var other = collection.index(after: current)
        
        while other < collection.endIndex {
            if collection[lowest] > collection[other] {
                lowest = other
            }
            other = collection.index(after: other)
        }
        
        if lowest != current {
            collection.swapAt(lowest, current)
        }
    }
}
```

```swift
// Usage
var array = [15, 9, 8, 1, 4, 11, 7, 12, 13, 6, 5, 3, 16, 2, 10, 14]
print("Original: \(array)")
insertionSort(&array)
print("Sorted: \(array)")
```