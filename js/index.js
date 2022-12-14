const filmList = document.getElementById('films')
const tittleInfo = document.getElementById('select')
const allMovies = 'http://localhost:3000/films'
const list = document.querySelector('.list')

document.addEventListener('DOMContentLoaded', () => {
     
        const renderFilms = (films) => {
            const card = document.createElement("div")
            card.classList.add('lists')
            const tag = document.createElement('a')
            tag.classList.add('tags')
    
            card.appendChild(tag)
            tag.innerText = films.title
            tag.addEventListener("click", (e) => {
               
                e.preventDefault()
                display(films)
            })

        document.querySelector('#menu').appendChild(card)
    }

    function display(films) {

        const card2 = document.getElementById("movieOne")
        const numaticket = remaining(films)
        card2.innerHTML = `
        <h2>movie</h2>
   <div class="card d-flex"><img clas
    src ="${films.poster}"/></div>
   
   <p>Title : ${films.title}</p>
   <p>Show time : ${films.showtime}</p>
   <p>Capacity : ${films.capacity}</p>
   <p>Tickets available : ${numaticket}</p>
   <p>Tickets sold : ${films.tickets_sold}</p>
   <p>Runtime : ${films.runtime}</p>
   <p>Description : ${films.description}</p>
   <button id="btn">Purchase tickets</button>
   `
   document.getElementById('btn').addEventListener ('click',()=>{
     let c = capacity
     let t = tickets_sold
     if (c===t){
        alert ('out of tickets')
     }
     else {
       t++
       films.tickets_sold.innerHTML =`Tickets sold ${t}` 
     }
   })
    }
    const remaining = (films) => {
        const remain = films.capacity - films.tickets_sold
        return remain
            
   }
    
    const getFilms= () => {
        fetch(allMovies)
            .then((res) => res.json())
            .then(data => {
                data.forEach(films => {
                    renderFilms(films)
                })
            })
    }
    getFilms()

})