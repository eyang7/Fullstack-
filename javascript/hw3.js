
// Question 1 
let x = 5;
let y = 4;
function a_plus_abs_b(a,b) {
	/*
    Return a+abs(b), but without calling abs.

    >>> a_plus_abs_b(2, 3)
    5
    >>> a_plus_abs_b(2, -3)
    
  */
	let f = (a,b) => a + b;  //notation for function within a var 
	if (b < 0) {
		let f = a - b;
	}
	return f(a, b);
}
let z = a_plus_abs_b(x,y);


// Question 2 
function two_of_three(x, y, z){
    /*Return a*a + b*b, where a and b are the two smallest members of the
    positive numbers x, y, and z. 

    >>> two_of_three(1, 2, 3)
    5
    >>> two_of_three(5, 3, 1)
    10
    >>> two_of_three(10, 2, 8)
    68
    >>> two_of_three(5, 5, 5)
    50
    */
    let a = Math.min(x,y,z); 
    let b = 0; 
    if (a === x){
      b = Math.min(y,z); 
    } else if (a === y) {
      b = Math.min(x,z); 
    } else {
      b = Math.min(x,y); 
    }
    return a * a + b * b;
}

// Question 3 
function largest_factor(n){
    /*Return the largest factor of n that is smaller than n.

    >>> console.log(largest_factor(15)); # factors are 1, 3, 5
    5
    >>> console.log(largest_factor(80)); # factors are 1, 2, 4, 5, 8, 10, 16, 20, 40
    40
    >>> console.log(largest_factor(13)); # factor is 1 since 13 is prime
    1
    */
    // *** YOUR CODE HERE ***
    let x = 2; 
    while (x < n) {
        if (n % x !== 0) {
            x += 1 
        } else {
            return n / x; 
        }
    }
    return 1;
}

// Question 4 
function hailstone(n){
	/* Print the hailstone sequence starting at n and return its
		    length.
		>>> let a = hailstone(10)
		10
		5
		16
		8
		4
		2
		1
		>>> console.log(a);
		7
	*/
	let counter = 0; 
    while (n > 1) {
        counter += 1; 
        if (n % 2 === 0) {
            n = n / 2; 
        } else {
            n = 3 * n + 1; 
        }
        console.log(n); 
    }
    return counter; 
}