import { useState } from "react";
import styles from "./Sidebar.module.css";
import Img from "../../img/Logo-preview.png";
import {
  ChevronDown,
  ChevronRight,
  UserLock,
  Users,
  CogIcon,
  User,
} from "lucide-react";

export default function Sidebar() {
  const [openAdmin, setOpenAdmin] = useState(false);
  const [openStudent, setOpenStudent] = useState(false);
  const [openEmployee, setOpenEmployee] = useState(false);

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
          {/* <li className={styles.menuItem}>
            <LayoutDashboard/>
          <span>Dashboard</span>
        </li> */}

          <li
            className={styles.menuItem}
            onClick={() => setOpenAdmin(!openAdmin)}
          >
            <UserLock />
            <span>Admin</span>
            {openAdmin ? <ChevronDown /> : <ChevronRight />}
          </li>

          {openAdmin && (
            <ul className={styles.submenu}>
              <li>
                {/* <LayoutDashboard/> */}
                <span>Dashboard</span>
              </li>
              <li>Admin Dashboard</li>
              <li>Add Student</li>
              <li>Add Employee</li>
            </ul>
          )}

          <li
            className={`${styles.menuItem} ${styles.isActive}`}
            onClick={() => setOpenStudent(!openStudent)}
          >
            <User className={`${styles.icon}`} />
            <span>Student</span>
            {openStudent ? <ChevronDown /> : <ChevronRight />}
          </li>

          {openStudent && (
            <ul className={`${styles.submenu}`}>
              <li>Student Details</li>
              <li>Enroll Student</li>
            </ul>
          )}

          <li
            className={styles.menuItem}
            onClick={() => setOpenEmployee(!openEmployee)}
          >
            <Users />
            <span>Employee</span>
            {openEmployee ? <ChevronDown /> : <ChevronRight />}
          </li>

          {openEmployee && (
            <ul className={styles.submenu}>
              <li>Teacher List</li>
              <li>Add Teacher</li>
            </ul>
          )}

          <li className={styles.menuItem}>
            <CogIcon />
            <span>Configurações</span>
          </li>
        </ul>
      </div>
    </aside>
  );
}
