//primitives -> if copied then it gets the real copy of the value
// reference -> if copied you get the reference of the parent

// a = 13;
// b = a;

// a = 4 + a;
// console.log(b);

// let a = [1, 2, 3];
// let b = a;

// a[0] = 7;

// console output:
// a
// (3) [7, 2, 3]
// b
// (3) [7, 2, 3]

// let a = [1, 2, 3];
// let b = a;
// b[1] = 9;

//console output:
// a
// (3) [1, 9, 3]
// b
// (3) [1, 9, 3]

// strings -> "",'',``

//number -> interger (12), float/double (12.3)

//boolean -> true false

// null -> value not given knowingly (let a = NULL;)

//undefined -> variable created but not initialized

//symbol -> unique immutable value (value cannot be changed) (used to prevent overriding of value)
// let u1 = Symbol("uid");
// let u2 = Symbol("uid");
// Console output:
// u1 == u2
// false
// u1 == u2
// false

// bigint -> at the end add n (let a = 87684784n)

// --------------------------------------------------

//Dynamic Typing -> you can change the data
// let a = 23;
// a = "Abhi";
// a = true;
// a = [];
// a = null;


// truthy and falsy values
// false -> 0,null,undefined,NaN, document.all,""
// true -> 1,-1,"abhi"
// if(NaN){} -> false value
// if(-1){} -> true value

//typeof(NaN) is Number because its a type of failed number operation eg. (2 * "Abhi" --> NaN)

