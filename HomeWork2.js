"use strict"
let money = prompt("Ваш бюджет на месяц?", "");

let time = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
    budget: 50000,
    timeData: 2020-04-04,
    expenses: {qes1: "10000", qes2: "5000"},
    optionalExpenses: {},
    income: [],
    savings: false
};

let qes1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
    qes2 = prompt('Во сколько обойдется?',""),
    qes3 = prompt("Введите обязательную статью расходов в этом месяце", ''),
    qes4 = prompt('Во сколько обойдется?',"");
    
    appData.expenses[qes1] = qes2;
    appData.expenses[qes3] = qes4;

    alert( money / 30);

    console.log(appData);