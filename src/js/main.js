const btnRem = document.querySelectorAll(".btn-remove"),
btnAddList = document.querySelector(".btn-add-list");

let id = 0;

btnAddList.onclick = function(){
  const aNoteHTML = `
      <li data-id=`+id+`>
        <input type="text" class="title" placeholder="Enter the title">
        <textarea type="text" class="content" placeholder="Enter the content"></textarea>
        <button class="btn-edit">Edit</button>
        <button class="btn-remove">X</button>
      </li>`;

  id++;

  const noteList = document.querySelector("ul");
  noteList.insertAdjacentHTML("beforeend", aNoteHTML);

}