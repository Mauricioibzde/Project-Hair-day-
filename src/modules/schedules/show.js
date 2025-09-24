import dayjs from "dayjs"

// Selecionar as listas dos períodos
const periodMorning = document.getElementById("period-morning") 
const periodAfternoon = document.getElementById("period-afternoon") 
const periodNight = document.getElementById("period-night") 

export function scheduleShow({ daylySchedules }) {
  try {
    // Limpa as listas sempre que renderizar de novo
    periodMorning.innerHTML = ""
    periodAfternoon.innerHTML = ""
    periodNight.innerHTML = ""

    if (!daylySchedules || daylySchedules.length === 0) {
      // Se não houver agendamento, mostrar mensagem
      periodMorning.innerHTML = "<li>Nenhum agendamento</li>"
      periodAfternoon.innerHTML = "<li>Nenhum agendamento</li>"
      periodNight.innerHTML = "<li>Nenhum agendamento</li>"
      return
    }

    // Renderizar os agendamentos
    daylySchedules.forEach((schedule) => {
      const item = document.createElement("li")
      const time = document.createElement("strong")
      const name = document.createElement("span")

      // Adicionar o id do agendamento
      item.setAttribute("data-id", schedule.id)
      time.textContent = dayjs(schedule.when).format("HH:mm")
      name.textContent = schedule.name

      // Criar ícone de cancelar
      const cancelIcon = document.createElement("img")
      cancelIcon.classList.add("cancel-icon")
      cancelIcon.setAttribute("src", "./src/assets/cancel.svg")
      cancelIcon.setAttribute("alt", "Cancelar")

      // Montar o item
      item.append(time, name, cancelIcon)

      // Obter somente a hora
      const hour = dayjs(schedule.when).hour()

      // Definir período
      if (hour >= 6 && hour < 12) {
        periodMorning.appendChild(item)
      } else if (hour >= 12 && hour < 18) {
        periodAfternoon.appendChild(item)
      } else {
        periodNight.appendChild(item)
      }
    })
  } catch (error) {
    console.error("Não foi possível renderizar os agendamentos!", error)
  }
}
