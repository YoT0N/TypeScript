function pay(product: string, price: number = 10) {
    console.log(`Ціна за вхід та продукти ${product} становить ${price}`);
}
pay('Вода звичайна');
pay('Попкорн', 20);
pay('Кола', 30);

function icecreamPrice() {
    const size = prompt('Оберіть розмір стаканчика (Малий або Велиий):');
    const toppingsInput = prompt('Оберіть начинки (через кому):');
    let toppings: string[] = [];
    if (toppingsInput != null) {
        toppings = toppingsInput.split(',').map((topping) => topping.trim());
    }
    const addMarshmallow = confirm('Додати маршмелоу?');

    let totalPrice: number = 0;

    if (toppings.includes('шоколад')) totalPrice += 5;
    if (toppings.includes('карамель')) totalPrice += 6;
    if (toppings.includes('ягоди')) totalPrice += 10;

    if (totalPrice == 0) {
        totalPrice += 5;
        toppings[0] = 'шоколад';
    }

    size == 'Великий' ? (totalPrice += 25) : (totalPrice += 10);

    if (addMarshmallow) {
        totalPrice += 5;
        toppings.push('маршмелоу');
    }

    let toppingsStr = toppings.join(', ');
    console.log(`Ціна морозива ${totalPrice}, до нього входить ${toppingsStr}`);
}

icecreamPrice();
