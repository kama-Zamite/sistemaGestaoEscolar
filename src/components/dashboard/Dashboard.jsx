import Sidebar from "../layout/sidebar/Sidebar";
import styles from "./dashboard.module.css";

export default function Dashboard() {
    const user = JSON.parse(localStorage.getItem("user"));

    return (
        <div className={styles.container}>
            {/* Sidebar fixa */}
            <Sidebar />

            {/* Conteúdo principal */}
            <main className={styles.content}>
                <h1 className={styles.title}>Bem-vindo, {user?.nome}</h1>

                <div className={styles.cards}>
                    <div className={styles.card}>
                        <h3>Total de Estudantes</h3>
                        <p>450</p>
                    </div>

                    <div className={styles.card}>
                        <h3>Professores</h3>
                        <p>32</p>
                    </div>

                    <div className={styles.card}>
                        <h3>Funcionários</h3>
                        <p>18</p>
                    </div>

                    <div className={styles.card}>
                        <h3>Turmas</h3>
                        <p>24</p>
                    </div>
                </div>
            </main>
        </div>
    );
}
