---
title: safeParseInt
---

```ts
export function safeParseInt(
	value: string | undefined,
	defaultValue?: undefined,
): number | undefined;
export function safeParseInt(
	value: string | undefined,
	defaultValue: number,
): number;
export function safeParseInt(
	value: string | undefined,
	defaultValue: number | undefined = undefined,
) {
	if (typeof value === "undefined") return defaultValue;

	const parsed = Number.parseInt(value);
	if (Number.isNaN(parsed)) {
		return defaultValue;
	}
	return parsed;
}
```

## Why

JavaScript includes `Number.parseInt` (recommended over `parseInt`) to convert
string of an integer to a number. However, if we passed an invalid value, we
will get `NaN` instead of `undefined`.

```ts
Number.parseInt("hi"); // NaN
```

Generally, we wouldn't want that. On top of that, the `safeParseInt` function
adds support for a fallback value. And it's type-safe.
