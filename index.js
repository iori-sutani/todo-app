const OnClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = ""; // Clear the input field

  // 未完了リストに追加する関数を呼び出す
  createIncompleteList(inputText);
}

// 渡された引数をもとに未完了のTODOを生成する関数
const createIncompleteList = (todo) => { 
    // liを生成
  const li = document.createElement("li");

  // divを生成
  const div = document.createElement("div");
  div.className = "list-row";

  //pタグを生成
  const p = document.createElement("p");
  p.className = "todo-item";
  p.innerText = todo;

  // 完了ボタンの生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 完了ボタン押下時にボタンを削除
    const moveTarget = completeButton.closest("li");
    completeButton.nextElementSibling.remove(); 
    completeButton.remove();
    // 戻すボタンを生成してdiv配下に設定
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
        const todoText = backButton.previousElementSibling.innerText;
        createIncompleteList(todoText); 
        // 完了リストから削除
        backButton.closest("li").remove();
    });

    moveTarget.firstElementChild.appendChild(backButton);
    // 完了リストに追加
    document.getElementById("complete-list").appendChild(li);
  });

  // 削除ボタンの生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // liを削除
    const deleteTarget = deleteButton.closest("li");
    document.getElementById("incomplete-list").removeChild(deleteTarget);
  });

  // div配下にpタグを追加
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // li配下にdivを追加
  li.appendChild(div);

  document.getElementById("incomplete-list").appendChild(li);

};


document.getElementById("add-button").addEventListener("click", OnClickAdd);