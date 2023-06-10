let add_task = document.querySelector(".add");
let add_task_cont = document.querySelector(".add-content");
let progress = document.querySelector(".progress")

add_icon.addEventListener("click", function () {
    home_data.style.display = "none";
    add_task_cont.style.display = "block";
    add_icon.style.display = "none";
})

backToHome.forEach((back) => {
    back.addEventListener("click", function () {
    addHomeData()
    add_task_cont.style.display = "none";
    add_icon.style.display = "block";
    stopwatch.style.display = "none";
})
})

function removeActiveCategory() {
    document.querySelectorAll(".category-name").forEach(category => category.classList.remove('active'))
}

document.querySelectorAll(".category-name").forEach((category) => {
    
    category.addEventListener("click", function(){
      removeActiveCategory()
      this.classList.add("active")
    })
  })

let list_colors = ["#DAF5FF", "#FDF7C3", "#FFD6EC", "#E1FFB1", "#FAD4D4", "#C3F8FF", "#F3E0B5", "#FEFAE0", "#F8EAD8", "#DEF5E5", "#F8FFDB", "#DAF5FF", "#FDF7C3", "#FFD6EC", "#E1FFB1", "#FAD4D4", "#C3F8FF", "#F3E0B5", "#FEFAE0", "#F8EAD8", "#DEF5E5", "#F8FFDB"]
let start_colors = 0;

const calendarElement = document.getElementById('calendar');
function updateCalendar() {
    const now = new Date();
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const dayOfWeek = daysOfWeek[now.getDay()];
    const month = monthsOfYear[now.getMonth()];
    const date = now.getDate();
    calendarElement.innerHTML = `
    <div>${date} ${month}, ${dayOfWeek}</div>
  `;

    requestAnimationFrame(updateCalendar);
}
updateCalendar();

let taskDetail = document.querySelectorAll(".task-detail");
let allTask = taskDetail.querySelectorAll(".task");
let check = document.querySelectorAll(".fa-check");

if (localStorage.getItem("task-data")) {
    taskDetail.forEach((both)=>{
      both.innerHTML = localStorage.getItem("task-data");
    })
}
alert(allTask[0].innerHTML)
// function updateLocalStorage(){
//   taskDetail.forEach((both)=>{
//   both.innerHTML = localStorage.getItem("task-data");
//   })
// }

// updateProgress()
// checkTasks.forEach((check)=>{
//     check.addEventListener("click", function() {
//       alert("hay")
        // allTask[index].classList.toggle("checked");
        // updateProgress();
        // updateLocalStorage();
// })
// })
// function updateProgress() {
//     const completedTasks = document.querySelectorAll(".checked");
//     const progressValue = (completedTasks.length / checkTasks.length) * 100;
//     progress.value = progressValue;
//     document.querySelector(".progress-percent").innerText = progressValue;
//   }

//Function to update task data in both sections
// function updateTaskData() {
//     var homeTasksContainer = document.getElementById("home-tasks");
//     var allTasksContainer = document.getElementById("all-tasks");
  
//     // Update home section task data
//     localStorage.setItem("home-tasks-data", homeTasksContainer.innerHTML);
  
//     // Update all tasks section task data
//     localStorage.setItem("all-tasks-data", allTasksContainer.innerHTML);
//   }
   // Get the user input for task name and time
   
   function addTask() {
    // ... (existing code)
    var taskName = document.querySelector(".taskName").value;
    var taskTime = document.getElementById("start-time").value;
    var taskEnd = document.getElementById("end-time").value;
    var descrip = document.querySelector("#textarea").value;
    if (taskName === "" || taskTime === "" || taskEnd === "" || descrip === "") {
      alert("Please fill in all inputs");
      return false;
    }
  
    // Convert the time to a localized string in 12-hour format
    var taskDate = new Date("2000-01-01T" + taskTime + ":00");
    var taskEndDate = new Date("2000-01-01T" + taskEnd + ":00");
    var startTime = taskDate.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
    var endTime = taskEndDate.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
  
    // Create a new task element and populate it with the user input
    var taskElement = document.createElement("div");
    taskElement.className = "task list-task";
    taskElement.innerHTML = `<p class='task-name'>${taskName}</p><p class='task-time'>${startTime} - ${endTime}</p><i class="fas fa-check"></i> <i class="fas fa-trash"></i>`;
    taskDetail.forEach((both)=>{
      both.appendChild(taskElement);
    localStorage.setItem("task-data", both.innerHTML);
    both.innerHTML = localStorage.getItem("task-data");
    document.querySelector("#textarea").value = "";
    })
  }  
  
// document.querySelectorAll(".task").forEach((clickTask)=>{
//     clickTask.addEventListener("click", function(){
        // home_data.style.display = "none";
        // add_icon.style.display = "none";
        // let checking = document.querySelector(".task-full-data");
        // checking.style.display = "block"
        // checking.innerHTML = this.innerHTML;
//       alert(this.innerHTML)
                
//     })
// })

// function clrs_add() {
//     list_colors.forEach((clrs, index) => {
//         if (list_task[index] && start_colors < list_colors.length) {
//             list_task[index].style.backgroundColor = clrs;
//             console.log(clrs)
//         }

//     })
// }
// clrs_add()


