// 페이지 로드 시 저장된 데이터 가져오기
window.addEventListener("load", () => {
  const storedData = localStorage.getItem("textListData");

  if (storedData) {
    const textList = document.querySelector(".text-list");
    textList.innerHTML = storedData;
  }
});

document.querySelector(".add-button").addEventListener("click", () => {
  const userName = document.querySelector(".userName").value;
  const userContent = document.querySelector(".add").value;

  if (userName.trim() === "" || userContent.trim() === "") {
    alert("Please enter your name and text.");
  } else {
    const listItem = document.createElement("li");
    listItem.innerHTML = `<span><strong>${userName}:</strong> ${userContent}</span>
            <button class="delete">Delete</button>`;
    document.querySelector(".text-list").appendChild(listItem);

    // Clear input fields after adding
    document.querySelector(".userName").value = "";
    document.querySelector(".add").value = "";

    // 저장된 데이터 업데이트
    updateLocalStorage();
  }
});

document.querySelector(".text-list").addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();

    // 저장된 데이터 업데이트
    updateLocalStorage();
  }
});

// 로컬 스토리지에 데이터 저장
function updateLocalStorage() {
  const textList = document.querySelector(".text-list").innerHTML;
  localStorage.setItem("textListData", textList);
}
