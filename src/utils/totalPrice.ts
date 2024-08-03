import { TIngredientType, IOrderContainer } from "./types"

export const totalPrice = (order: IOrderContainer[], bun: TIngredientType | null): number => {
    if (order.length && bun) {
        const orderPrice = order.reduce((acc, item) => acc + item.ingredient.price, 0)
        const bunPrice = bun.price * 2
        return bunPrice + orderPrice
    } else if (order.length && !bun) {
        const orderPrice = order.reduce((acc, item) => acc + item.ingredient.price, 0)
        return orderPrice
    } else if (!order.length && bun) {
        const bunPrice = bun.price * 2
        return bunPrice
    } else {
        return 0
    }
}