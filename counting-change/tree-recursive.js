// SICP Javascript Edition pages 34-35.
// Tree recursion, counting change.
// 
// How many different ways can we make
// change of $1.00 (100 cents), given half-dollars, quarters, dimes, nickels, and pennies
// (50 cents, 25 cents, 10 cents, 5 cents, and 1 cent, respectively)?
// More generally, can we write a function to compute the number of ways 
// to change any given amount of money?

// We can order all cases by number of descending coins. Therefore, we can
// exhaust all cases with half-dollars before moving on to quarters etc.
// This function would draw a tree whose the leftmost path is the change
// configuration with the biggest coins. Likewise, the rightmost path would
// show the smaller change possible for the given input.
function calc_change(n) {
    function calc_change_recur(amount, coin_types_rem) {
        function coin_value() {
            const coin_values = [50, 25, 10, 5, 1];
            return coin_values[coin_values.length - coin_types_rem];
        }

        return amount === 0
            ? 1
            : amount < 0 || coin_types_rem === 0
            ? 0
            : calc_change_recur(amount - coin_value(), coin_types_rem)
                + calc_change_recur(amount, coin_types_rem - 1);
    }

    return calc_change_recur(n, 5);
}


const time100 = [], time1000 = [];

time100[0] = performance.now();
console.log(calc_change(100)); // -> 292
time100[1] = performance.now();
console.log(`ms it took to calculate: ${time100[1]-time100[0]}`)
time1000[0] = performance.now();
console.log(calc_change(1000)); // -> 801451
time1000[1] = performance.now();
console.log(` it took to calculate: ${time1000[1]-time1000[0]}`)

