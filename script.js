// /* OBJECT */
//
// // let user = {};
//
// // или
//
// // let user = new Object();
//
//
// //Объект с ключами и значениями
//
// // let user = {
// //     name: 'John',
// //     age: 25,
// //     isMarried: false,
// //     skills:{
// //         html: 'good',
// //         css: 'excellent',
// //         javaScript: 'beginner'
// //     }
// // };
//
//
// //Доступ к свойствам объекта
//
// // let user = {
// //     name: 'John',
// //     age: 25,
// //     isMarried: false,
// //     skills:{
// //         html: 'good',
// //         css: 'excellent',
// //         javaScript: 'beginner'
// //     }
// // };
// //
// // console.log(user.name); // John
// // console.log(user['name']); // John
// // console.log(user.skills.html); // good
//
//
//
// //Добавления ключа и значения
//
// // let user = {
// //     name: "John",
// //     age: 20,
// //     isMarried: false,
// //     skills: {
// //         html: "good",
// //         css: "excellent",
// //         js: "beginner",
// //     },
// // };
// //
// // user.role = 'admin'
// //
// // console.log(user);
// // console.log(user.role); // admin
//
//
// //Удаление ключа
//
// // let user = {
// //     name: "John",
// //     age: 20,
// //     isMarried: false,
// //     skills: {
// //         html: "good",
// //         css: "excellent",
// //         js: "beginner",
// //     },
// // };
//
// // delete user.age
//
// // console.log(user);
// // console.log(user.age);// undefined
//
//
// //Проверка существования свойства
//
// // let user = {
// //     name: "John",
// //     age: 20,
// //     isMarried: false,
// //     skills: {
// //         html: "good",
// //         css: "excellent",
// //         js: "beginner",
// //     },
// // };
//
// // console.log('name' in user); //true
// // console.log('age' in user); //true
// // console.log('role' in user); //false
//
//
// //Перебор всех ключей с помощью цикла for ... in
//
// // let user = {
// //     name: "John",
// //     age: 20,
// //     isMarried: false,
// //     skills: {
// //         html: "good",
// //         css: "excellent",
// //         js: "beginner",
// //     },
// // };
// //
// // for (let key in user){
// //     console.log(key);
// // }
//
//
// //Перебор всех ключей и значений
//
// // let user = {
// //     name: "John",
// //     age: 20,
// //     isMarried: false,
// //     skills: {
// //         html: "good",
// //         css: "excellent",
// //         js: "beginner",
// //     },
// // };
// //
// // for (let key in user){
// //     console.log(key);
// // }
//
//
// //Перебор вложенных ключей объектов
//
// // let user = {
// //     name: "John",
// //     age: 20,
// //     isMarried: false,
// //     skills: {
// //         html: "good",
// //         css: "excellent",
// //         js: "beginner",
// //     },
// // };
// //
// // for (let key in user){
// //     if (typeof user[key] === 'object'){
// //         for (let subkey in user[key]){
// //             console.log(subkey + ':' + user[key][subkey])
// //         }
// //     }
// // }
//
// //- **деструктуризация**
//
// //Очень часто в разработке необходимо некоторые свойства объекта сохранить в отдельных переменных. Обычным способом это выглядить так:
// // let user = {
// //     name: "John",
// //     age: 20,
// //     isMarried: false,
// //     skills: {
// //         html: "good",
// //         css: "excellent",
// //         js: "beginner",
// //     },
// // };
// //
// // let name = user.name;
// //
// // document.write(name);
//
//
// //но в JS имеется деструктурирующее присваивание
//
// // let user = {
// //     name: "John",
// //     age: 20,
// //     isMarried: false,
// //     skills: {
// //         html: "good",
// //         css: "excellent",
// //         js: "beginner",
// //     },
// // };
// //
// // let {name, age} = user;
// // console.log(name);
// // console.log(age)
//
//
//
// //при деструктуризации имена переменных можно менять
//
// // let user = {
// //     name: "John",
// //     age: 20,
// //     isMarried: false,
// //     skills: {
// //         html: "good",
// //         css: "excellent",
// //         js: "beginner",
// //     },
// // };
// //
// // let {name: userName, age:userAge} = user;
// // console.log(userName, userAge);
//
//
// //- **деструктуризация перебираемых объектов**
//
// //Деструктуризация массива
//
// // let user =['John', 'Vanya'];
// //
// // let [firstName, secondName] = user;
// // console.log(firstName, secondName)
//
// //Деструктуризация строки
//
// // let myStr = 'Hello Vanya';
// //
// // let [firstLetter, secondLetter,thirdLetter] = myStr;
// // console.log(firstLetter,);
// // console.log(secondLetter);
// // console.log(thirdLetter);
//
//
//
// //Пропуск элементов
//
// // let myStr = 'Hello Vanya';
// //
// // let [firstLetter, , , ,thirdLetter] = myStr;
// // console.log(firstLetter,);
// // console.log(thirdLetter);
//
//
//
// //JSON
//
// //Превращение JS объекта в JSON
//
// // let user = {
// //     name: "John",
// //     age: 20,
// //     isMarried: false,
// //     skills: {
// //         html: "good",
// //         css: "excellent",
// //         js: "beginner",
// //     },
// // };
// //
// // let userJson = JSON.stringify(user);
// // console.log(userJson)
//
//
// //
// // let user = {
// //     name: "John",
// //     age: 20,
// //     isMarried: false,
// //     skills: {
// //         html: "good",
// //         css: "excellent",
// //         js: "beginner",
// //     },
// // };
// //
// // let userJson = JSON.stringify(user);
// // let userName = JSON.parse(userJson)
// // for (let key in userName){
// //     console.log(key : userName[key])
// // }
//
//
// //- **Упражнение**
//
// //Создать массив из 15 объектов с постами для сайта блога с ключами title, и author.
//    // Необходимо перебрать массив и вывести название поста в теге h3, и автора в теге p
//
// // const users = [
// //     post1 = {
// //     title: 'lorem',
// //         author: 'Beka'
// //     },
// //     post2 = {
// //     title: 'lorem',
// //         author: 'Beka'
// //     },
// //     post3 = {
// //     title: 'lorem',
// //         author: 'Beka'
// //     },
// //     post4 = {
// //     title: 'lorem',
// //         author: 'Beka'
// //     },
// //     post5 = {
// //     title: 'lorem',
// //         author: 'Beka'
// //     },
// //     post6 = {
// //     title: 'lorem',
// //         author: 'Beka'
// //     },
// //     post7 = {
// //     title: 'lorem',
// //         author: 'Beka'
// //     },
// //     post8 = {
// //     title: 'lorem',
// //         author: 'Beka'
// //     },
// //     post9 = {
// //     title: 'lorem',
// //         author: 'Beka'
// //     },
// //     post10 = {
// //     title: 'lorem',
// //         author: 'Beka'
// //     },
// //     post11 = {
// //     title: 'lorem',
// //         author: 'Beka'
// //     },
// //     post12 = {
// //     title: 'lorem',
// //         author: 'Beka'
// //     },
// //     post13 = {
// //     title: 'lorem',
// //         author: 'Beka'
// //     },
// //     post14 = {
// //     title: 'lorem',
// //         author: 'Beka'
// //     },
// //     post15 = {
// //     title: 'lorem',
// //         author: 'Beka'
// //     }
// // ];
//
// // for (let key in users){
// //     document.write(`<h3>${users[key].title}</h3> <p>${users[key].author}</p>`);
// }


