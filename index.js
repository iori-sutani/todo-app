const OnClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = ""; // Clear the input field

  // liを生成
  const li = document.createElement("li");

  // divを生成
  const div = document.createElement("div");
  div.className = "list-row";

  //pタグを生成
  const p = document.createElement("p");
  p.className = "todo-item";
  p.innerText = inputText;

  // 完了ボタンの生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    alert("完了");
  });

  // 完了ボタンの生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    alert("削除");
  });

  // div配下にpタグを追加
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // li配下にdivを追加
  li.appendChild(div);

  document.getElementById("incomplete-list").appendChild(li);
}

document.getElementById("add-button").addEventListener("click", OnClickAdd);