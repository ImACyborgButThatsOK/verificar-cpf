import { useState } from "react"
import { CPF } from "../../Services/validatorCPF"
import "./styles.css"
export function Main() {
  const [cpfRaw, setCpfRaw] = useState();

  const { status } = new CPF(cpfRaw).verifyCPF()

  return (
    <>
      <div className="mainContainer">

        <div className="validation">

          <h1>Verifique <br />
            <span className="titleSeu">Seu</span>
            <br /> <span className="titleCPF">CPF</span>
          </h1>
          <input type="text" name="" id="" onChange={(e) => {
            setCpfRaw(e.target.value)
          }} />

          {
            status ? (
              <>
                <p className="messageValid">CPF VALIDO!</p>
              </>
            ) : (
              <>
                <p className="messageInvalid">CPF INVALIDO!</p>
              </>
            )
          }
        </div>
      </div>
    </>
  )
}
