<template>
  <div id="header" class="fixed z-10 bg-white top-0 self-start w-full py-4 px-7 border border-gray-200">
    <div class="flex sm:flex-row flex-col items-center sm:justify-start justify-center gap-2 w-full">
      <RouterLink to="/">
        <div class="flex justify-center items-center gap-4">
          <img class="h-7" src="/src/assets/logo/yartu-logo-horizontal.svg" alt="logo" />
          <p class="text-xl text-[#2c3e50] font-semibold">Yartu Icon Kit</p>
        </div>
      </RouterLink>
      <div class="sm:px-7 text-center flex w-3/5">
        <div class="relative inline-block w-full">
          <div class="absolute top-0 bottom-0 my-auto h-14 w-14 flex items-center justify-center text-gray-400">
            <i class="yi yi-search"></i>
          </div>
          <input
            class="w-full h-10 rounded-full pl-14 focus:border-blue-500 active:border-blue-500 border"
            type="text"
            id="search"
            v-model="filter"
            v-on:keyup="search()"
            placeholder="Search in icons..."
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const filter = ref("");

// onMounted(() => {
//   console.log(filter.value)
//   // filter.value = input.value.toUpperCase(); // <div>
//   console.log(filter.value)
// });

function search() {
  // Declare variables
  let i,
    flag = false;
  let iconsContainer = document.getElementsByClassName("icons-container");
  let icons = document.getElementsByClassName("icon-name");
  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < iconsContainer.length; i++) {
    let iconText = icons[i].innerText;
    if (iconText.indexOf(filter.value) > -1) {
      iconsContainer[i].style.display = "";
    } else {
      iconsContainer[i].style.display = "none";
    }
  }

  for (i = 0; i < iconsContainer.length; i++) {
    if (iconsContainer[i].style.display != "none") {
      flag = true;
    }
  }
  if (!flag) {
    // console.log(icons);
  }
}
</script>
