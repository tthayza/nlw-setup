const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert("OPS! Esse dia já foi incluso 🤔")
    return
  }
  alert("Dia adicionado com sucesso 🎉")
  nlwSetup.addDay(today)
}

function save() {
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem("NLWSetup@habits"))

// const data = {
//   exercises: ["01-01", "01-02", "01-03"],
//   drinkWater: ["01-01", "01-02", "01-03"],
//   eatFruit: ["01-01"],
//   study: ["01-02", "01-03"],
//   playWithDog: ["01-01", "01-02", "01-03"]
// }

nlwSetup.setData(data)
nlwSetup.load()
