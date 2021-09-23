// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below it's instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/

_.identity = function(value) {
    return value;
}

/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/

_.indexOf = function (arr, arrValue) {

    for (var index = 0; index < arr.length; index++) {
        var value = arr[index];
            
        
        
        if(value === arrValue) {
        return index;
       } 
 }

 if(value !== arrValue) {
    return -1;
   }

    
  
}


/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/

_.contains = function (arr, value) {
    for (var index = 0; index < arr.length; index++) {
        var number = arr[index];
            
        
        
        if(number === value) {
          return true;
       } 
   }

   if(number !== value) {
    return false;
 } 
}




/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array (it should be), call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/





_.each = function (arr2, eachTest) {      
    if(Array.isArray(arr2)) {


        for (var index2 = 0; index2 < arr2.length; index2++) {
            var variable = arr2[index2];
            eachTest(variable, index2, arr2);
        }


       
    } 
    
    
}




function eachTest(variable, index2, arr2) {
  return arr2;
  
}








/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Challenge:
*   use _.each in your implementation
*/


_.filter = function (arr2, testFunc) {

    var newArr = [];
    for (var index2 = 0; index2 < arr2.length; index2++) {
        var variable = arr2[index2];
        testFunc(variable, index2, arr2);

        var yes = testFunc(variable, index2, arr2);

        if(yes) {
            newArr.push(variable);
        } 
        
        
    }


  return newArr;

}




function testFunc(variable, index2, arr2) {
	return variable % 2 === 0;
    

    
}










/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter()
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

_.reject = function (arr2, testFunc) {
    var newArr = [];
    for (var index2 = 0; index2 < arr2.length; index2++) {
        var variable = arr2[index2];
        testFunc(variable, index2, arr2);

        var yes = testFunc(variable, index2, arr2);

        if(!yes) {
            newArr.push(variable);
        } 
        
        
    }


  return newArr;

}




function testFunc(variable, index2, arr2) {
	return variable % 2 === 0;
    

    
}






/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) if <collection> is an array (it should be), call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/

_.map = function (arr2, eachTest) {   
    var newArr = [];   
    if(Array.isArray(arr2)) {
      

        for (var index2 = 0; index2 < arr2.length; index2++) {
            var variable = arr2[index2];
            var arrayStuff = eachTest(variable, index2, arr2);

           
            newArr.push(arrayStuff);
            

           
        }

        return newArr;
       
    } 
    
    
}




function eachTest(variable, index2, arr2) {
  return arr2;
  
}









//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
