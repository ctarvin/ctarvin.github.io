import { saveTask, getTasks, onGetTasks, deleteTask } from "./firebase.js"

const taskForm = document.getElementById("task-form")
const tasksContainer = document.getElementById("task-container")

window.addEventListener("DOMContentLoaded", async () => {
    onGetTasks((querySnapshot) => {
        let html = ""

        // This is what is being put into the element we specifiy
        querySnapshot.forEach((doc) => {
            const task = doc.data()
            html += `
        <tr>
          <td>${task.name}</td>
          <td>${task.email}</td>
          <td>${task.date}</td>
          <td>${task.course}</td>
          <td>${task.professor}</td>
          <td id="description">${task.description}</td>
          <td><button class='btn-delete' data-id="${doc.id}">Delete</button></br></td>
      </tr>
      `
        })

        tasksContainer.innerHTML = html

        const btnsDelete = tasksContainer.querySelectorAll(".btn-delete")

        btnsDelete.forEach((btn) => {
            btn.addEventListener("click", ({ target: { dataset } }) => {
                deleteTask(dataset.id)
            })
        })
    })
})

taskForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const name = taskForm["task-name"]
    const email = taskForm["task-email"]
    const date = taskForm["task-date"]
    const course = taskForm["task-course"]
    const professor = taskForm["task-professor"]
    const description = taskForm["task-description"]

    saveTask(name.value, email.value, date.value, course.value, professor.value, description.value)

    taskForm.reset()
})
