# JavaScript-Series
A code repo for javascript series

//************************Javascript Execution Context *******************************//
// Javascript is run the program in two phase.
1. Memory Creation phase (Creation phase) => In memory cration phase it allocates the location to variable.

----------------------------------------------------------------------------------------
2. Execution phase
1. Global EC
2. Function EC

let val1 =10
let val2 = 5
function addNum(num1,num2)
{
    let total = num1*num2
    return total
}
let result1 = addNum(val1,val2)
let result2 = addNum(10,2)

1->  Global Execution => this    | line1
2. Memory Phase                  | line 2
    val1 => undefined
    val2 = undfined
    addNum => defination         | line 3
    result1 => undefined         | line 7
    result2 => undefined         | line 8

3-> Execution phase
    val1 => 10
    val2 => 5
    addNum => create new execution context
            ___________________________________________________
            |  new variable enviornemnt                        |                       
            |       +                                          |
            |        Execution thread                          |
            |                                                  |
            |                                                  |
            |                                                  |
            |                                                  |
            |__________________________________________________|