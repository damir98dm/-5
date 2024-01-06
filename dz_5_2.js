function receipt() {
    const arrayReceipt = [{
        'Lavash': {
            info: 'Big Cheese',
            price: 15000
        }, 'Hot-dog': {
            info: 'mini',
            price: 8500
        }, 'Cola': {
            info: '1.5 L',
            price: 9000
        }
    }, {
        'Milk': {
            info: '1 L',
            price: 8500
        },
        'Sugar': {
            info: '1 kg',
            price: 7000
        }
    }, {
        'Cola': {
            info: '1 L',
            price: 6500
        },
        'Fanta': {
            info: '1.5 L',
            price: 9000
        },
        'Lipton': {
            info: '1.2 L',
            price: 5000
        }, 
        'Nestle': {
            info: '10 L',
            price: 8500
        }
    }]
    const count = Math.floor(Math.random() * arrayReceipt.length)
    return arrayReceipt[count]
}

let products = receipt()
let sum = 9000;
let result = '';

for(proparty in products){
    sum += products[proparty].price
    result+= proparty + ' ' + products[proparty].info + ' , '

    
}
console.log('Вы заказали ' + result + ' | Общая стоимость ' + sum + ' сум с доставкой (9000)'  );


