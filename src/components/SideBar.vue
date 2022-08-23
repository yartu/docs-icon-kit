<template>
  <div
    :class="showSidebar ? 'hidden' : 'lg:hidden block'"
    @click="openSidebar"
    class="w-screen h-screen bg-slate-400 bg-opacity-50 fixed top-0 left-0 z-10"
  ></div>
  <div
    :class="showSidebar ? 'hidden lg:flex' : 'flex lg:flex'"
    class="w-72 lg:w-96 fixed z-20 flex-col border-t-0 flex flex-wrap right-0 top-0 bottom-0 max-w-sm h-full border border-gray-200 bg-white p-7 pt-11 lg:pt-7"
  >
    <div @click="openSidebar" class="flex absolute w-7 h-7 lg:hidden items-center justify-center top-3 left-3 text-2xl">
      <i class="yi yi-close"></i>
    </div>
    <div class="w-full lg:h-80 h-60 bg-slate-100 border-slate-200 border rounded-2xl flex items-center justify-center">
      <div
        id="selected"
        class="lg:w-60 lg:h-60 h-40 w-40 flex items-center justify-center !text-[156px] lg:!text-[256px] text-[#9aa1b4] rounded-2xl"
      >
        <i v-if="fontIcon && selectedIcon != ''" :class="'yi yi-' + selectedIcon" :style="{ color: selectedColor }"></i>
        <i v-if="!fontIcon && selectedIcon != ''" :class="'ci-' + selectedIcon"></i>
        <img v-if="selectedIcon == ''" class="h-10" src="/src/assets/logo/yartu-logo-horizontal.svg" alt="logo" />
      </div>
    </div>
    <div v-if="fontIcon" class="mt-6 mb-2 p-4 font-semibold border rounded-2xl flex justify-between items-center">
      <span class="text-sm font-semibold text-[#3663F2]"> Select Color </span>
      <input id="color-picker" v-model="selectedColor" class="rounded" type="color" />
    </div>
    <div id="metadata" class="mt-2 font-semibold min-h-[122px] border rounded-2xl">
      <div v-if="selectedIcon == ''" class="p-4 py-7 font-normal">
        <div class="flex flex-row items-center justify-between">
          <div class="bg-slate-100 h-10 w-full rounded-2xl"></div>
        </div>
        <div class="flex flex-row justify-between items-center mt-7">
          <div class="bg-slate-100 h-10 w-full rounded-2xl"></div>
        </div>
      </div>
      <div v-if="selectedIcon != ''" class="p-4 py-7 font-normal">
        <div class="flex flex-row items-center justify-between">
          <div>
            <h6 class="font-semibold text-sm text-[#3663F2]">Icon name:</h6>
            <p ref="iconName" class="text-xs icon-name text-gray-600" :id="'icon-name-' + selectedIcon">
              {{ selectedIcon }}
            </p>
          </div>
          <div>
            <button
              type="button"
              class="text-blue-500 active:text-blue-700 font-semibold text-sm text-center"
              @click="copyComponentToClipboard('iconName')"
            >
              <i class="yi yi-copy"></i>
            </button>
          </div>
        </div>
        <div class="flex flex-row justify-between items-center mt-7">
          <div>
            <p class="text-sm font-semibold text-[#3663F2]">Icon Selector</p>
            <code class="font-sans text-xs text-gray-600">
              <span ref="iconSelector" id="selector-{{selectedIcon}}"
                >&lt;i class="{{ fontIcon ? "yi yi-" + selectedIcon + '"' : "ci-" + selectedIcon + '"'
                }}{{ selectedColor == "#9aa1b4" ? "" : ' style="color:' + selectedColor + '"' }}&gt;&lt;/i&gt;</span
              >
            </code>
          </div>
          <div>
            <button
              type="button"
              class="text-blue-500 active:text-blue-700 font-semibold text-sm text-center"
              @click="copyComponentToClipboard('iconSelector')"
            >
              <i class="yi yi-copy"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-auto text-right">
      <router-link v-if="fontIcon" to="/colored-icons"
        ><span
          class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800"
          >Switch To Colored Icons</span
        ></router-link
      >
      <router-link v-if="!fontIcon" to="/font-icons"
        ><span
          class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800"
          >Switch To Font Icons</span
        ></router-link
      >
    </div>
  </div>
  <div id="snackbar" :class="snackbar ? '!visible' : '!invisible'" class="transition-all">Copied</div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useClipboard } from "@vueuse/core";

const iconName = ref(null);
const iconSelector = ref(null);
const source = ref(null);
const snackbar = ref(false);
const showSidebar = ref(true);
const selectedColor = ref("#9aa1b4");

// eslint-disable-next-line no-unused-vars
const { text, copy, copied, isSupported } = useClipboard({ source });

const props = defineProps({
  fontIcon: {
    type: Boolean,
    default: false,
  },
  selectedIcon: {
    type: String,
    default: "",
  },
  open: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["sideBar"]);

function openSidebar() {
  emit("sideBar", true);
}

function copyComponentToClipboard(selected) {
  if (selected == "iconName") {
    source.value = iconName.value.innerText;
  } else {
    source.value = iconSelector.value.innerText;
  }
  snackbar.value = true;
  setTimeout(() => {
    snackbar.value = false;
  }, 1200);
  copy();
}

watch(
  () => props.open,
  // eslint-disable-next-line no-unused-vars
  (newVal, oldVal) => {
    showSidebar.value = !newVal;
  },
);

// watch(props.open, () => {
//   if (props.open.value == true) {
//     console.log(props.open);
//     showSidebar.value = true;
//   } else showSidebar.value = false;
// })
// showSidebar.value = props.open.value;
</script>
