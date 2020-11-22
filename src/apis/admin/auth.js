import { apiHelper } from '../../utils/helpers';
const getToken = () => localStorage.getItem('austin_token');

export default {
    signup (data){
        return apiHelper.post(`/admin/signup`, data);
    },
    signin(data){
        return apiHelper.post(`admin/signin`, data);
    },
    getOrder(cartId){
        return apiHelper.get(`admin/order/${cartId}`, {
            headers: { Authorization: `Bearer ${getToken()}` }
        })
    },
    postOrder(orderInfo){
        return apiHelper.post(`admin/order`, orderInfo, {
            headers: { Authorization: `Bearer ${getToken()}` }
        })
    },
    orderPayment(orderId){
        return apiHelper.get(`order/${orderId}/payment`, {
            headers: { Authorization: `Bearer ${getToken()}` }
        })
    },
    getUserCarts(userId){
        return apiHelper.get(`admin/${userId}/carts`, {
            headers: { Authorization: `Bearer ${getToken()}` }
        })
    },
    getUserCart(userId, cartId){
        return apiHelper.get(`admin/${userId}/cart/${cartId}`, {
            headers: { Authorization: `Bearer ${getToken()}` }
        })
    },
    deleteUserCart(userId, cartId){
        return apiHelper.delete(`admin/${userId}/cart/${cartId}`, {
            headers: { Authorization: `Bearer ${getToken()}` }
        })
    },
    putUser (usertId, formData) {
        return apiHelper.put(`/admin/user/${usertId}`, formData, {
            headers: { Authorization: `Bearer ${getToken()}` }
        })
    },
    getCurrentUser(){
        return apiHelper.get(`/get_current_user`, {
            headers: { Authorization: `Bearer ${getToken()}` }
        });
    }
}