<!-- eslint-disable vue/require-v-for-key -->
<!-- eslint-disable prettier/prettier -->
<template>
  <div class="bg-slate-100 flex-1 pt-28 lg:pl-7 pl-4 pr-4 lg:pr-96">
    <div class="flex flex-wrap flex-col gap-6 p-7">
      <div class="flex flex-wrap gap-6 justify-center">
        <div
          v-for="icons in iconNames.icons"
          :id="'item-' + icons.iconName"
          @click="selected(icons.iconName)"
          class="icons-container lg:w-32 w-16 h-16 lg:h-32 rounded-xl bg-white flex flex-col justify-center text-3xl lg:text-4xl items-center text-gray-400 py-6 cursor-pointer hover:shadow-xl border transition-all border-gray-200"
        >
          <div>
            <i :class="'yi yi-' + icons.iconName"></i>
            <div class="hidden p-4 py-7 font-normal">
              <div class="flex flex-row items-center justify-between">
                <div>
                  <h6 class="font-semibold text-sm text-[#3663F2]">Icon name:</h6>
                  <p class="text-xs icon-name text-gray-600" :id="'icon-name-' + icons.iconName">
                    {{ icons.iconName }}
                  </p>
                </div>
                <div>
                  <button
                    type="button"
                    class="text-blue-500 active:text-blue-700 font-semibold text-sm text-center"
                    onclick="CopyToClipboardFontIcon('icon-name-{{this}}')"
                  >
                    <i class="yi yi-copy"></i>
                  </button>
                </div>
              </div>
              <div class="flex flex-row justify-between items-center mt-7">
                <div>
                  <p class="text-sm font-semibold text-[#3663F2]">Icon Selector</p>
                  <code class="font-sans text-xs text-gray-600">
                    <span id="selector-{{this}}">&lt;i class="yi yi-{{ icons.iconName }}"&gt;&lt;/i&gt;</span>
                  </code>
                </div>
                <div>
                  <button
                    type="button"
                    class="text-blue-500 active:text-blue-700 font-semibold text-sm text-center"
                    onclick="CopyToClipboardFontIcon('selector-{{this}}')"
                  >
                    <i class="yi yi-copy"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <SideBar @side-bar="openSidebar" font-icon :open="showSidebar" :selectedIcon="selectedItem" />
</template>
<script setup>
import iconNames from "../../src/icons/font-icons.json";
import SideBar from "../components/SideBar.vue";
import { ref } from "vue";

const selectedItem = ref();
const showSidebar = ref(false);
function openSidebar() {
  showSidebar.value = !showSidebar.value;
}
function selected(item) {
  selectedItem.value = item;
  openSidebar();
}
</script>
