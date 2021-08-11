import './Main.css'

const Main = () => {
  return (
    <main>
      <div className="main__container">
        <div className="main__title">
          <div className="main__greeting">
            <h1>Bem vindo a Jornada</h1>
            <p>Você está no seu painel</p>
          </div>
        </div>

        <div className="main__cards">
          <div className="card">
            <div className="card_inner">
              <p className="text-primary-p">Número de pedidos</p>
              <span className="font-bold text-title">578</span>
            </div>
          </div>

          <div className="card">
            <div className="card_inner">
              <p className="text-primary-p">Pagamentos</p>
              <span className="font-bold text-title">R$2.467,00</span>
            </div>
          </div>

          <div className="card">
            <div className="card_inner">
              <p className="text-primary-p">Número de produtos</p>
              <span className="font-bold text-title">670</span>
            </div>
          </div>

          <div className="card">
            <div className="card_inner">
              <p className="text-primary-p">Categorias</p>
              <span className="font-bold text-title">40</span>
            </div>
          </div>
        </div>

        <div className="charts">
          <div className="right">
            <div className="charts__right__title">
              <div>
                <h1>Daily Reports</h1>
                <p>Ubatuba, São paulo, BR</p>
              </div>
              <i className="fa fa-area-chart"></i>
            </div>

            <div className="charts__right__cards">
              <div className="card1">
                <h1>Lucro</h1>
                <p>R$2.500,00</p>
              </div>

              <div className="card2">
                <h1>Pagamentos</h1>
                <p>R$250,00</p>
              </div>

              <div className="card3">
                <h1>Custos de hospedagem</h1>
                <p>R$150,00</p>
              </div>

              <div className="card4">
                <h1>Banco de dados</h1>
                <p>R$190,00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Main
