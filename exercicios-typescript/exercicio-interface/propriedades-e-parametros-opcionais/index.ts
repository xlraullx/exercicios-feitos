interface User{
    nome: string;
    idade: number;
    genero?: string;
}

const printUser = ({nome,idade,genero = 'masculino'}: User) => {
    console.log(`Nome: ${nome}`);
    console.log(`Idade: ${idade}`);
    console.log(`Gênero: ${genero}`)
}

const user1: User = {
    nome: 'Raul',
    idade: 23
}

printUser(user1);

const user2: User = {
    nome: 'Ana',
    idade: 30,
    genero: 'feminino'
}

printUser(user2);