---
title: modularExponent
---

```cpp
long long modularExponent(long long a, long long b, long long mod = 1e9 + 7) {
    long long result = 1;
    a %= mod;
    while (b > 0) {
        if (b & 1) result = (result * a) % mod;
        a = (a * a) % mod;
        b >>= 1;
    }
    return result;
}
```

Calculates $a^b mod m$.