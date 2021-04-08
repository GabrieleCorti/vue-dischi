const App = new Vue({
    el: "#app",
    data: {
        albums: [],
        genres: [],
        selectedGenre: "All"
    },
    mounted: function(){
        const Self = this;

        axios.get("https://flynn.boolean.careers/exercises/api/array/music")
            .then(function(response){
                Self.albums = response.data.response;
                response.data.response.forEach(element => {
                    if (!Self.genres.includes(element.genre)) {
                        Self.genres.push(element.genre);
                    }
                });
            });
    },

})