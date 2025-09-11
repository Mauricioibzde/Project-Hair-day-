import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js"

import {hoursLoad} from "../form/hours-load.js"
//seleciona o input de data.
const selectDate = document.getElementById("date")
export async function  schedulesDay () {
    //obtem a data do input
    const date = selectDate.value
   

    //Bucar na API os agendamentos

    const dailySchedule  = await scheduleFetchByDay({date})
    console.log(dailySchedule)
   

     //Renderiza as horas disponiveis
    hoursLoad({date})
}
