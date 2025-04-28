# CSE 110 | SP25 | Lab 4
## Expose - Part 2

1. At line 12, the numer of prices/items we have will be printed to the console = `3`.

2. At line 13, the discounted price of the last item in the list is printed = `150`.

3. At line 14, the final price of the last item in the list is printed = `150`.

4. This function will return the array `[50, 100, 150]`, which is an array of all the final discounted prices. We start with an empty array. We then start looking at the entires in `prices`, applying the specified discount to them, calculate the `finalPrice` and place it in the corresponding entry in `discounted`.

5. Error: `i` is declared only within the `for` loop block, with `let`. line 12 tries to access it outside of that block and hence an error is thrown.

6. Error: `discountedPrice` is declared only with the `for` loop block. line 12 tries to access it outside of that block and hence an error is thrown.

7. At line 14, the final price of the last item in the list is printed = 150. Here an error isn't thrown since `finalPrice` is declared using `let` in the function block, and so is accessible from line 14.

8. This function will return the array `[50, 100, 150]`, which is an array of all the final discounted prices. We start with an empty array. We then start looking at the entires in `prices`, applying the specified discount to them, calculate the `finalPrice` and place it in the corresponding entry in `discounted`.

9. Error: `i` is declared only within the `for` loop block, with `let`. line 11 tries to access it outside of that block and hence an error is thrown.

10. The length of the `prices` array is printed = 3. This is executed normally since `length` was declared using `const` in the function block, and so is accessible at line 12.

11. This function will return the array `[50, 100, 150]`, which is an array of all the final discounted prices. We start with an empty array. We then start looking at the entires in `prices`, applying the specified discount to them, calculate the `finalPrice` and place it in the corresponding entry in `discounted`.

12. 
    a. `student.name` or `student[name]`
    b. `student['Grad Year']`
    c. `student.greeting()`
    d. `student['Favorite Teacher'].name`
    e. `student.courseLoad[0]`

13. 
    a. `'32'` - in string concatenation 2 -> '2', so '3' concat '2' = '32'
    b. `1` - `-` forces numeric conversion of '3' -> 3, so 3-2=1
    c. `3` - `null` = 0 in numeric context, so 3-0=3
    d. `'3null'` - in string concatenation null -> 'null', so '3' concat 'null = '3null'
    e. `4` - `true` = 1 in numeric context, so 1+3=4
    f. `0` - since th `+` operator is used and there are no strings, we assume numeric context, in which false -> 0 and null -> 0, so 0+0=0
    g. `'3undefined'` - in string concatenation undefined -> 'undefined', so '3' concat 'undefined' = '3undefined'
    h. `NaN` - `-` forces numeric conversion, and undefined -> NaN, so 3-NaN=NaN

14. 
    a. `true` - '2' -> 2 and 2>1
    b. `false` - since both are strings we compare letter by letter and '2' > '1' so result is `false`.
    c. `true` - `==` typecasts '2' -> 2, and 2==2
    d. `false` - 2 and '2' are not of the same type, so this returns `false`
    e. `false` - true -> 1, and 1!=2
    f. `true` - Boolean(2) = true, Boolean of anything except 0 is true, and true === true.

15. `==` only checks for the 'value' of both operands being equal, if they are of different type and same value like `3` and `'3'` it returns `true`. `===` on the other hand only returns `true` if both the 'type' AND 'value' of the operands is the same. So it returns `false` for the previous example but `true` for `3` and `3` or `'3'` and `'3'`.

Actually looking at how `==` and `===` are different on the inside, `==` type casts one of the operands to match the other's type and then compares values, which `===` does not do.

16. [part2-question16.js](part2-question16.js)

17. The Result: `newArr = [2, 4, 6]`
    Walkthrough: Here, we passed in `doSomething` as a parameter, its job is to accept a number as a parameter, and return 2 times that number. In the function modifyArray we loop over elements of `array`, call `doSomething` on them, and then push them to `newArr`. Knowing the functionality of `doSomething`, and given that `array = [1,2,3]`, once the functions `modifyArray` has finished executing, `newArr` has `[2,4,6]` stored in it.

18. [part2-question18.js](part2-question18.js)


19. ``` 
        1
        4
        3
        2
    ```

