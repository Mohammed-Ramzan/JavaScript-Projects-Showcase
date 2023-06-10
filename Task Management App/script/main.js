        let all_data = document.querySelector(".all-screen");
        let home_data =  document.querySelector(".home-screen");
        let all_icons_contents = document.querySelectorAll(".content");
        let backToHome = document.querySelectorAll(".back");
        let add_icon = document.querySelector(".fa-plus");
        let stopwatch = document.querySelector(".stopwatch");
        let stopwatch_container = document.querySelector(".stopwatch-container");
        let icons = document.querySelectorAll(".icon");
        
        document.querySelector(".start-btn").addEventListener("click", function () {
            addHomeData() //this function is displaying block home data.
            document.querySelector(".start-screen").style.display = "none";
            add_task.style.display = "block";
            all_data.style.background = "#fff";
        })

        
        icons.forEach((item, idx) => {
            item.addEventListener('click', () => {
                hideAllContents()
                hideAllItems()
                item.classList.add('active')
                all_icons_contents[idx].classList.add('strt')
            })
        })

        document.querySelector(".see-all").addEventListener("click", function () {
            hideAllContents()
            hideAllItems()
            icons[1].classList.add("active")
            all_icons_contents[1].classList.add("strt")
        })


        document.querySelectorAll(".fa-hourglass-end").forEach((timer)=>{
          timer.addEventListener("click", () => {
              home_data.style.display = "none";
              add_icon.style.display = "none";
              stopwatch.style.display = "block";
          })
        })

        document.querySelector(".fa-stopwatch").addEventListener("click", () => {
          home_data.style.display = "none";
          add_icon.style.display = "none";
          stopwatch.style.display = "none";
          stopwatch_container.style.display = "block";
      })
        function addHomeData(){
            home_data.style.display = "block";
        }

        function hideAllContents() {
            all_icons_contents.forEach(content => content.classList.remove('strt'))
        }

        function hideAllItems() {
            icons.forEach(item => item.classList.remove('active'))
        }

