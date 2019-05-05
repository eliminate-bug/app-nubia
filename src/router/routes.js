import Footer from '@/components/myFooter'
const Home = () => import('@/views/home')
const Cate = () => import('@/views/cate')
const Cart = () => import('@/views/cart')
const Mine = () => import('@/views/mine')

export default [
  {
    path: '/',
    redirect: '/home',
    meta: {
      istabitem: false
    }
  },
  {
    path: '/home',
    name: 'home',
    components: {
      default: Home,
      'my-footer': Footer
    },
    meta: {
      istabitem: true,
      title: '首页',
      icon: '&#xe663;'
    }
  },
  {
    path: '/cate',
    name: 'cate',
    components: {
      default: Cate,
      'my-footer': Footer
    },
    meta: {
      istabitem: true,
      title: '分类',
      icon: '&#xe660;'
    }
  },
  {
    path: '/cart',
    name: 'cart',
    components: {
      default: Cart,
      'my-footer': Footer
    },
    meta: {
      istabitem: true,
      title: '购物车',
      icon: '&#xe656;'
    }
  },
  {
    path: '/mine',
    name: 'mine',
    components: {
      default: Mine,
      'my-footer': Footer
    },
    meta: {
      istabitem: true,
      title: '我的',
      icon: '&#xe64e;'
    }
  }
]
