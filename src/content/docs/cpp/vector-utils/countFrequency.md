---
title: countFrequency
---

```cpp
map<int, int> countFrequency(const vector<int>& arr) {
    map<int, int> freq;
    for (int x : arr) {
        freq[x]++;
    }
    return freq;
}
```