<template>
    <div>
        <form name='Spgateway' :action='paymentInfo.PayGateWay' method="POST">
            MerchantID:
            <input type="text" name="MerchantID" v-model="paymentInfo.MerchantID"><br>
            TradeInfo:
            <input type="text" name="TradeInfo" v-model="paymentInfo.TradeInfo"><br>
            TradeSha:
            <input type="text" name="TradeSha" v-model="paymentInfo.TradeSha"><br>
            Version:
            <input type="text" name="Version" v-model="paymentInfo.Version"><br>
            <button type="submit" class="btn btn-primary">Payment</button>
        </form> 
    </div>
</template>
<script>
import adminAPI from '../apis/admin/auth';
export default {
    data() {
        return {
            paymentInfo: {}
        }
    },
    async created(){
        try {
            const vm = this;
            const { statusText, data } = await adminAPI.orderPayment(vm.$route.params.orderId);
            if(statusText !== 'OK' || data.status !== 'success'){
                throw new Error(statusText);
            }
            vm.paymentInfo = data.tradeInfo;
        } catch (err) {
            console.log(err);
        }
    }
}
</script>
<style lang="">
    
</style>