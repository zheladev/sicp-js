// Write a function that computes elements of Pascal’s
// triangle by means of a recursive process.

function pascal_num_recur(num, level) {
    return num == 0
            ? 1
            : num > level + 1
            ? 0
            : num == level
            ? 1
            : pascal_num_recur(num -1, level -1) + pascal_num_recur(num, level -1);
}


for(let i = 0; i < 10; i++) {
    let str = "";
    for (let j = 0; j < i+1; j++) {
        str += `${pascal_num_recur(j, i)} `;
    }
    console.log(str);
}