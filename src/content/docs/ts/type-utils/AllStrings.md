---
title: AllStrings
---

```ts
export type AllStrings<T> = {
	[K in keyof T]: string;
};
```
