import Singleton from "./singleton.js";


const a = Singleton.getInstance();
const b = Singleton.getInstance();
console.log(`Es la misma instancia a y b ? ${a === b} `);


