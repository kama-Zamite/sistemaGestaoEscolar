import { useState } from "react";
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
  ShieldUser
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logoArea}>
        <img
          style={{ width: 200 }}
          src={Img}
          alt="logotipo da um svg referenciando a imagem de uma estudante com livros"
        />
      </div>
      <div className={styles.menuListWrapper}>
        <ul className={styles.menuList}>
           <li className={styles.menuItem}>
            <LayoutDashboard/>
            <span>Dashboard</span>
          </li>
           <li className={styles.menuItem}>
            <Users />
            <span>Alunos</span>
          </li>
           <li className={styles.menuItem}>
            <UserLock />
            <span>Professores</span>
          </li>
           <li className={styles.menuItem}>
            <Presentation />
            <span>Turmas & Disciplinas</span>
          </li>
           <li className={styles.menuItem}>
            <School />
            <span>Notas & Avaliações</span>
          </li>
           <li className={styles.menuItem}>
            <BookCopy />
            <span>Relatórios Inteligentes</span>
          </li>
           <li className={styles.menuItem}>
            <EthernetPort />
            <span>Comunicados</span>
          </li>
           <li className={styles.menuItem}>
            <ShieldUser />
            <span>Administração do Sistema </span>
          </li>
          <li className={styles.menuItem}>
            <CogIcon />
            <span>Configurações</span>
          </li>
        </ul>
      </div>
    </aside>
  );
}
