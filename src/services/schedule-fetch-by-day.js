import dayjs from "dayjs"
import { apiConfig } from "./api-config.js"

export async function scheduleFetchByDay({ date }) {
  if (!dayjs(date).isValid()) {
    alert("Data inválida")
    return []
  }

  try {
    const response = await fetch(`${apiConfig.baseUrl}/schedule`)
    const data = await response.json()

    console.log("Todos os agendamentos:", data)
    console.log("Data recebida:", date)

    const dailySchedules = data.filter(schedule =>
      dayjs(schedule.when).isSame(dayjs(date), "day")
    )

    console.log("Agendamentos do dia:", dailySchedules)
    return dailySchedules
  } catch (error) {
    console.error(error)
    alert("Não foi possível buscar os agendamentos do dia selecionado")
    return []
  }
}
