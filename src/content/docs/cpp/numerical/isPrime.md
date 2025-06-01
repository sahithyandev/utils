---
title: isPrime
---

```ts
export function isPrime(n: number) {
	if (n < 2) {
		return false;
	}

	if (n % 2 === 0) {
		return n === 2;
	}

	for (let i = 3; i <= Math.sqrt(n); i += 2) {
		if (n % i === 0) {
			return false;
		}
	}

	return true;
}
```

On the first try we would write the function to check all integers from 2 to
n-1. That's not the most efficient way. We can optimize the function.

Here are the optimizations done in the above function:

1. Except 2, we only have to check if `n` is divisible by odd numbers only. This
   optimization cuts the for-loop-cycles in half.
2. We don't have to check past `sqrt(n)` for divisors. This will save a lot of
   wasted cycles.
