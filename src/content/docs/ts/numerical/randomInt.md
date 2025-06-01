---
title: randomInt
---

```ts
/**
 * @example
 * randomInt(0, 10)
 * // => random integer between 0 (inclussive), 10 (exclusive)
 *
 * randomInt(10)
 * // => random integer between 0 (inclussive), 10 (exclusive)
 *
 * randomInt(5,10)
 * // => random integer between 5 (inclussive), 10 (exclusive)
 */
export function randomInt(lower: number, upper?: number) {
	let _lower = 0;
	let _upper = lower;
	if (typeof upper === "number") {
		_lower = lower;
		_upper = upper;
	}
	return Math.trunc(Math.random() * (_upper - _lower)) + _lower;
}
```

`Math.random()` returns a random number between 0 (inclusive) and 1 (exclusive).
This helper function generates a random integer between a specified range.
