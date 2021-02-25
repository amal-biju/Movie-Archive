window.addEventListener("load", () => {
   let query = window.location.search;
   loadQuery(query);
});

function loadQuery(query) {
   let url = new URLSearchParams(query);
   let imdbID = url.get("id");
   // document.body.append(imdbID)
   getMovieDetails(imdbID);
}

function getMovieDetails(input) {
   const xhr = new XMLHttpRequest();

   xhr.open("GET", `https://www.omdbapi.com/?apikey=e49831aa&i=${input}`);
   xhr.send();

   xhr.onload = function () {
      var res = JSON.parse(this.response);
      displayMovieDetails(res);
   };
}

function displayMovieDetails(movie) {
   const container = document.getElementById("container");
   container.innerHTML = `
        <div id="imageWrapper">
            <img src="${movie.Poster}"/>
        </div>
        <div id="detailsWrapper">
            <h1>${movie.Title}</h1>
            <div class="flex">
                <div class="flex">
                    <img src="images/imdb.png" alt="" height="30px"><h2>${movie.Ratings[0].Value}</h2>
                </div>
                <div class="flex">
                    <img src="images/rotten-tomatoes.png" alt="" height="30px"><h2>${movie.Ratings[1].Value}</h2>
                </div>
                <div class="flex">
                    <img src="images/metascore.png" alt="" height="30px"><h2>${movie.Ratings[2].Value}</h2>
                </div>
            
            </div>
            <div class="flex">
                <h2><span>Genre : </span>${movie.Genre}</h2>
                <h2><span>Director : </span>${movie.Director}</h2>
                <h2><span>Rated : </span>${movie.Rated}</h2>
            </div>
            <div class="flex">
                <h2><span>Runtime : </span>${movie.Runtime}</h2>
                <h2><span>Released in : </span>${movie.Released}</h2>
                <h2><span>Type : </span>${movie.Type}</h2>
            </div>
            <div class="flex">
                <h2><span>Language : </span>${movie.Language}</h2>
                <h2><span>Production : </span>${movie.Production}</h2>
                <h2><span>Country : </span>${movie.Country}</h2>
            </div>
            <div>
                <h2><span>Writer : </span>${movie.Writer}</h2>
            </div>
            <div>
                <h2><span>Actors : </span>${movie.Actors}</h2>
            </div>
            <div>
                <h2><span>Plot : </span>${movie.Plot}</h2>
            </div>
            <div class="flex">
                <h2><span>Awards : </span>${movie.Awards}</h2>
                <h2><span>DVD : </span>${movie.DVD}</h2>
                <h2><span>Box-Office : </span>${movie.BoxOffice}</h2>
            </div>
            <section class="flex">
                <a href ="https://www.imdb.com/title/${movie.imdbID}/" target="_blank"><button>View IMDb</button></a>
                <a href="index.html"><button>Back To Search</button></a>
            </section>
        </div>`;
}
