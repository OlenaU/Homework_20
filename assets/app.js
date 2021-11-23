//Homework_20 Задание 1
let target = 100;
let count = -1;

while(count < target)
{
    count = count + 1; 
    console.log(`Count: ${count} `);
}
/*
//Homework_20 Задание 2

let target = 57;
let count = 20;

while(count < target)

{
    count = count + 1; 
    console.log(`Count: ${count} `);
}

//Homework_20 Задание 3

let target = 100;
let count = 0;

while(count < target)

{
    count = count + 2; 
    console.log(`Count: ${count} `);
}

//Homework_20 Задание 4 
//Вариант 1 без цикла с использованием формулы Гаусса

const numSum = (100 * (100+1)) / 2;
console.log(`Сумма чисел от 1 до 100 равна ${numSum}`);

//Вариант с циклом for

let sum = 0;

for(let i = 0; i<=100; i++)
{
    sum +=i;
}

alert(`Сумма чисел от 1 до 100 равна ${sum}`);


//Homework_20 Задание 5

for (let i = 3; i <= 1000; i++)
{
    let isPrime = true;
    for (let s = 2; s < i; s++)
    if (i % s === 0) 
    {
        isPrime = false; break;
    }
    if (isPrime) console.log
    (i);
}















/*let target = 25;
let temp = 21;

while(temp < target)  // 25<25 дает false
{
    temp = temp + 1; //temp++;
    console.log(`Temp: ${temp} C`);
}
console.log(`Finish: ${temp} C`);

/*const secret = '1234';
let code;
do {
code = prompt('Enter code');
if (code == secret) {
    alert(`Open`);
}else{
    alert(`Wrong code`)
} 
while (code != secret);
console.log('after');




//Вариант на 1 раз
/*const secret = '1234';
let code;
code = prompt('Enter code');
if (code == secret) {
    alert(`Open`);
}else{
    alert(`Wrong code`)
}*/
//можно сделать копипаст для повторения и будет 2 попытки ввести пароль




/*// Homework_19 #1
let mass = +prompt('Ваш вес: (кг.)');
let height = +prompt('Ваш рост:  (м.)');

let BMI = mass / (height ** 2);

if (BMI <= 16.5) { 
    console.log('Выраженный дефицит массы тела');
} 
else if (BMI > 16.5 && BMI <= 18.5) {
    console.log('Недостаточная масса тела');
}
else if (BMI > 18.5 && BMI <= 25) {
    console.log('Нормальная масса тела');
}
else if (BMI > 25 && BMI <= 30) {
    console.log('Избыточная масса тела');
}
else if (BMI > 30 && BMI <= 35) {
    console.log('Ожирение 1 степени');
}
else if (BMI > 35 && BMI <= 40) {
    console.log('Ожирение 2 степени');
}
else if (BMI > 40) {
    console.log('Ожирение 3 степени');
}


// Homework_19 #2  год считается високосным, если номер этого года делится нацело на 4, за исключением тех, которые делятся нацело на 100 и не делятся на 400.
/*let year = +prompt('Введите год ');
if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
    console.log(year + ' год - высокосный');
} else { 
    console.log(year + ' год - невысокосный ');
}




/*
const isLeapYear = (year) => (year % 100 === 0 ? year % 400 === 0 : year % 4 === 0);


if leap_year = ((year % 4)!==0 ||  ((year % 100)!=0 && (year % 400)!=0)))
{
    alert(`${leap_year} Введенный вами год невысокосный`);
}
else
{
    alert(`Введенный вами год высокосный`);
}



/*function(year) {
    if (year > 1582) 
    return!(((year % 4) || (!(year % 100) && (year % 400))));
    
}
   
    /*
    return ;!((year % 4) || (!(year % 100) && (year % 400)))
    if (year >= 0)
    return !(year % 4);
    if (year >= -45) return !((year + 1) % 4);
    return false;
  };


/*let mass = +prompt('Ваш вес: (кг.)');
let height = +prompt('Ваш рост:  (м.)');

let BMI = mass / (height ** 2);

if (BMI <= 16.5) { 
    console.log('Выраженный дефицит массы тела');
} 
else if (BMI > 16.5 && BMI <= 18.5) {
    console.log('Недостаточная масса тела');
}
else if (BMI > 18.5 && BMI <= 25) {
    console.log('Нормальная масса тела');
}
else if (BMI > 25 && BMI <= 30) {
    console.log('Избыточная масса тела');
}
else if (BMI > 30 && BMI <= 35) {
    console.log('Ожирение 1 степени');
}
else if (BMI > 35 && BMI <= 40) {
    console.log('Ожирение 2 степени');
}
else if (BMI > 40) {
    console.log('Ожирение 3 степени');
}





/*
//min payment UA 6500
//4500 + 1000 + 300 + 4200 + 3100
const.limit = 6500;
let data = [2000, 5500, 6200, 6700, 8000, 9100, 2300, 3400];
let sum = 0;
for(let item of data){
    if(item < limit){
        let diff = limit - item;
        sum = sum + diff;
    }
}
console.log(`Не хватает ${sum} грн.`);





/*let users = ['Ivan', 'Olga', 'Marina', 'Boris', 'Petr', 'John'];
users.push('Polina'); 
users.push('Yuriy');
for(let item of users){
    console.log(`Hi ${item}!`);
}

/*for(let i = 0; i < 7; i++) {
    console.log(`Hello ${users[i]}!!!`)
}

/*
let i = 0;

console.log(`Hello ${users[0]}!`);
i++;
console.log(`Hello ${users[1]}!`);
i++;





/*
let mas = ['Ivan', true, 42, 'London', 74.23, false, 'Olga'];
/*console.log(mas [4])
mas[3] = mas[3] + 'is the capital of France';
console.log( mas.length );
mas.push('Boris');//добавление в конец
mas.unshift('Marina');//добавление в начало-сбивает счет

mas.pop()  //уберет посл.єлемент
mas.unshift()//уберет первый элемент*/



