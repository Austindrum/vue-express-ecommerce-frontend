import { apiHelper } from '../../utils/helpers';
const getToken = () => localStorage.getItem('austin_token');

export default {
    signup (data){
        return apiHelper.post(`/admin/signup`, data);
    },
    signin(data){
        return apiHelper.post(`admin/signin`, data);
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