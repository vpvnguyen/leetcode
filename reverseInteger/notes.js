// If you’re converting from a different number system to the familiar base-10 system, you’d use parseInt. For example, if you want to convert the hexadecimal (base-16) value 'a7', you’d use parseInt('a7', 16).

// (In general, if parse is in the function name, it expects a string)

// Number converts any value to a number according to that value’s conversion rules. The more straightforward rules include:

// false becomes 0, true becomes 1
// null becomes 0, undefined becomes NaN
// If a string looks like a number, it becomes that number. The empty string '' becomes 0. Other strings become NaN.
// For most string to number conversions, I think both are interchangeable. However there are differences:

// As mentioned, if a string doesn’t look like a number, using Number will give you NaN.
// parseInt reads as many characters as it can from the string, until it hits a character it cannot convert.

const s = "123abxyz";
console.log(Number(s)); // NaN
console.log(parseInt(s)); // 123 (123 is valid base-10, and stops as soon as it hits `a`)
