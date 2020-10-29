import { apiHelper } from "../utils/helpers";

export default {
    addToCart(productId, quantity){
        return apiHelper.post(`/cart`, {
            productId,
            quantity
        })
    }
}