<template>
  <q-layout>
    <q-page-container>
      <q-page class="flex flex-center q-py-md login-page full-height">
  <div class="row items-center justify-center full-width">
    <div class="col col-xs-12 col-md-4 q-pa-xs">
      <q-form @submit="submitData">
        <q-card bordered class="q-pa-sm">
          <q-card-section class="text-center">
<!--            <q-img-->
<!--              src="~assets/Logo.svg"-->

<!--              :img-style="{'background-size': 'contain'}" style="width: 40%;height: 40%;display: block;margin: 0px auto"-->
<!--            />-->
            <h5 class="text-ap-primary-dark q-my-md">Login</h5>
            <InputField
              lazy-rules
              :rules="formModel.email.rules"
              :label="formModel.email.label"
              v-model="formModel.email.value"
            >
              <template v-slot:prepend>
                <icon-component
                  class="q-ml-sm"
                  :name="formModel.email.icon"
                ></icon-component>
              </template>
            </InputField>
            <InputField
              lazy-rules
              :rules="formModel.password.rules"
              :label="formModel.password.label"
              :type="formModel.password.show ? 'text' : 'password'"
              v-model="formModel.password.value"
            >
              <template v-slot:prepend>
                <icon-component
                  class="q-ml-sm"
                  :name="formModel.password.icon"
                ></icon-component>
              </template>
              <template v-slot:append>
                <q-icon
                  :name="formModel.password.show ? 'visibility_off' : 'visibility'                           "
                  class="cursor-pointer q-mr-xs"
                  @click="formModel.password.show = !formModel.password.show"
                />
              </template>
            </InputField>
<!--            <div class="text-right">-->
<!--              <link-component to="/recovery" class="full-width q-mt-lg q-pt-lg" text="¿ Old Pasword"/>-->
<!--            </div>-->
          </q-card-section>
          <q-card-actions align="center">
            <q-btn class="full-width q-mb-lg"  type="submit" color="ap-primary"
                   label="Login">
              <div class="q-mx-sm" v-if="showLoadingSubmitBtn">
                <q-spinner  color="white" size=".5em"></q-spinner>
              </div>
            </q-btn>
          </q-card-actions>
        </q-card>
      </q-form>
    </div>
  </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>
<script lang="ts">
  import InputField from "../../../../components/inputs/inputField/inputField.vue";
  import {useLogin} from "src/core/composable/useLogin";
  import LoginFormModel from "src/core/modules/external-security/Login/domain/models/LoginFormModel";
  import IconComponent from 'src/core/components/brand/IconComponent.vue';
  import {useMeta} from "app/node_modules/quasar";
  import {notify} from "src/infrastructure/services/VisualNotifyService";
  import {defineComponent} from "app/node_modules/vue";
  export default  defineComponent({
  name: 'loginPage',
  components: {
    InputField,
    IconComponent
  },
    created() {
      //@ts-ignore
      useMeta(this.meta);
    },
  data () {
    const formModel = new LoginFormModel();
    const showLoadingSubmitBtn = false;
    return {
      meta: {
        title: 'Login',
        titleTemplate: (title: string) => `${title}`,
      },
      formModel,
      // Local var
      showLoadingSubmitBtn,
    }
  },
    methods:{
      async submitData() {
        this.showLoadingSubmitBtn = true;
        await useLogin().submitData(this.formModel.email.value, this.formModel.password.value).
          then((resp:any)=>{
            if(resp==401){
              notify({
                content:'User o Password incorrect',
                type:"negative"
              })
            }
            else{
              this.$router.push({name:'WelcomeDashboardPage'})
            }
        }).catch((err:any)=>{
          console.log(err)
        }).finally(()=>{
          this.showLoadingSubmitBtn = false;
        })
      },
    }

})
</script>
<style lang="scss">
  .login-page {
    background-color: $ap-primary-light;
    /*background-image: url("~assets/logo.svg");*/
    background-repeat: no-repeat;
    background-size: contain;
    background-position: right;
  }
</style>
