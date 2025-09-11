import dayjs from "dayjs"

import {scheduleNew} from "../../services/schedule-new.js"

const form = document.querySelector("form")
const clientName = document.getElementById("client")
const selectedDate = document.getElementById("date")
//Data atual para formatar o input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD");

//Carrega a data atual e defini a data minima como sendo a data atual
selectedDate.value = inputToday
selectedDate.min = inputToday


form.onsubmit = async (event) =>{
    event.preventDefault()

    try {
//Recuperando o nome do Cliente.
const name = clientName.value.trim()
    if(!name) {
     return alert("Informe o nome do cliente!")
    }

  
const hourSelected = document.querySelector(".hour-selected")

//Recuperando horario selecionado
if(!hourSelected) {
   return alert("Selecione a hora")
}

//recuperar somente a hora
const [hour] = hourSelected.innerText.split(":")

const when = dayjs(selectedDate.value).add(hour ,"hour")

//Gera um ID

const id = new Date().getTime()

await scheduleNew({
    id,
    name,
    when,
})
console.log(when)
    } catch (error) {
     alert("Não foi possível realizar o agendamento. Por favor, verifique os dados informados e tente novamente.")
     console.log(error)
    }
}

console.log(form.value)