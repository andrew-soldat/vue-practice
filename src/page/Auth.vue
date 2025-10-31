<script>
  import { useAuth } from "@/hooks/login-form.js";

  export default {
    setup() {
      return {
        ...useAuth()
      }
    }
  }
</script>

<template>
  <div class="auth">
    <div class="auth__container">
      <h1 class="auth__title">Sign in</h1>
      <form class="auth__form auth-form" @submit.prevent="onSubmit">
        <div class="auth-form__field" :class="{'auth-form__field--error': emailError}">
          <label for="email" class="auth-form__label">Email</label>
          <input id="email" type="email" class="auth-form__input" v-model="email" @blur="emailBlur">
          <div class="auth-form__error" v-if="emailError">{{ emailError }}</div>
        </div>
        <div class="auth-form__field">
          <label for="password" class="auth-form__label">Password</label>
          <input id="password" type="password" class="auth-form__input" v-model="password" @blur="passwordBlur">
          <div class="auth-form__error" v-if="passwordError">{{ passwordError }}</div>
        </div>
        <button class="auth-form__btn" :disabled="isSubmitting">Sign in</button>
        <div v-if="isTooManyAttempts" class="auth-form__attempts">
          You are trying to log in too often. Please try again later.
        </div>
      </form>
    </div>
  </div>
</template>

