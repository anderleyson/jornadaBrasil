import './Sidebar.css'
import logo from '../../assets/logo_branca.svg'
import Link from 'next/link'

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  return (
    <div className={sidebarOpen ? 'sidebar-responsive' : ''} id="sidebar">
      <div className="sidebar__title">
        <div className="sidebar__img">
          <img src={logo} alt="logo" />
          <h1>Jornada Brasil</h1>
        </div>

        <i
          onClick={() => closeSidebar()}
          className="fa fa-times"
          id="sidebarIcon"
          aria-hidden="true"
        ></i>
      </div>
      <div className="sidebar__menu">
        <div className="sidebar__link active_menu_link">
          <Link href="/"><a>Home</a></Link>
        </div>
        <h2>Roteiros</h2>
        <div className="sidebar__link">
          <Link href="/addRoteiro"><a>Adicionar Roteiros</a></Link>
        </div>
        <div className="sidebar__link">
          <a href="/updateRoteiro">Atualizar Roteiros</a>
        </div>
        <div className="sidebar__link">
          <a href="/deleteRoteiro">Deletar Roteiros</a>
        </div>
        <h2>Pontos Turísticos</h2>
        <div className="sidebar__link">
          <a href="#">Adicionar Pontos Turísticos</a>
        </div>
        <div className="sidebar__link">
          <a href="#">Atualizar Pontos Turísticos</a>
        </div>
        <div className="sidebar__link">
          <a href="#">Deletar Pontos Turísticos</a>
        </div>
        <h2>Regiões</h2>
        <div className="sidebar__link">
          <a href="#">Atualizar Regiões</a>
        </div>
        <h2>Estados</h2>
        <div className="sidebar__link">
          <a href="#">Atualizar Estados</a>
        </div>
        <div className="sidebar__logout">
          <a href="#">Log out</a>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
