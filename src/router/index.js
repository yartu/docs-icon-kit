import { createRouter } from 'vue-router';
import BaseLayout from '@/components/Layouts/BaseLayout.vue';
import FontIcons from '@/views/FontIcons.vue';
import ColoredIcons from '@/views/ColoredIcons.vue';
import GetStarted from '@/views/GetStarted.vue';

const router = createRouter({
  history: false,
  routes: [
    {
      path: '/',
      component: BaseLayout,
      children: [
        { path: '', name: 'Get Started', component: GetStarted },
        { path: '/font-icons', name: 'Font Icons', component: FontIcons },
        { path: '/colored-icons', name: 'Colored Icons', component: ColoredIcons }
      ]
    }
  ]
});

export default router;
