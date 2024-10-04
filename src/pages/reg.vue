<script lang="ts" setup>
import { computed, ref } from 'vue';
import { useUserStore } from '@/app/stores/user';
import passwordField from '@/widgets/fields/outlined/passwordField.vue';
import textField from '@/widgets/fields/outlined/textField.vue';
import { Helper } from '@/shared/helpers';

const userStore = useUserStore();

const user = computed(() => userStore.getNewUser);

const handlerRegistration = async function(){
  if(form.value) {
    const result = await form.value.validate();
    if(result.valid) userStore.addUser();
  }
}

const login = computed({
  get(){
    return user.value.login;
  },
  set(value: string){
    user.value.login = value;
  }
});

const password = computed({
  get(){
    return user.value.password;
  },
  set(value: string){
    user.value.password = value;
  }
});

const email = computed({
  get(){
    return user.value.email;
  },
  set(value: string){
    user.value.email = value;
  }
});

const repeatPassword = ref<string>('');

const passwordEqualRule = computed(() => {
  const currectPassword = password.value;
  return Helper.RulesAPI.ruleEqualPasswords(currectPassword);
});

const form = ref<HTMLFormElement | null>(null);

</script>

<template>
  <v-container class="pt-16">
    <div class="text-center w-100 d-flex flex-column align-center">
      <h1 class="text-center mb-5" :class="{'text-h4': !$vuetify.display.xs, 'text-h5': $vuetify.display.xs} ">{{ $WORDS.REG.TITLEREG }}</h1>
      <div :class="{
        'w-100': $vuetify.display.sm || $vuetify.display.xs,
        'w-50': !($vuetify.display.sm || $vuetify.display.xs),
      }">
        <v-form @submit.prevent ref="form">
          <div class="mb-2">
            <text-field 
              :label="$WORDS.REG.LOGIN" 
              v-model="login" 
              :rules="$HELPER.RulesAPI.ruleRequired()" 
              :prepend-icon="'mdi-account-outline'">
            </text-field>

            <text-field 
              :label="$WORDS.REG.EMIAL" 
              v-model="email" 
              :rules="$HELPER.RulesAPI.combineRules($HELPER.RulesAPI.ruleRequired(), $HELPER.RulesAPI.ruleEmail())" 
              :prepend-icon="'mdi-email-outline'">
            </text-field>

            <password-field 
              :label="$WORDS.REG.PASSWORD" 
              :rules="$HELPER.RulesAPI.combineRules($HELPER.RulesAPI.ruleRequired(), $HELPER.RulesAPI.ruleMinLength(8))" 
              v-model="password">
            </password-field>

            <password-field 
              :label="$WORDS.REG.PASSWORDAGAIN" 
              :rules="$HELPER.RulesAPI.combineRules($HELPER.RulesAPI.ruleRequired(), passwordEqualRule)" 
              v-model="repeatPassword">
            </password-field>
          </div>
          <div class="d-flex justify-center">
            <div class="w-50 d-flex flex-column align-center">
              <default-btn class="w-100" @click.stop="handlerRegistration()">
                {{ $WORDS.REG.BTNREG }}
              </default-btn>
              {{ $WORDS.REG.TITLEOR }}
              <outlined-btn
                @click.stop="$HELPER.RouterAPI.redirect($router, 'LOGIN')"
                class="w-100">
                {{ $WORDS.REG.BTNLOGIN }}
                </outlined-btn>
            </div>
          </div>
        </v-form>
      </div>
    </div>
  </v-container>
</template>
