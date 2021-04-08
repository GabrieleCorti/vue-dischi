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
                response.data.response.sort(function (a, b) {
                    var keyA = a.year;
                        keyB = b.year;
                    if (keyA < keyB) return -1;
                    if (keyA > keyB) return 1;
                    return 0;
                });
                Self.albums = response.data.response;
                response.data.response.forEach(element => {
                    if (!Self.genres.includes(element.genre)) {
                        Self.genres.push(element.genre);
                    }
                });
            });
    },

})