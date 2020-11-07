import { apiHelper } from '../../utils/helpers';
const getToken = () => localStorage.getItem('austin_token');

export default {
    signup (data){
        return apiHelper.post(`/admin/signup`, data);
    },
    signin(data){
        return apiHelper.post(`admin/signin`, data);
    },
    getCurrentUser(){
        return apiHelper.get(`/get_current_user`, {
            headers: { Authorization: `Bearer ${getToken()}` }
        });
    }
}