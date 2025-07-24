function createCounter(){
    let count = 0;

    return {
        increment: ()=>{
            count++;
            return count;
        },

        getValue: () =>{
            return count;
        },
    }
}


const counter = createCounter()

console.log(counter.increment())
console.log(counter.getValue())
console.log(counter.increment())
console.log(counter.getValue())
console.log(counter.increment())
console.log(counter.getValue())