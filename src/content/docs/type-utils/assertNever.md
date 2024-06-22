---
title: assertNever
---

```ts
export function assertNever(x: never, failOnRuntime?: boolean): never {
	console.error("assertNever", x);
	if (failOnRuntime) {
		throw new Error("Unreachable point reached.");
	}
}
```

## Example

The example was taken from
[aikoven/assert-never](https://github.com/aikoven/assert-never).

```ts
type A = { type: "a" };
type B = { type: "b" };
type Union = A | B;

function doSomething(arg: Union) {
	if (arg.type === "a") {
		return something;
	}

	if (arg.type === "b") {
		return somethingElse;
	}

	// TypeScript typechecker will error if there are other types in the union.
	// Will not throw on runtime.
	assertNever(arg);

	// TypeScript typechecker will error if there are other types in the union.
	// Will throw on runtime.
	assertNever(arg, true);
}
```
