---
title: readIntArray
---

```cpp
vector<int> readIntArray(int n) {
    vector<int> arr(n);
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }
    return arr;
}
```