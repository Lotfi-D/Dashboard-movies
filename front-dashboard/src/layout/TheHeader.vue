<template>
  <header class="bg-black p-4 w-full z-10">
    <div class="container flex items-center">
      <router-link to="/">
        <img
          src="../../public/static/logo.png"
          alt="Netflix Logo"
          class="h-12"
        />
      </router-link>
      <nav class="ml-5 space-x-4 text-lg">
        <router-link to="/list" class="text-white">List</router-link>
        <router-link to="/favorites" class="text-white">Favorites</router-link>
      </nav>
    </div>
  </header>
</template>
