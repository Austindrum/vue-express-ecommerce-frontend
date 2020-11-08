<template>
    <div>
        <!-- <button class="btn btn-sm btn-primary" type="button" data-toggle="modal" data-target="#sign-up-modal">
            Signup
        </button> -->
        <div class="modal fade" id="sign-up-modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Sign Up</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="form-group">
                                <label>Name</label>
                                <input
                                type="text" 
                                class="form-control"
                                :class="{ 'is-invalid' : nameErr }"
                                v-model="name" 
                                placeholder="user">
                                <div v-if="nameErr" class="invalid-feedback">
                                    {{ nameErr }}
                                </div>
                            </div>
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
                            <div class="form-group">
                                <label>Confirm Password</label>
                                <input 
                                type="password" 
                                class="form-control"
                                :class="{ 'is-invalid' : confirmPasswordErr}"
                                v-model="confirmPassword"
                                placeholder="12345678"
                                autocomplete="on">
                                <div v-if="confirmPasswordErr" class="invalid-feedback">
                                    {{ confirmPasswordErr }}
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button @click.stop.prevent="signup" type="button" class="btn btn-primary">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import $ from "jquery"; 
import adminAuthAPI from '../apis/admin/auth';
export default {
    name: "Signup",
    data() {
        return {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            nameErr: '',
            emailErr: '',
            passwordErr: '',
            confirmPasswordErr: '',
        }
    },
    methods: {
        async signup(){
            const vm = this;
            try {
                if (!vm.name || !vm.email || !vm.password || !vm.confirmPassword) {
                    if(!vm.name){
                        vm.nameErr = "Enter your name"
                    }else{
                        vm.nameErr = ""
                    }
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
                    if(!vm.confirmPassword){
                         vm.confirmPasswordErr = "Confirm password"
                    }else{
                         vm.confirmPasswordErr = ""
                    }
                    return false;
                }
                // if (vm.password.length < 6){
                //     vm.passwordErr = "Password need over 6 parametter";
                //     vm.password = "";
                //     vm.confirmPassword = "";
                //     return false;
                // }
                if (vm.password !== vm.confirmPassword){
                    vm.confirmPasswordErr = "Password not confirm";
                    vm.password = "";
                    vm.confirmPassword = "";
                    return false;
                }
                const resData = await adminAuthAPI.signup({
                    name: vm.name,
                    email: vm.email,
                    password: vm.password
                });
                if(resData.data.status !== "success"){
                    vm.emailErr = resData.data.message;
                    vm.email = "";
                    vm.password = "";
                    vm.confirmPassword = "";
                    return false;
                }
                vm.name = '';
                vm.email = '';
                vm.password = '';
                vm.confirmPassword = '';
                vm.nameErr = '';
                vm.emailErr = '';
                vm.passwordErr = '';
                vm.confirmPasswordErr = '';
                $('#sign-up-modal').modal('hide');
            } catch (err) { console.log(err) }
        }
    }
}
</script>

<style lang="">
    
</style>