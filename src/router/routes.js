
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Chat.vue') },
      { path: '/images-generation', component: () => import('src/pages/ImageGeneration.vue') },
      { path: '/images-variation', component: () => import('src/pages/ImageVariation.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
