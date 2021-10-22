import { useState } from "react"
import { CPF } from "../../Services/validatorCPF"
import "./styles.css"
export function Main() {
  const [cpfRaw, setCpfRaw] = useState("");

  const { status } = new CPF(cpfRaw).verifyCPF()

  return (
    <>
      <div className="mainContainer">

        <div className="validation">

          <h1>Verifique <br />
            <span className="titleSeu">Seu</span>
            <br /> <span className="titleCPF">CPF</span>
          </h1>
          <input type="text" placeholder="Digite seu cpf..." onChange={(e) => {
            setCpfRaw(e.target.value)
          }} />

          {
            status === true ? (
              <>
                <p className="messageValid">CPF VALIDO!</p>
              </>
            ) : status === false ? (
              <>
                <p className="messageInvalid">CPF INVALIDO!</p>
              </>
            ) : status === "notValue" ? (
              <>
                <p></p>
              </>
            ) : (
              <>
              </>
            )
          }
        </div>
      </div>
    </>
  )
}
