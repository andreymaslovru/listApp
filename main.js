const App = {
    data() {
        return {
            counter: 0,
            listTitle: "Список задач",
            valueInput: '',
        }
    },

    methods: {
        getValueInput(event) { 
            this.valueInput = event.target.value;
            console.log(event.target.value);
        }
    }
}

Vue.createApp(App).mount('#app');