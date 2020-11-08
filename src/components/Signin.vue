<template>
    <div>
        <!-- <button class="btn btn-sm btn-primary" type="button" data-toggle="modal" data-target="#sign-in-modal">
            Signin
        </button> -->
        <div class="modal fade" id="sign-in-modal" tabindex="-1" aria-labelledby="sign-in-modal" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                   <div class="modal-header">
                        <h5 class="modal-title">Sign In</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="form-group">
                                <label>Email</label>
                                <input 
                                type="email" 
                                class="form-control"
                                :class="{ 'is-invalid' : emailErr }"
                                v-model="email"
                                placeholder="user@example.com">
                                <div v-if="emailErr" class="invalid-feedback">
                                    {{ emailErr }}
                                </div>
                            </div>
                            <div class="form-group">
                                <label>Password</label>
                                <input 
                                type="password" 
                                class="form-control"
                                :class="{ 'is-invalid' : passwordErr }"
                                v-model="password"
                                placeholder="12345678"
                                autocomplete="on">
                                <div v-if="passwordErr" class="invalid-feedback">
                                    {{ passwordErr }}
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button @click.stop.prevent="signin" type="button" class="btn btn-primary">Sign In</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import adminAuthAPI from '../apis/admin/auth';
import $ from "jquery"; 
export default {
    name: "Signin",
    data() {
        return {
            email: "",
            password: "",
            emailErr: "",
            passwordErr: ""
        }
    },
    methods: {
        async signin(){
            const vm = this;
            vm.emailErr = '';
            vm.passwordErr = '';
            try {
                if (!vm.email || !vm.password) {
                    if(!vm.email){
                        vm.emailErr = "Enter your email";
                    }else{
                        vm.emailErr = "";
                    }
                    if(!vm.password){
                        vm.passwordErr = "Enter password";
                    }else{
                        vm.passwordErr = "";
                    }
                    return false;
                }
                const resData = await adminAuthAPI.signin({
                    email: vm.email,
                    password: vm.password
                });
                if(resData.data.status.code !== 200){
                    if(resData.data.status.code == 400){
                        vm.passwordErr = resData.data.message;
                    }
                    if(resData.data.status.code == 300){
                        vm.emailErr = resData.data.message;
                    }
                    return false;
                }
                localStorage.setItem('austin_token', resData.data.token);
                vm.$store.commit({
                    type: "setCurrentUser",
                    user: resData.data.user,
                    token: resData.data.token
                });
                $('#sign-in-modal').modal('hide');
            } catch (err) {
                console.log(err);
            }
        }
    },
}
</script>

<style lang="">
    
</style>