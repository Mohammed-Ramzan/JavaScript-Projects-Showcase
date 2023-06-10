    let collect = document.querySelectorAll(".panel");
    for(let i of collect){
        i.addEventListener("click", function () {
            i.classList.add("active");
            for(let j of collect){
                if( j != i){
                    j.classList.remove("active");
                }
            }
        })
    }
