const App = {
    data() {
        return {
            counter: 0,
            listTitle: "Список задач",
            valueInput: '',
            sendingVal: [],
        }
    },

    methods: {
        getValueInput(event) { 
            this.valueInput = event.target.value;
        },
        sendList() {
            this.sendingVal.push(this.valueInput);
            this.valueInput = '';
        },
        deleteList(index) {
            this.sendingVal.splice(index, 1);
        },
        listenPressKey(event) {
            if (event.key === "Enter") {
                this.sendList();
            }
        }
    }
}

Vue.createApp(App).mount('#app');