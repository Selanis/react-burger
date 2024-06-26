
export const totalPrice = (order, bun)=> {
    if (order.length && bun) {
        const orderPrice = order.reduce((acc, item) => acc + item.ingredient.price, 0)
        const bunPrice = bun.price * 2
        return bunPrice * 2 + orderPrice
    } else if (order.length && !bun) {
        const orderPrice = order.reduce((acc, item) => acc + item.ingredient.price, 0)
        return orderPrice
    } else if (!order.length && bun) {
        const bunPrice = bun.price * 2
        return bunPrice * 2
    } else {
        return 0
    }
}