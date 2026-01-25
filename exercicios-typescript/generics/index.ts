// function makeArray<T>(item: T | any) : T[]{
//     if (typeof item == 'object' ){
//         return Object.values(item);
//     } 

//     return [item];
// }

// const objectNumber = {
//     num: 1,
//     num2: 2,
//     num3: 3,
//     num4: 4, 
//     num5: 5
// }

// const arrayNumbers = makeArray(objectNumber);
// const arrayNames = makeArray('John Doe');
// console.log(arrayNumbers);
// console.log(arrayNames)

// arrayNumbers.forEach(num => {
//     console.log(num);
// });

// arrayNames.forEach(name => {
//     console.log(name);
// });

// o de cima foi minha tentativa, o de baixo é a resposta dos gemeos

function mostrarItens<T>(itens: T[]): void {
  itens.forEach(item => console.log(item))
}

mostrarItens<number>([1, 2, 3, 4])
mostrarItens<string>(['a', 'b', 'c'])