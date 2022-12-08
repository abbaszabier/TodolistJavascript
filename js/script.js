const todoInput = document.getElementById("input");
const btnSave = document.getElementById("btn-save");
btnSave.addEventListener("click", function () {
  if (todoInput.value == "") {
    swal("Failed!", "Kamu belum mengetikan sesuatu", "error");
  } else if (todoInput.value != "") {
    let localItems = JSON.parse(localStorage.getItem("localItem"));
    if (localItems === null) {
      taskList = [];
    } else {
      taskList = localItems;
    }
    taskList.push(todoInput.value);
    localStorage.setItem("localItem", JSON.stringify(taskList));
  }
  showList();
});

function showList() {
  let output = "";
  let talkListShow = document.querySelector(".tc");
  let localItems = JSON.parse(localStorage.getItem("localItem"));
  if (localItems === null) {
    taskList = [];
  } else {
    taskList = localItems;
  }
  taskList.forEach((data, index) => {
    output += `<div class="todo card mb-3">
                          <div class="todo-list d-flex justify-content-between card-body text-start">
                            <li class="list-group-item">
                              <label class="form-check-label">${data}</label>
                            </li>
                            <button class="border-0 bg-transparent" onclick="deleteList(${index})" id="close"><i class="bi bi-trash-fill text-danger"></i></button>
                          </div>
                        </div>`;
  });
  talkListShow.innerHTML = output;
}
showList();

function deleteList(index) {
  taskList.splice(index, 1);
  localStorage.setItem("localItem", JSON.stringify(taskList));
  showList();
}

// Time Start
const time = new Date();
const months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
const days = ["Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu", "Minggu"];

const day = days[time.getDay() - 1];
const date = time.getDate();
const month = months[time.getMonth()];
const year = time.getFullYear();
const today = `${day}, ${date} ${month} ${year}`;

document.querySelector("#tgl").innerHTML = today;
// Time End

// if (todoInput.value == "") {
//   swal("Failed!", "Kamu belum mengetikan sesuatu", "error");
// } else {
//   const todoContainer = document.querySelector(".tc");
//   let todoHTML = todoContainer.innerHTML;
//   todoHTML += `<div class="todo card mb-3">
//                           <div class="todo-list d-flex justify-content-between card-body text-start">
//                             <li class="list-group-item">
//                               <input class="form-check-input me-1" type="checkbox" value="" id="firstCheckboxStretched" />
//                               <label class="form-check-label">${todoInput.value}</label>
//                             </li>
//                             <button class="border-0 bg-transparent" id="close"><i class="bi bi-trash-fill text-danger"></i></button>
//                           </div>
//                         </div>`;
//   todoContainer.innerHTML = todoHTML;

//   let checkTodo = document.querySelectorAll(".form-check-input");
//   checkTodo.forEach(function (e) {
//     e.addEventListener("change", function () {
//       let checkBox = e.nextElementSibling;
//       checkBox.classList.toggle("text-decoration-line-through");
//     });
//   });
//   showList();

//   let btnHapus = document.querySelectorAll("#close");
//   for (let j = 0; j < btnHapus.length; j++) {
//     const hapus = btnHapus[j];
//     hapus.addEventListener("click", function () {
//       this.parentElement.parentElement.remove();
//     });
//   }
// }
