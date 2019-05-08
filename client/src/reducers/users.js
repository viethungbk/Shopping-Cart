var inittialState = [
    {
        {
        name: "Phúc",
        email: 'ledinhphucts98@gmail.com',
        password: "dinhphuc",
        avatar: "assets/images/products/Huawei-P30-Pro.jpg",
        date: "08/04/98",
        wishlist: [
            {
                type: ObjectId,
                ref: 'products',
                required: true
            }
        ],
        rate: [
            {
                product: {
                    type: "ObjectId",
                    ref: 'products'
                },
                rating: {
                    type: 3,
                },
                date: "08/04/2019"
            }
        ]
    }
];





const users = (state = inittialState, action) => {
    switch (action.type) {

        default: return [...state];
    }
}

export default products;