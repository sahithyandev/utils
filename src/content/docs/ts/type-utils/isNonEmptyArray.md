---
title: isNonEmptyArray
---

```ts
export type NonEmptyArray<T> = Array<T> & { 0: T };

export function isNonEmptyArray<T>(arr: Array<T>): arr is NonEmptyArray<T> {
	return arr.length !== 0;
}
```
