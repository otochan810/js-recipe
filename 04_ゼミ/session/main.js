const memoInput = document.getElementById("memo-input")
const AddButton = document.getElementById("add-button")
const container = document.getElementById("memo-container")

AddButton.onclick = function () {
  const text = memoInput.value
  const memo = document.createElement("div")
  memo.className = "memo"
  memo.textContent = text
  container.append(memo)
  memoInput.value = ""
  console.log(container.textContent)
}
