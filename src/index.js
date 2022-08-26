document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector("#create-task-form")
  form.addEventListener("submit",(e) =>{
    e.preventDefault();
    buildList(e.target.new_task_description.value);
    form.reset()
  })

});

function buildList(todo){
  // console.log(todo);
  let task = document.createElement("li")
  let btn = document.createElement("button");
  btn.addEventListener("click", deleteTask)
  btn.textContent = "x"
  task.textContent = `${todo} `
  task.appendChild(btn);
  // console.log(task)
  document.querySelector("#tasks").appendChild(task)

}
function deleteTask(e){
  e.target.parentNode.remove()
}