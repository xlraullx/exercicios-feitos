interface User {
    id: number;
    name: string;
    email: string; 
    password: string | number; 
}

const user: User = {
    id: 1,
    name: "Victor",
    email: "mudo@gmail.com",
    password: 123
}

console.log(`id: ${user.id}`)
console.log(`nome: ${user.name}`)
console.log(`email: ${user.email}`)
console.log(`senha: ${user.password}`)