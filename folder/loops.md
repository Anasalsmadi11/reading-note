# **comparison operators**

*You can evaluate a situation by comparing one value in the script to what you expect it might be. The result will be a Boolean: true or false.*

* ## == ***is equal to***
 *This operator compares two values (numbers, strings, or Booleans) to see if they are the same.*
 
 *"Hello' = 'Goodbye' returns false because they are not the same string.*
  
  *"Hello'= 'Hello' returns true because they are the same string.*
  
* ## !== ***IS NOT EQUAL TO***

*TO This operator compares two values (numbers, strings, or Booleans) to see if they are not the same. 

*"Hello' !== "Goodbye' returns true because they are not the same string.* 

*"Hello' !== 'Hello' returns false because they are the same string. It is usually preferable to use the strict method*

* ## === ***STRICT EQUAL TO***
*This operator compares two values to check that both the data type and value are the same.*

 *'3' === 3 returns false because they are not the same data type or value.*
*'3' === '3' returns true because they are the same data type and value.*

* ## !=== ***STRICT NOT EQUAL TO***
*This operator compares two values to check that both the data type and value are not the same.*

*'3' !=== 3 returns true because they are not the same data type or value.*

*'3' !=== '3' returns false because they are the same data type and value.*

and there are many operating comparision

1. greater than >
1. less than <
1. greater than or equal >= 
1.  less than or equal <=

* ## ***LOGICAL OPERATORS*** 
*Comparison operators usually return single values of true or false. Logical operators allow you to compare the results of more than one comparison operator.*

* ***Logical and &&*** 
*this operator test more than one condition.*

*true && true returns true*

 *true && false returns false*
 
*false && true returns false*

*false && false returns false*

* ***LOGICAL OR ||***
*This operator test at least one condition*

*true || true returns true*

*true || false returns true*

*false || true returns true*

*false || false returns false*

* ***LOGICAL NOT !***

*This operator tkes single boolean value and inverts it*

* ! true returns false*

* ! false returns true*
# **LOOP**
*Loops check a condition. If it returns true, a code block will run. Then the condition will be checked again and if it still returns true, the code block will run again. It repeats until the condition returns false. There are three common types of loops: FOR WHILE DO WHILE*

1. **FOR:** *If you need to run code a specific number of times, use a for loop. (It is the most common loop.) In a for loop, the condition is usually a counter which is used to tell how many times the loop should run.*

1. **WHILE:** *WHILE If you do not know how many times the code should run, you can use a wh1le loop. Here the condition can be something other than a counter, and the code will continue to loop for as long as the condition is true.*

1. **DO WHILE:** *DO WHILE The do...while loop is very similar to the while loop, but has one key difference: it will always run the statements inside the curly braces at least once, even if the condition evaluates to false.*
