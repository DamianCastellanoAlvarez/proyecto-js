document.addEventListener("keyup", i=>{

    if (i.target.matches("#buscador")){

        if (i.key ==="Escape")i.target.value = ""

        document.querySelectorAll(".pelicula").forEach(results =>{

            results.textContent.toLowerCase().includes(i.target.value.toLowerCase())
            ?results.classList.remove("filtro")
            :results.classList.add("filtro")
        })

    }


})











