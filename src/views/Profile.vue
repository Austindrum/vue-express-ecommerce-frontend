<template>
    <div>
        <h1>Your Profile</h1>
        <div class="jumbotron">
            <div class="row">
                <div class="col-md-5 border-right">
                    <img class="rounded-lg" style="width:150px; height:150px" :src="user.avatar" alt=""><br/>
                    <h1 class="display-5">{{ user.name }}'s Info</h1>
                    <p>Email: {{ user.email }}</p>
                    <p>Address: {{ user.address }}</p>
                    <p>Tel: {{ user.tel }}</p>
                    <button class="btn btn-warning btn-sm" data-toggle="modal" data-target="#profile-modal">Edit Profile</button>
                    <!-- Edit Profile Modal -->
                    <div class="modal fade" id="profile-modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Edit Profile</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <form @submit.stop.prevent="userEdit">
                                        <div class="form-group">
                                            <img class="rounded-lg" style="width:150px; height:150px" :src="templateImg" alt=""><br/>
                                            <label>Avatar</label>
                                            <input
                                            id="image"
                                            name="image"
                                            type="file" 
                                            class="form-control"
                                            @change="fileChange">
                                        </div>
                                        <div class="form-group">
                                            <label>Name</label>
                                            <input
                                            id="name"
                                            name="name"
                                            v-model="user.name"
                                            type="text" 
                                            class="form-control"
                                            :class="{ 'is-invalid' : nameErr }"
                                            placeholder="Your Name">
                                            <div v-if="nameErr" class="invalid-feedback">
                                                {{ nameErr }}
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label>Address</label>
                                            <input
                                            id="address"
                                            name="address"
                                            v-model="user.address"
                                            type="text" 
                                            class="form-control"
                                            placeholder="Your Address">
                                        </div>
                                        <div class="form-group">
                                            <label>Tel</label>
                                            <input
                                            id="tel"
                                            name="tel"
                                            v-model="user.tel"
                                            type="text" 
                                            class="form-control"
                                            placeholder="Your Phone">
                                        </div>
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                        <button type="submit" class="btn btn-primary">Edit</button>
                                    </form>
                                </div>
                                <!-- <div class="modal-footer">
                                </div> -->
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-7">
                    <h4>All Carts</h4>
                    <div class="row">
                        <div class="col-md-6">
                            <h5 class="border-bottom">Padding</h5>
                        </div>
                        <div class="col-md-6">
                            <h5 class="border-bottom">Payment</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import adminAPI from '../apis/admin/auth';
export default {
    data() {
        return {
            user: {},
            templateImg: "",
            nameErr: "",
        }
    },
    methods: {
        fileChange(e){
            const files = e.target.files;
            if(!files.length) return;
            this.templateImg = window.URL.createObjectURL(files[0]);
        },
        async userEdit(e){
            if(!this.user.name) return this.nameErr = "Enter Your Name";
            const form = e.target;
            const formData = new FormData(form);
            // for (let [name, value] of formData.entries()) {
            //     console.log(name + ': ' + value)
            // }
            const vm = this;
            try {
                const { data, statusText } = await adminAPI.putUser(vm.user.id, formData);
                if(statusText !== 'OK' || data.status !== 'success'){
                    throw new Error(statusText);
                }
                vm.$router.go(0);
            } catch (err) {
                console.log(err);
            }
        }
    },
    async created() {
        const user = await adminAPI.getCurrentUser();
        this.user = user.data.user;
        this.templateImg = user.data.user.avatar
    },
}
</script>

<style lang="">
    
</style>