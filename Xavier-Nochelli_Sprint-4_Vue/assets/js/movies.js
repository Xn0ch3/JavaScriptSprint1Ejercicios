const url = 'https://moviestack.onrender.com/api/movies'
const apiKey = '0ff70d54-dc0b-4262-9c3d-776cb0f34dbd'
const optionsKey = {
    headers: {
        'x-api-key': apiKey
    }
}
console.log("hola")

const { createApp } = Vue

const optionsVue = {
    data() {
        return {
            movies: [],
            moviesFiltradas: [],
            genres: [],
            search: "",
            select: "all",
            favoritos:[]
        }
    },
    beforeCreate() {
        console.log("antes")
        fetch(url, optionsKey)
            .then(res => res.json())
            .then(data => {
                this.movies = data.movies
                this.moviesFiltradas = this.movies
                this.genres = [...new Set(data.movies.flatMap(movies => movies.genres))].sort()
                this.favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
                console.log(this.genres)
                console.log(this.movies)
            })
            .catch(error => console.log(error))

    },
    methods: {
        filtrarPorGenre(event) {
            this.select = event.target.value
            console.log(this.select)
            this.filtrarGeneroPorNombre()
        },
        filtrarPorTitle(event) {
            this.search = event.target.value
            console.log(this.search)
            this.filtrarGeneroPorNombre()
        },
        filtrarGeneroPorNombre() {
            // Filtrar por género y nombre
            const aux = this.movies.filter(movie => movie.title.toLowerCase().includes(this.search.toLowerCase()) && (this.select == 'all' || movie.genres.includes(this.select))
            );
            this.moviesFiltradas = aux;
            console.log(this.moviesFiltradas)
        },

        moviesFav(id) {
            const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
            console.log(favoritos)
            if (!favoritos.includes(id)) {
                this.favoritos.push(id)
                localStorage.setItem('favoritos', JSON.stringify(this.favoritos))
            }
            else {
                this.favoritos = this.favoritos.filter(movie => movie !== id)
                localStorage.setItem('favoritos', JSON.stringify(this.favoritos))
            }
        },
    }
}

console.log("final")

const app = createApp(optionsVue);
app.mount("#app")