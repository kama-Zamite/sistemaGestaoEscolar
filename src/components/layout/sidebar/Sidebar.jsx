import { Link, useLocation, useNavigate } from "react-router-dom";
import styles from "./Sidebar.module.css";
import Img from "../../img/Logo-preview.png";

import {
  EthernetPort,
  BookCopy,
  Presentation,
  UserLock,
  Users,
  LayoutDashboard,
  CogIcon,
  School,
  ShieldUser,
  LogOut
} from "lucide-react";

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { label: "Dashboard", icon: <LayoutDashboard />, path: "/dashboard" },
    { label: "Alunos", icon: <Users />, path: "/alunos" },
    { label: "Professores", icon: <UserLock />, path: "/professores" },
    { label: "Turmas", icon: <Presentation />, path: "/turmas" },
    { label: "Avaliações", icon: <School />, path: "/avaliacoes" },
    { label: "Relatórios", icon: <BookCopy />, path: "/relatorios" },
    { label: "Comunicados", icon: <EthernetPort />, path: "/comunicados" },
    { label: "Administração", icon: <ShieldUser />, path: "/admin" }
  ];

  function handleClick() {
    localStorage.removeItem("user");
    setTimeout(() => {
       navigate("/login");
    }, 1000);
  }

  return (
    <aside className={styles.sidebar}>
      {/* LOGO */}
      <div className={styles.logoArea}>
        <img style={{ width: 200 }} src={Img} alt="Logotipo da plataforma" />
      </div>

      {/* MENU SUPERIOR */}
      <nav className={styles.menuListWrapper}>
        <ul className={styles.menuList}>
          {menuItems.map((item, i) => {
            const isActive = location.pathname === item.path;

            return (
              <li key={i}>
                <Link
                  to={item.path}
                  className={`${styles.menuItem} ${isActive ? styles.active : ""}`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* DIVISOR */}
      <div className={styles.divider}></div>

      {/* MENU INFERIOR */}
      <div className={styles.menuBottom}>
        {/* CONFIGURAÇÕES */}
        <Link
          to="/configuracoes"
          className={`${styles.menuItem} ${
            location.pathname === "/configuracoes" ? styles.active : ""
          }`}
        >
          <CogIcon />
          <span>Configurações</span>
        </Link>

        {/* SAIR */}
        <button className={styles.logoutButton} onClick={handleClick}>
          <LogOut />
          <span>Sair</span>
        </button>
      </div>
    </aside>
  );
}
