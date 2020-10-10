// --------------ОБХОДИТ ОШИБКИ В СКРИПТЕ

// try {
//     console.log(test)
// } catch(err) {
//     console.log(err.message + " " + err.atack)
// } finally {
//     console.log("Hi")
// }

//  let text = "Hellow"

//  console.log("text")

// --------------Вызов функции через время

// let timerId = setTimeout(function () {
//     console.log("Hi")
// }, 2000)

// --------------ВТОРОЙ ВАРИАНТ

// let timerId = setTimeout(hi, 2000)
// function hi () {
//     console.log("Hi")
// }

// console.log(timerId)

// --------------Функция через интервал и ее остановка

// let button = document.querySelector("button");
// let timerId,count = 0;

// button.addEventListener("click", function() {
//      timerId = setInterval(hi, 500)
// })

// function hi () {
//     if(count === 4){
//         clearInterval(timerId)
//     }
//     console.log("Hi");
//     count++

// }

// --------------Двигающийся кубик

// let button = document.querySelector("button");

// function animation() {
//     let item = document.querySelector(".item");
//     let position = 0;
//     let id = setInterval(frame,20);
//     function frame () {
//         if(position === 250) {
//             clearInterval(id)
//         } else {
//             position++;
//             item.style.left = position + "px"
//         }
//     }
// }
// button.addEventListener("click",animation)

// let isMomHappy = false;

// // promise

// let willGetNewPhone = new Promise(function(resolve,reject) {
//     if(isMomHappy) {
//         let phone = {
//             brand:"Apple",
//             color:"gold"
//         }
//         resolve(phone)
//     } else {
//         reject("mom is not happy")
//     }
// }) 

// let askMom = function() {
//     willGetNewPhone
//     .then(function(data) {
//         console.log(data)
//     })
//     .catch(function(error) {
//         console.log(error)
//     })
// }

// askMom()

// let user = {
//     name:"Ivan",
//     age:20,
//     skills:{
//         html:4,
//         js:5
//     }

// }

// let cloneUser = JSON.parse(JSON.stringify(user))

// console.log(cloneUser === user)
// cloneUser.skills.html = 5;
// console.log(cloneUser)
// console.log(user)


// console.log(JSON.parse(JSON.stringify(user)))

// fetch("https:learn.javascript.ru/article/promise-chaining/user.json")
// .then(response => response.json())
// .then(user => alert("Hi " + user.name) )

// let button = document.querySelector("button")

// function myResponse() {
// fetch("https://api.github.com/users/kznkv-skillup")
// .then(response => response.json())
// .then(user => {
//     let img = document.createElement("img");
//     let avatar = user.avatar_url;
//     img.setAttribute("src",avatar);
//     document.body.append(img)
// })
// }

// button.addEventListener("click",myResponse)

///////////////////////////////// Решение по погоде!

fetch("http://api.openweathermap.org/data/2.5/weather?q=KHARKIV&units=metric&APPID=5d066958a60d315387d9492393935c19")
.then(response => response.json())
.then(data => {
    console.log(data)
    let name = document.querySelector(".name")
    let img = document.querySelector(".icon")
    let temp = document.querySelector(".temp")
    let pressure = document.querySelector(".pressure")
    let description = document.querySelector(".description")
    let humidity = document.querySelector(".humidity")
    let speed = document.querySelector(".speed")
    let deg = document.querySelector(".deg")
    

    name.innerHTML = data.name;
    img.setAttribute("src", `https://openweathermap.org/img/w/${data.weather[0].icon}.png`)
    temp.innerHTML = data.main.temp.toFixed(0)  + " С°";
    pressure.innerHTML = "Pressure: " + data.main.pressure + " hPa";
    description.innerHTML = `${data.weather[0].description}`;
    humidity.innerHTML = "Humidity: " + data.main.humidity + " %";
    speed.innerHTML = "Wind: " + data.wind.speed + " km/h";
    deg.innerHTML = "Deg: " + data.wind.deg + " °";
})