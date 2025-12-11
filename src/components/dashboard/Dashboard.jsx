import { useMemo } from "react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, Legend, PieChart, Pie, Cell
} from "recharts";

import Sidebar from "../layout/sidebar/Sidebar";
import styles from "./dashboard.module.css";
import { FiSearch } from "react-icons/fi";

export default function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user")) || { nome: "Usuário" };

  const kpis = useMemo(() => ({
    students: 1240,
    teachers: 86,
    classes: 48,
    attendancePct: 92
  }), []);

  const enrollData = useMemo(() => ([
    { month: "Jan", enrolls: 50 },
    { month: "Feb", enrolls: 80 },
    { month: "Mar", enrolls: 120 },
    { month: "Apr", enrolls: 140 },
    { month: "May", enrolls: 180 },
    { month: "Jun", enrolls: 200 },
    { month: "Jul", enrolls: 220 },
    { month: "Aug", enrolls: 260 },
    { month: "Sep", enrolls: 300 },
    { month: "Oct", enrolls: 240 },
    { month: "Nov", enrolls: 280 },
    { month: "Dec", enrolls: 320 }
  ]), []);

  const studentsByCourse = useMemo(() => ([
    { name: "Info", value: 420 },
    { name: "Admin", value: 320 },
    { name: "Contab", value: 200 },
    { name: "Outros", value: 300 }
  ]), []);

  const recentStudents = useMemo(() => ([
    { id: 1, nome: "Ana Silva", curso: "Informática", turma: "T1", inscrito: "2025-09-01" },
    { id: 2, nome: "Carlos Lima", curso: "Administração", turma: "T2", inscrito: "2025-09-03" },
    { id: 3, nome: "Mariana Reis", curso: "Contabilidade", turma: "T1", inscrito: "2025-09-04" },
    { id: 4, nome: "Pedro Zamite", curso: "Informática", turma: "T3", inscrito: "2025-09-05" }
  ]), []);

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <div className={styles.wrapper}>
      <Sidebar />

      <div className={styles.main}>
            <header className={styles.header}>
              <div className={styles.headerLeft}>
                <h2>Dashboard</h2>
                <span className={styles.subtitle}>Bem-vindo, {user.nome}</span>
              </div>

              <div className={styles.headerRight}>
                <div className={styles.search}>
                  <FiSearch />
                  <input placeholder="Pesquisar alunos, turmas..." />
                </div>
              </div>
            </header>

            <section className={styles.kpiRow}>
              <div className={styles.kpiCard}>
                <h4>Total Alunos</h4>
                <p className={styles.kpiValue}>{kpis.students}</p>
              </div>
              <div className={styles.kpiCard}>
                <h4>Professores</h4>
                <p className={styles.kpiValue}>{kpis.teachers}</p>
              </div>
              <div className={styles.kpiCard}>
                <h4>Turmas</h4>
                <p className={styles.kpiValue}>{kpis.classes}</p>
              </div>
              <div className={styles.kpiCard}>
                <h4>Assiduidade</h4>
                <p className={styles.kpiValue}>{kpis.attendancePct}%</p>
              </div>
            </section>

            {/* Aqui em baixo esta a parte que deve ser melhorada*/}  
            <div className={styles.container}>

  {/* COLUNA PRINCIPAL */}
  <div className={styles.mainColumn}>
    
    {/* CARD: MATRÍCULAS */}
    <div className={styles.card}>
      <h3>Matrículas (ano)</h3>
      <ResponsiveContainer width="100%" height={260}>
        <LineChart data={enrollData} margin={{ top: 10, right: 20 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line 
            type="monotone" 
            dataKey="enrolls" 
            stroke="#0077ff" 
            strokeWidth={3} 
            dot={{ r: 3 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>

    {/* CARD: TABELA */}
    <div className={styles.card}>
      <h3>Alunos Destaque</h3>

      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Curso</th>
              <th>Turma</th>
              <th>Inscrito em</th>
            </tr>
          </thead>
          <tbody>
            {recentStudents.map((s) => (
              <tr key={s.id}>
                <td>{s.id}</td>
                <td>{s.nome}</td>
                <td>{s.curso}</td>
                <td>{s.turma}</td>
                <td>{s.inscrito}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

  </div>


  {/* COLUNA LATERAL */}
  <div className={styles.sideColumn}>

    {/* CARD: DISTRIBUIÇÃO */}
    <div className={styles.card}>
      <h3>Distribuição por Curso</h3>
      <ResponsiveContainer width="100%" height={240}>
        <PieChart>
          <Pie
            data={studentsByCourse}
            cx="50%"
            cy="50%"
            outerRadius={80}
            dataKey="value"
            label
          >
            {studentsByCourse.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>

    {/* CARD: BARRAS */}
    <div className={styles.card}>
      <h3>Alunos por Curso</h3>
      <ResponsiveContainer width="100%" height={240}>
        <BarChart data={studentsByCourse} margin={{ top: 10 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#00C49F" radius={[5, 5, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>

  </div>
</div>


            {/* <footer className={styles.footer}>
              <small>© {new Date().getFullYear()} Escola — Todos os direitos reservados</small>
            </footer> */}
      </div>
    </div>
  );
}
