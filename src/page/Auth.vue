<script setup>

</script>

<template>
  <div class="auth">
    <div class="auth__container">
      <h1 class="auth__title">Sign in</h1>
      <div class="auth__form auth-form">
        <div class="auth-form__field">
          <label for="email" class="auth-form__label">Email</label>
          <input id="email" type="email" class="auth-form__input">
        </div>
        <div class="auth-form__field">
          <label for="password" class="auth-form__label">Password</label>
          <input id="password" type="password" class="auth-form__input">
        </div>
        <button class="auth-form__btn">Sign in</button>
      </div>
    </div>
  </div>
</template>

