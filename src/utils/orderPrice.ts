import { TIngredientType } from "./types";

export const orderPrice = (order: string[], data: TIngredientType[]): number => {
    let price = 0; 

    order.forEach((i) => {
        const item = data.find(it => it._id === i);
        if(item) {
            price += item.price;
            if (item.type === "bun") {price += item.price;}
        }
    })

    return price
}