import React, { useState } from "react";
import CpfCnpj from "@react-br-forms/cpf-cnpj-mask";
import image from "./assets/images/undraw_social_distancing_2g0u.png"
import { FaLocationArrow } from 'react-icons/fa';


function App() {
  const [cpfCnpj, setCpfCnpj] = useState("");
  const [mask, setMask] = useState("");
  const text = [
    {
      title:"COMPROVANTE DE RESIDÊNCIA EM PIRACICABA"
    },
    {
      title:"DOCUMENTO COM NÚMERO DE CPF DA PESSOA A SER VACINADA"
    },
    {
      title:"DOCUMENTO DE IDENTIFICAÇÃO COM FOTO DA PESSOA A SER VACINADA"
    }
  ]

  return (
    <div>
      <header>
        <nav>
          <div className="flex justify-between my-10 max-w-4xl mx-auto md:px-8">
            <div>
              <p className="font-bold text-green-500">VACINAPIRA</p>
            </div>
            <div className="flex text-purple-700 font-bold">
              <p>Sobre</p>
              <p className="ml-4">Informações</p>
            </div>
          </div>
        </nav>
        <main className="max-w-4xl mx-auto md:px-8">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-bold text-3xl">
                <p>ESTÁ LIBERADO VACINA PARA PESSOAS COM 28</p>
                <p>ANOS OU MAIS</p>
              </div>
              <div className="my-2">
                <p className="text-green-500">Digite seu CPF para consultar/agendar a vacinação:</p>
                <CpfCnpj
                  className="border-2 focus:border-green-500 bg-gray-100 rounded-md h-10 my-2 text-center border-2 w-11/12"
                  value={cpfCnpj}
                  onChange={(event, type) => {
                  setCpfCnpj(event.target.value);
                  setMask(type === "CPF");
                  }}
                />
              </div>
              <div className="flex">
                  <p className="mb-1 text-sm text-green-500">Obrigatório a apresentação de:</p>
                </div>
              <div className="flex text-xs lowercase">
                {text.map(item => (
                  <div className="flex rounded-md border-2 px-2 py-3 mr-1">
                    <FaLocationArrow className="m-2 text-green-500" />
                    <p>{item.title}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img src={image} className="w-80" alt="pessoas com mascara"/>
            </div>
          </div>
          <div className="flex text-xs items-center max-w-4xl border-red-500 border-2 mx-1 mt-10 p-2 rounded-lg">
            <p className="m-0">Atenção: Você está fazendo o agendamento no grupo <strong>"PESSOAS COM 28 ANOS OU MAIS".</strong> Caso não atenda aos critérios estabelecidos para este grupo, você não será vacinado.</p>
          </div>
          <div className="text-center m-5">
            <p>FAÇA O PRÉ-CADASTRO NO SITE VACINA JÁ: <a href="https://www.vacinaja.sp.gov.br/" className="hover:text-green-500">https://www.vacinaja.sp.gov.br/</a></p>
            </div>
        </main>
      </header>
    </div>
  );
}

export default App; 