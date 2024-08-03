import { TIngredientType } from "./types";

export const orderPrice = (order: string[], data: TIngredientType[]): number => {
    let price = 0; 

    order.map((i, index) => {
        const item = data.find(it => it._id === i);
        price += item!.price;
        
        if (item!.type === "bun") {price += item!.price;}
    })

    return price
}