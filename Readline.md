// Old Readline interface to ask questions
```javascript
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

function askQuestion(query) {
    return new Promise(resolve => {
        readline.question(query, resolve);
    })
}

async function Questions() {
    const name = await askQuestion("What is your name?");
    const age = await askQuestion("What is your age?");
    console.log(`I am ${name} and I am ${age} years old`);
    readline.close();
}
```

// New Readline Interface to ask questions
```js
const readline = require("node:readline/promises");
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

async function Questions() {
    const name = await rl.question("What is your name?");
    const age = await rl.question("What is your age?");
    console.log(`I am ${name} and I am ${age} years old`);
    rl.close();
}
```