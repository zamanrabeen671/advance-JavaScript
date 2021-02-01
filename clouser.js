function stopwatch() {
    let count = 0;
    return function() {
        count++;
        return count;
    }
}
const watch1 = stopwatch();
console.log(watch1());
console.log(watch1());
console.log(watch1());
console.log(watch1());

const watch2 = stopwatch();
console.log(watch2());
console.log(watch2());
console.log(watch1());
console.log(watch2());