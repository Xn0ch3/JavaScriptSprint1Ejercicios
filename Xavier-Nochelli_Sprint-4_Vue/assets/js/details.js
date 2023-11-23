const url = 'https://moviestack.onrender.com/api/movies/'
const apiKey = '0ff70d54-dc0b-4262-9c3d-776cb0f34dbd'
const optionsKey = {
    headers: {
        'x-api-key': apiKey
    }
}



const { createApp } = Vue


const optionsVue = {
    data() {
        return {
            movie: [],
            id: null,
        }
    },
    beforeCreate() {

        const search = location.search;
        const params = new URLSearchParams(search);
        this.id = params.get("id");

        fetch(url + this.id, optionsKey)
            .then(res => res.json())
            .then(data => {

                this.movie = data;
                console.log(this.movie);
            })
            .catch(error => console.log(error));
    },
}
console.log()
console.log("finalDetails")

const app = createApp(optionsVue);

app.mount("#app")