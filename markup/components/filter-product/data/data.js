var data = {
    filterRange: {
        price: {
            min: '0',
            max: '96300',
            step: '100',
            value: '[0,96300]',
            label: 'Цена',
            units: 'руб.',
        },

        diameter: {
            min: '0',
            max: '16',
            step: '1',
            value: '[0,16]',
            label: 'Диаметр',
            units: 'см.',
        },

        length: {
            min: '2',
            max: '66',
            step: '1',
            value: '[2,66]',
            label: 'Длина',
            units: 'см.',
        }
    },

    filterSize: {
        items:[
            {
                id: 'radio-size1',
                name: 'size',
                value: '',
                checked: true,
                label: 'Все',
            },
            {
                id: 'radio-size2',
                name: 'size',
                value: '',
                checked: false,
                label: 'S-M-L',
            },
            {
                id: 'radio-size3',
                name: 'size',
                value: '',
                checked: false,
                label: 'S-M',
            },
            {
                id: 'radio-size4',
                name: 'size',
                value: '',
                checked: false,
                label: 'L-XL',
            },
            {
                id: 'radio-size5',
                name: 'size',
                value: '',
                checked: false,
                label: 'S',
            },
            {
                id: 'radio-size6',
                name: 'size',
                value: '',
                checked: false,
                label: 'M',
            },
            {
                id: 'radio-size7',
                name: 'size',
                value: '',
                checked: false,
                label: 'безразмерный',
            },
            {
                id: 'radio-size8',
                name: 'size',
                value: '',
                checked: false,
                label: 'L',
            },
            {
                id: 'radio-size9',
                name: 'size',
                value: '',
                checked: false,
                label: 'XXL-XXXL',
            },
            {
                id: 'radio-size10',
                name: 'size',
                value: '',
                checked: false,
                label: '1X-2X-3X',
            },
            {
                id: 'radio-size11',
                name: 'size',
                value: '',
                checked: false,
                label: 'M-L',
            },
            {
                id: 'radio-size12',
                name: 'size',
                value: '',
                checked: false,
                label: 'XL',
            },
            {
                id: 'radio-size13',
                name: 'size',
                value: '',
                checked: false,
                label: 'XL-1X-2X',
            },
            {
                id: 'radio-size14',
                name: 'size',
                value: '',
                checked: false,
                label: 'Q (XL-XXL)',
            },
            {
                id: 'radio-size15',
                name: 'size',
                value: '',
                checked: false,
                label: 'XXL',
            }
        ]
    },

    filterColor: {
        clearBtn: true,
        items: [
            {
                name: 'Телесный',
                color: '#f6d8c0'
            },
            {
                name: 'Розовый',
                color: '#db32cd'
            },
            {
                name: 'Черный',
                color: '#000'
            },
            {
                name: 'Фиолетовый',
                color: '#8404b3'
            },
            {
                name: 'Красный',
                color: '#f72a2a'
            },
            {
                name: 'Голубой',
                color: '#5fc8ff'
            },
            {
                name: 'Лиловый',
                color: '#dc7094'
            },
            {
                name: 'Синий',
                color: '#2984ca'
            },
            {
                name: 'Серебро',
                color: 'linear-gradient(to bottom, #fefcea, #c3c3c3)'
            },
            {
                name: 'Зотоло',
                color: 'linear-gradient(to bottom, #fb9600, #fee101)'
            },
            {
                name: 'Белый',
                color: 'white'
            },
            {
                name: 'Зеленый',
                color: 'green'
            },
            {
                name: 'Коричневый',
                color: '#6c3b13'
            },
            {
                name: 'Серый',
                color: '#d1d1d1'
            },
            {
                name: 'Оранжевый',
                color: '#f95d34'
            },
            {
                name: 'Сиреневый',
                color: '#7e0757'
            },
            {
                name: 'Желтый',
                color: '#f9be0c'
            },
            {
                name: 'Бежевый',
                color: '#d9ba8c'
            },
            {
                name: 'Малиновый',
                color: '#f1245c'
            },
            {
                name: 'Прозрачный',
                color: 'rgba(0,0,0, 0.04)'
            },

        ]
    },

    filterSelect: {
        name: 'manufacture',
        items: [
            {
                label: 'Все',
                value: '0'
            },
            {
                label: 'Производитель 1',
                value: '1'
            },
            {
                label: 'Производитель 2',
                value: '2'
            },
            {
                label: 'Производитель 3',
                value: '3'
            },
        ]
    }
}
