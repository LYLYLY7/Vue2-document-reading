
const app = new Vue({
    el: '#app',
    data: {
        message: "你好"
    }
});

const app2 = new Vue({
    el: "#app-2",
    data: {
        message: "页面加载于" + new Date().toLocaleString()
    }
});

const app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    }
});

const app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
            {text: '学习Javascript'},
            {text: '学习Vue'},
            {text: '整个项目'},
        ]
    }
});

const app5 = new Vue({
    el: '#app-5',
    data: {
        message: 'Hello Vue.js'
    },
    methods: {
        reverseMessage() {
            this.message = this.message.split('').reverse().join('')
        }
    }
});

const app6 = new Vue({
    el: '#app-6',
    data: {
        message: 'Hello Vue!'
    }
});

Vue.component('todo-item', {
    props: ['todo'], // props的名字为todo
    template: `<li>{{ todo.text }}</li>`
})

const app7 = new Vue({
    el: '#app-7',
    data: {
        List: [
            {id: 0, text: '蔬菜'},
            {id: 1, text: '奶酪'},
            {id: 2, text: '随便其它什么人吃的东西'}
        ]
    }
});