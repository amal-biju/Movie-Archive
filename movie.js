window.addEventListener("load", () => {
    let query = window.location.search;
    loadQuery( query )
})


function loadQuery( query ){
    let url = new URLSearchParams( query )
    let imdbID = url.get("id")
    // document.body.append(imdbID)
    getMovieDetails(imdbID)
}

function getMovieDetails(input){
    const xhr = new XMLHttpRequest()

    xhr.open("GET",`http://www.omdbapi.com/?apikey=e49831aa&i=${input}`)
    xhr.send();

    xhr.onload = function(){
        var res = JSON.parse(this.response)
        console.log(res);
        // const {Search,totalResults} = res;

        // displayMovies(Search,totalResults)
    }
}