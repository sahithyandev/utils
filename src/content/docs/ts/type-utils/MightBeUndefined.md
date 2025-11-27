---
title: MightBeUndefined
---

```ts
export type MightBeUndefined<T> = {
	[K in keyof T]: T[K] | undefined;
};
```

`T` takes in an object type and makes all its properties possibly `undefined`.
