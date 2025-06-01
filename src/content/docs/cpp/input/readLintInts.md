---
title: readLineInts
---

```cpp
vector<int> readLineInts() {
    string line;
    getline(cin, line);
    stringstream ss(line);
    vector<int> nums;
    int num;
    while (ss >> num) {
        nums.push_back(num);
    }
    return nums;
}
```