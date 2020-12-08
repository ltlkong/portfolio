const btnRem = document.querySelectorAll(".btn-remove"),
btnAddList = document.querySelector(".btn-add-list");

let id = 0;

const noteList = document.querySelector("ul");

btnAddList.onclick = function(){
  const aNoteHTML = `
      <li data-id=`+id+`>
        <input type="text" class="title" placeholder="Enter the title">
        <textarea type="text" class="content" placeholder="Enter the content"></textarea>
        <button data-id=`+id+` class="btn-remove">X</button>
      </li>`;

  id++;

  noteList.insertAdjacentHTML("beforeend", aNoteHTML);
}

noteList.addEventListener("click", event => {
  if(event.target.matches("BUTTON")) {
    event.target.closest("li").remove();
  }
})