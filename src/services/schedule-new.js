import { apiConfig } from "./api-config.js"

export async function scheduleNew({ id, name, when }) {
  try {
    //Fay a requisicao para enviar os dados do agendamento.
    await fetch(`${apiConfig.baseUrl}/schedule`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // corrigido
      },
      body: JSON.stringify({ id, name, when }),
    })
//Exibe menssagem de agendamento realizado
    alert("Agendamento realizado com sucesso!")
  } catch (error) {
    console.log(error)
    alert("Não foi possível agendar. Tente novamente mais tarde")
  }
}
