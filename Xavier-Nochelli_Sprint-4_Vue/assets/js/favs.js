const url = 'https://moviestack.onrender.com/api/movies'
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
            allMovies: [],
            favoritos: [],
            favoritosFiltrados: [],
        };
    },
    beforeCreate() {
        fetch(url, optionsKey)
            .then((response) => response.json())
            .then((data) => {
                this.movies = data.movies
                this.favoritos = JSON.parse(localStorage.getItem('favoritos')) || []
                console.log(this.favoritos)
                this.favoritosFiltrados = this.movies.filter(movie => this.favoritos.some(movies => movies === movie.id))
                console.log(this.favoritosFiltrados)
            })
            .catch((err) => console.log('Error al traer los datos de la API', err));
    },
    methods:{
        moviesFav(id) {
            let nuevosFavoritos = [...this.favoritos];
    
            if (!nuevosFavoritos.includes(id)) {
                nuevosFavoritos.push(id);
            } else {
                nuevosFavoritos = nuevosFavoritos.filter(movie => movie !== id);
                this.favoritosFiltrados = this.favoritosFiltrados.filter(movie => movie.id !== id);
            }
    
            this.favoritos = [...nuevosFavoritos];
    
            localStorage.setItem('favoritos', JSON.stringify(nuevosFavoritos));
        },
    }

}

const app = createApp(optionsVue);
app.mount('#app');
