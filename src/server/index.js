const apparatus = {
    vendingList: [
        {
            id: 'chocolate',
            name: 'Аппарат с шоколадками',
            text: 'Купи шоколадку, шоколад не виноват',
            img: 'https://73.img.avito.st/432x324/5596375573.jpg',
            currency: 'RUB'
        },
    ]
}

const products = {
    productsList: [
        {
            id: 4545,
            name: 'Сникерс',
            price: 100,
            count: 3,
            img: 'https://images.ua.prom.st/1943655990_w200_h200_sladkij-batonchik-snikers.jpg'
        },
        {
            id: 1111,
            name: 'Марс',
            price: 100,
            count: 2,
            img: 'https://i.ytimg.com/vi/8A91mY0IhdE/hqdefault.jpg'
        },
        {
            id: 2223,
            name: 'Киткат',
            price: 50,
            count: 1,
            img: 'https://images.kz.prom.st/101317667_w200_h200_kit-kat-batonchik-molochnyj.jpg'
        },
    ]
}

export default new Map([
    ['/rs/v1/apparatus', apparatus],
    ['/rs/v1/products/chocolate', products],
]);