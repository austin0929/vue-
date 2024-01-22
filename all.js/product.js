const { createApp } = Vue

createApp({
    data() {
      return {
        products: [],
        temp: {}
      }
    },
    methods: {
      getProducts () {
        const productApi = `https://ec-course-api.hexschool.io/v2/api/david0929/admin/products/all`
        axios.get(productApi).then((res) => {
            this.products = res.data.products
            console.log(res)
        })
    },
    },
    mounted() {
        const api = `https://ec-course-api.hexschool.io/v2/api/user/check`
        const myCookie = document.cookie.replace(
            /(?:(?:^|.*;\s*)vuetoken\s*\=\s*([^;]*).*$)|^.*$/,"$1",);
        axios.defaults.headers.common.Authorization = myCookie
        if (!myCookie) {
            window.location.href = 'http://127.0.0.1:5500/index.html';
        }
        console.log(myCookie);
        axios.post(api, {}).then((res) => {
            headers: {
                Authorization: myCookie
            }
        }),
            this.getProducts()
    }
}).mount('#app')