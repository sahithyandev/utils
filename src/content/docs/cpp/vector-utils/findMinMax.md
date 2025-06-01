---
title: findMinMax
---

```cpp
pair<int, int> findMinMax(const vector<int>& arr) {
    int minVal = *min_element(arr.begin(), arr.end());
    int maxVal = *max_element(arr.begin(), arr.end());
    return {minVal, maxVal};
}
```