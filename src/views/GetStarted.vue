<template>
  <div class="flex-1 w-full flex justify-center items-center h-full flex-col gap-7">
    <img class="sm:w-72 w-52" src="../assets/logo/yartu-logo-shape.png" alt="yartu-logo" />
    <h1 class="sm:text-5xl text-3xl font-normal text-[#2c3e50]">Yartu Icon Kit</h1>
    <p class="sm:text-2xl text-lg text-[#6a8bad]">Powered by YARTU</p>
    <div class="flex sm:gap-4 gap-2">
      <router-link :to="{ name: 'Font Icons' }">
        <span
          class="flex justify-center items-center sm:w-40 w-32 text-base font-medium rounded text-white sm:py-3 py-2 bg-BLUE border border-BLUE hover:bg-white hover:text-BLUE transition-all"
        >
          Font Icons
        </span>
      </router-link>
      <router-link :to="{ name: 'Colored Icons' }">
        <span
          class="flex justify-center items-center sm:w-40 w-32 text-base font-medium rounded text-white sm:py-3 py-2 bg-BLUE border border-BLUE hover:bg-white hover:text-BLUE transition-all"
        >
          Colored Icons
        </span>
      </router-link>
      <br />
    </div>
    <div class="flex flex-wrap flex-col gap-2 text-center underline text-BLUE">
      <a href="/public/yartu-icons.zip" download>Download Icons</a>
      <a href="/public/yartu-colored-icons.zip" download>Download Colored Icons</a>
    </div>
    <hr />
    <div class="w-1/2 h-[1px] block bg-slate-200"></div>
    <div class="flex flex-col">
      <p class="text-sm text-[#6a8bad]">
        Huge Thanks to
        <br />
        <br /><a href="https://github.com/umutkenar" class="hover:text-BLUE underline">Umut KENAR</a> <br /><a
          href="https://github.com/azizs4h"
          class="hover:text-BLUE underline"
          >Ömer Aziz ŞAHİN</a
        >
      </p>
      <br />
      <p class="text-sm text-[#6a8bad]">Copyright 2017 - {{ new Date().getFullYear() }} YARTU</p>
    </div>
  </div>
</template>
