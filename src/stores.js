
export const productsList = [ {
        id: 1,
        name: 'Macbook',
        price: 2999,
        description: 'The MacBook is carved out of solid aluminum, thus giving it a distinctive look and a grayish-white hue. The MacBook Air in particular has a thin and light design. There are two versions of the MacBook Air: the 11-inch, with an 11.6-inch screen; and the 13-inch, with a 13.3-inch screen.',
        images: [
            '/mac.png', '/mac.png', '/mac.png'
        ],
        inStock: 1,
        options: {
            storage: [{
                amount: '1TB',
                additionalValue: 0
            }]
    },
        url: '/products/1'
        
    },
    {
        id: 2,
        name: 'Iphone',
        price: 1499,
        description: 'The iPhone is a smartphone made by Apple that combines a computer, iPod, digital camera and cellular phone into one device with a touchscreen interface.',
        images: [
            '/iphone.png', '/iphone.png', '/iphone.png'
        ],
        inStock: 9,
        options: {
            storage: [
                {
                    amount: '64GB',
                    additionalValue: 0
                },
                {
                    amount: '128GB',
                    additionalValue: 400
                },
                {
                    amount: '1TB',
                    additionalValue: 600
                }
            ]
        },
        url: '/products/2'

    },
    {
        id: 3,
        name: 'Ipad',
        price: 1799,
        description: `The iPad is designed for consuming various types of media -- reading books, browsing the Web and watching videos, in particular. It's also marketed as a portable gaming device, and there are hundreds of games for sale in the iPad App Store.`,
        images: ['/ipad.png', '/ipad.png', '/ipad.png'],
        inStock: 2,
        options: {
            storage: [
                {
                    amount: '64GB',
                    additionalValue: 0
                },
                {
                    amount: '128GB',
                    additionalValue: 400
                }
            ]
        },
        url: '/products/3'

    }
]