/*//Задание №1
let a = +prompt('Введите длину стороны: (см.)');
let P = a * 4;
alert(`${P}`);

//Задание №2
let a = +prompt('Введите длину ребра куба: (см.)');
let v = a ** 3;
let s = (4 * a) ** 2;
alert(`Объем куба = ${v} (см.);`);
alert(`Площадь боковой поверхности = ${s} (см.)`);

//Задание №3
let r = +prompt('Введите радиус окружности: (см.)');
const π = 3.14;
C = π * r;
alert(`Длина окружности = ${C} (см.)`); 

//Задание №4
let m = +prompt('Введите массу вещества: (кг.)');
let v = +prompt('Введите объем вещества: (м.куб.)');
ρ = m / v;
alert(`Плотность вещества = ${ρ} (кг/м.куб.)`);

//Задание №5
let n = +prompt('Введите количество жителей: (чел.)');
let s = +prompt('Введите площадь территории: (км.кв.)');
ρ = s / n;
alert(`Плотность населения = ${ρ} (чел./км.кв)`);

//Задание №6
let a = +prompt('Введите длину первого катета: (см.)');
let b = +prompt('Введите длину второго катета; (см.)');
console.log(Math.hypot(a, b));

//Задание №6
let a = +prompt('Веедите число: ');
let b = (a * a + 10) / Math.sqrt(a * a + 1);
alert(`Y = ${b}`);





















/*const incomeTaxRate = 18; // % 
const militaryTaxRate = 1.5; // %

let sum = +prompt('Ваша сумма');

let incomeTaxSum = sum * incomeTaxRate / 100;
console.log(`Подоходный налог: ${incomeTaxSum} грн`);

let militaryTaxSum = sum * incomeTaxRate / 100;
console.log(`Военный налог: ${militaryTaxSum} грн`);

let afterTax = sum - incomeTaxSum - militaryTaxSum;
console.log(`Остаток: ${afterTax} грн`);



/* let a;
let b = 3;

let c = a + b;

console.log( c );







 /*let dnipro = 3;
let shakhtar = 3;

if(dnipro > shakhtar){
    console.log('Dnipro WIN!');
}else {
    console.log('Shakhtar WIN!')
} else if (shakhtar==dnipro){
    console.log('Draw');
}


/*let height = 170; //Limit 140
let age = 14; //Limit 12

if(height>=140)|| (age<12)) {
    console.log ('Можно!');
}else {
    console.log('Нельзя!')
}




/*
A - 61, B - 63, C -64

61 65
let res = 'Ivan' >'Iven';
console.log(res);


 //* let age = +prompt('Ваш возраст: ');
if (age >=18) {
    alert('Welcome!');
} else {
    window.location = 'https://sinoptik.ua';
}
*/
