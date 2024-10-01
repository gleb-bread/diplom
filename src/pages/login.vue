<script lang="ts" setup></script>

<template>
  <v-container class="pt-16">
    <div class="text-center w-100 d-flex flex-column align-center">
      <h1 class="text-h4 text-center mb-5">{{ $WORDS.REG.TITLELOGIN }}</h1>
      <div class="w-50">
        <outlined-text-field :label="$WORDS.REG.LOGIN"> </outlined-text-field>
        <outlined-text-field :label="$WORDS.REG.PASSWORD">
        </outlined-text-field>
        <div class="d-flex justify-center">
          <div class="w-50 d-flex flex-column align-center">
            <default-btn class="w-100">{{ $WORDS.REG.BTNLOGIN }}</default-btn>
            {{ $WORDS.REG.TITLEOR }}
            <outlined-btn
              @click.stop="$HELPER.RouterAPI.redirect($router, 'REG')"
              class="w-100"
              >{{ $WORDS.REG.BTNREG }}</outlined-btn
            >
          </div>
        </div>
      </div>
    </div>
  </v-container>
</template>
