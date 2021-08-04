import image from "./assets/images/undraw_social_distancing_2g0u.png"
function App() {
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
              <div className="my-6">
                <p className="text-green-500">Digite seu CPF para consultar/agendar a vacinação:</p>
                <input placeholder="000.000.000-00" className="border-2 focus:border-green-500 bg-gray-100 rounded-md h-10 my-2" />
              </div>
              <div className="text-xs lowercase">
                <p className="mb-5 uppercase font-bold">OBRIGATÓRIO A APRESENTAÇÃO DE:</p>
                <p>COMPROVANTE DE RESIDÊNCIA EM PIRACICABA</p>
                <p>DOCUMENTO COM NÚMERO DE CPF DA PESSOA A SER VACINADA</p>
                <p>DOCUMENTO DE IDENTIFICAÇÃO COM FOTO DA PESSOA A SER VACINADA</p>
              </div>
            </div>
            <div>
              <img src={image} className="w-80"/>
            </div>
          </div>
          <div className="flex text-xs items-center max-w-4xl border-red-500 border-2 mx-1 mt-10 p-2 rounded-lg">
            <p class="m-0">Atenção: Você está fazendo o agendamento no grupo <strong>"PESSOAS COM 28 ANOS OU MAIS".</strong> Caso não atenda aos critérios estabelecidos para este grupo, você não será vacinado.</p>
          </div>
          <div className="text-center m-5">
            <p>FAÇA O PRÉ-CADASTRO NO SITE VACINA JÁ: <a href="https://www.vacinaja.sp.gov.br/" target="_blank" className="hover:text-green-500">https://www.vacinaja.sp.gov.br/</a></p>
            </div>
        </main>
      </header>
    </div>
  );
}

export default App;
