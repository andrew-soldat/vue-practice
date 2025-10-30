<script setup>

</script>

<template>
  <nav class="navbar">
    <div class="navbar__container">
      <div class="navbar__name">
        LOGO
      </div>
      <ul class="navbar__list navbar-list">
        <li class="navbar-list__item">
          <router-link to="/" class="navbar-list__link">
            Home
          </router-link>
        </li>
        <li class="navbar-list__item">
          <router-link to="/about" class="navbar-list__link">
            About
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
