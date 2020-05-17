---
title: Swift Merge Sort
author: Bruce Wade
date: 2020-04-27 9:00:00-0700
categories: [Algorithms & Data Structures, Swift, Sorting]
tags: [swift, Sorting]
---
```swift
func mergeSort<T>(_ array: [T]) -> [T] where T: Comparable {
    guard array.count > 1 else { return array }
    
    let middle = array.count / 2
    let left = mergeSort(Array(array[..<middle]))
    let right = mergeSort(Array(array[middle...]))
    return merge(left, right)
}

func merge<T>(_ left: [T], _ right: [T]) -> [T] where T: Comparable {
    var leftIndex = 0
    var rightIndex = 0
    var result: [T] = []
    
    while leftIndex < left.count && rightIndex < right.count {
        let leftElement = left[leftIndex]
        let rightElement = right[rightIndex]
        
        if leftElement < rightElement {
            result.append(leftElement)
            leftIndex += 1
        } else if leftElement > rightElement {
            result.append(rightElement)
            rightIndex += 1
        } else {
            result.append(leftElement)
            leftIndex += 1
            result.append(rightElement)
            rightIndex += 1
        }
    }
    
    if leftIndex < left.count {
        result.append(contentsOf: left[leftIndex...])
    }
    
    if rightIndex < right.count {
        result.append(contentsOf: right[rightIndex...])
    }
    
    return result
}
```
```swift
var array = [15, 9, 8, 1, 4, 11, 7, 12, 13, 6, 5, 3, 16, 2, 10, 14]
print("Original: \(array)")
print("Merge sorted: \(mergeSort(array))")
```