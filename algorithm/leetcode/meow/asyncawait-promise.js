async function a(){
    return 10
}

async function b(){
    const task = await Promise.resolve(10)
    return task
}

async function c(){
    const resp = await fetch('url')
}

const bb = await b()
console.log(bb);

console.log(await a())