// let users = ['Beka', 'Michael', 'John','Bob'];
//
// function arrToObj (arr){
//     let arrOfObj = [];
//
//     for (let item of arr ){
//         if (item){
//             arrOfObj.push({name: item});
//         }
//     }
//     return arrOfObj;
// }
//
// console.log(arrToObj(users));
//
//
// let showMovies = [
//     {
//         title: 'Plan b',
//         director:'Baha',
//         duration: 130,
//
//     },
//     {
//         title: 'No Way Home',
//         director:'Sony',
//         duration: 140,
//
//     },
//     {
//         title: 'Shang-Chi and the Legend of the Ten Rings',
//         director:'Disney',
//         duration: 135,
//
//     },
//     {
//         title: 'Venom: Let There Be Carnage',
//         director:'Sony',
//         duration: 138,
//
//     },
//     {
//         title: 'No Time to Die',
//         director:'Universal',
//         duration: 139,
//
//     },
// ];
//
// function longestMovies (arr){
//     let sorted = arr.sort((a,b) => b.duration - a.duration);
//     return sorted.slice(0,3);
// }
//
// function theLongestMovie (longestMovies){
//     for (let item of longestMovies){
//         document.write(`<h3>${item.title}</h3>`);
//         document.write(`<h6>${item.director}</h6>`);
//         document.write(`<p>${item.duration}</p>`);
//     }
// }
//
// theLongestMovie(longestMovies(showMovies));












