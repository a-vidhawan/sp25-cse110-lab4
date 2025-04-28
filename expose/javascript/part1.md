# CSE 110 | SP25 | lab 4
## Expose - Part 1

1. 20

2. 20

3. `var` has no block scope, so programmers may face variable naming conflicts. Also, since `var` "declarations" are "hoisted" but "assignments" are not, this may lead to logical errors in your cade, where you think you've defined a variable but actually haven't. Since `var` allows this you don't see an error thrown at runtime.

4. 20

5. Error - since variables declared with `let` have a block restricted scope, and the code on line 13 is outside the block where `result` was declared using `let`.

6. 0 should be printed by line 9. But, I believe an error will be thrown on line 7, since we're trying to change the value of `result` which was declared using `const`.

7. Error - since variables declared with `const` have a block restricted scope, and the code on line 13 is outside the block where `result` was declared using `const`.


