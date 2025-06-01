---
title: capitalize
---

```cpp
#include <string>
#include <cctype>

std::string capitalize(const std::string& word) {
	if (word.empty()) return word;
	std::string result = word;
	result[0] = std::toupper(result[0]);
	for (size_t i = 1; i < result.size(); ++i) {
		result[i] = std::tolower(result[i]);
	}
	return result;
}
```
