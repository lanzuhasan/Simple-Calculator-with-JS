function calculate(x) {
  document.getElementById("theResult").value += x
}
function clearAll() {
  document.getElementById("theResult").value = ""
}
function answer() {
  document.getElementById("theResult").value = eval(document.getElementById("theResult").value)
}
