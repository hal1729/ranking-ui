
// This is the main app
export const app = {
    data() {
        return {
            eventCode: '',
            message: '',
            sortedTeamList: [],
        }
    },

    methods: {
        async updateSortedTeamList() {
            let eventCode = this.eventCode
            if (eventCode === '') {
                this.message = 'Please enter an event code'
                return
            }
            this.message = "";

            // Now you have an event code
            // fetch the data from the server

            // sort it

            // and fill this array
            this.sortedTeamList = [
                { name: '3050A', timeAvailable: 28 },
                { name: '3050B', timeAvailable: 25 },
                { name: '3050N', timeAvailable: 4 },
                { name: '3050V', timeAvailable: 2 },
                { name: '3050W', timeAvailable: 1 },
                { name: '3050X', timeAvailable: 1 },
            ]; 
            
        }
    }
}

Vue.createApp(app).mount('#app') 