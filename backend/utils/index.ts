/**
 * arrow functions ~= lamba functions.
 * they're a shorthand for function definition,
 * and are useful for inlining functions.
 * look in /routes/test.ts for an example usage, with the handler function
 *
 * they look like `(params) => doThings`
 */

export const out = (s: any) => {
  console.log(s);
};

[1, 2, 3].map((val) => out(val)); //example of inlining function definition
