---
title: debounce
---

```ts
export function debounce<FunctionInputType extends Array<unknown>>(
	func: (...args: FunctionInputType) => void,
	timeout = 300,
): (...args: FunctionInputType) => void {
	let timer: NodeJS.Timeout;

	return (...args) => {
		clearTimeout(timer);

		timer = setTimeout(() => {
			func.apply(null, args);
		}, timeout);
	};
}
```

Delays invoking a function until after `timeout` milliseconds have elapsed since
the last time the debounced function called.

For example, let's assume we have a search field and wants to show search
suggestions. Instead of updating the suggestions with every keystroke, we can
use a debounced function to update them only after the user has stopped typing.
