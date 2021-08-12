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
              <p className="text-primary-p">Números de roteiros</p>
              <span className="font-bold text-title">64</span>
            </div>
          </div>

          <div className="card">
            <div className="card_inner">
              <p className="text-primary-p">Cidades cadastradas</p>
              <span className="font-bold text-title">45</span>
            </div>
          </div>

          <div className="card">
            <div className="card_inner">
              <p className="text-primary-p">Galeria</p>
              <span className="font-bold text-title">69</span>
            </div>
          </div>

          <div className="card">
            <div className="card_inner">
              <p className="text-primary-p">Categorias</p>
              <span className="font-bold text-title">40</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Main
