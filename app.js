'use strict';
let balance = 10000;

while (true) {
    const menu = `
    Добро пожаловать в банкомат!
    Ваш выбор:
    1. Показать Баланс
    2. Снять средства
    3. Пополнить счёт
    4. Выход
    `;

    const choice = prompt(menu);

    switch (choice) {
        case '1':
            alert(`Ваш баланс: ${balance} $`);
            break;
        case '2':
            const amoutToWithdraw = Number(prompt('Введите сумму для снятия'));
            if (isNaN(amoutToWithdraw) || amoutToWithdraw<=0) {
                alert ('Ошибка: введена некорректная сумма.');
            } else if (amoutToWithdraw > balance) {
                alert('Ошибка: на счёте недостаточно средств.');
            } else {
                balance-=amoutToWithdraw;
                alert(`Оставшийся баланс: ${balance} $`);
            }
            break;
        case '3':
            const amoutToDeposit = Number(prompt('Введите сумму для пополнения.'));
            if (isNaN(amoutToDeposit) || amoutToDeposit<=0) {
                alert ('Ошибка: введена некорректная сумма.');
            } else{
                balance+=amoutToDeposit;
                alert(`Счёт пополнен. Ваш баланс: ${balance} $`);
            }
            break;
    }
}