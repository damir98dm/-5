
//1 задание

const users = {
    
}
for(let i = 1 ; i <= 5 ; i++ ){
    let name = prompt('Введите свое имя ') ;
    let age = +prompt('Введите свой возраст ')
    users[i] = {
        name : name,
        age : age
    }
    console.log(users[i]);

}
console.log(users);



