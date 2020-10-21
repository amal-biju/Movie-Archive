window.addEventListener("load",function(){
    const form = document.querySelector('form');
    form.addEventListener("submit",handleChange)
})

let timeOut;

function handleChange(){
    event.preventDefault()
    clearTimeout(timeOut)
    const input = document.querySelector('input').value;
    
    if(input){
        // console.log(input);
        timeOut = setTimeout(getMovies,500)
    }
}

function getMovies(){
    const input = document.querySelector('input').value;
    
    const xhr = new XMLHttpRequest()

    xhr.open("GET",`http://www.omdbapi.com/?apikey=e49831aa&s=${input}`)
    xhr.send();

    xhr.onload = function(){
        var res = JSON.parse(this.response)
        console.log(res);
        const {Search,totalResults} = res;

        displayMovies(Search,totalResults)
    }
}

function displayMovies(movies,totalNumber){

    const container = document.getElementById('container')
    container.innerHTML = ""

    movies.forEach(movie => {
        const card = document.createElement('div');
        card.setAttribute("class","card")

        const image = document.createElement('img');
        image.src = movie.Poster

        const title = document.createElement('h2');
        title.setAttribute("class","fixed-height")
        title.innerText = movie.Title

        const year = document.createElement('h3');
        year.innerText = movie.Year

        const button = document.createElement('button');
        button.setAttribute("name",movie.imdbID)
        button.innerHTML = "More Info"
        button.addEventListener("click",handelClick)

        card.append(image,title,year,button)
        container.append(card)

    });

}

function handelClick(event){
    console.log(event.target.name);
    location.assign(`movie.html?id=${event.target.name}`)
}