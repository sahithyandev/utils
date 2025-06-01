---
title: capitalize
---

```ts
export function capitalize(word: string) {
	return word.charAt(0).toUpperCase().concat(word.slice(1).toLowerCase());
}
```

While working on the frontend, and the data is loaded from a database, we need a
`capitalize` function to display the text.
