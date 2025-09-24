import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js"
import { scheduleShow } from "./show.js"
import { hoursLoad } from "../form/hours-load.js"

// Seleciona o input de data
const selectDate = document.getElementById("date")

export async function schedulesDay() {
  try {
    const date = selectDate.value
    if (!date) {
      console.warn("Nenhuma data selecionada.")
      return
    }

    // Buscar agendamentos
    const daylySchedules = await scheduleFetchByDay({ date })

    // Exibe os agendamentos
    scheduleShow({ daylySchedules })

    // Renderiza as horas disponíveis
    hoursLoad({ date })
  } catch (error) {
    console.error("Erro ao carregar os agendamentos do dia:", error)
  }
}

//  dispara automaticamente quando a data mudar
selectDate.addEventListener("change", schedulesDay)
