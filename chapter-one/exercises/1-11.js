//A function f is defined by the rules 
// f (n) = n if n < 3 and f (n) = f (n – 1) + 2f (n – 2) + 3f (n – 3) if n ≥ 3. 
//Write a JavaScript function that computes f by means of a recursive process. Write
//a function that computes f by means of an iterative process.

//recursive process
function f_recur(n) {
    return n < 3
        ? n
        : f_recur(n - 1) + 2 * f_recur(n - 2) + 3 * f_recur(n - 3);
}

//iterative process
function f_iter(n) {
    if (n < 3) return n;
    let b0 = 0, b1 = 1, b2 = 2, b3 = 0;
    for(let i = 0; i < n - 2; i++) {
        b3 = b0*3 + b1*2 + b2;
        b0 = b1;
        b1 = b2;
        b2 = b3;
    }

    return b2;
}

for (let i = 0; i < 100; i++) {
    console.log(`recur: ${f_recur(i)}\niter: ${f_iter(i)}`);
}