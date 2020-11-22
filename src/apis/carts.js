import { apiHelper } from "../utils/helpers";
const getToken = () => localStorage.getItem('austin_token');

export default {
    // addToCart(productId, quantity){
    //     return apiHelper.post(`/cart`, {
    //         productId,
    //         quantity
    //     })
    // },
    postCart(cartInfo){
        return apiHelper.post(`/cart`, cartInfo, {
            headers: { Authorization: `Bearer ${getToken()}` }
        })
    }
}