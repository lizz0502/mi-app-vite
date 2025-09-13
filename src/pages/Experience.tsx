import React from "react";

interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: { from: string; to?: string };
  summary: string;
  tech: string[];
  achievements: string[];
}

const EXPERIENCES: ExperienceItem[] = [
  {
    id: "1",
    company: "Proyecto Personal - Gestión de Portafolio",
    role: "Frontend Developer",
    period: { from: "2024-08", to: "Present" },
    summary: "Desarrollo de aplicaciones web con Angular y React para la gestión de proyectos académicos y profesionales.",
    tech: ["Angular", "React", "TypeScript", "TailwindCSS"],
    achievements: [
      "Implementación de interfaces dinámicas con Angular y React",
      "Integración de API REST con servicios en .NET",
      "Optimización del rendimiento de componentes reutilizables"
    ],
  },
  {
    id: "2",
    company: "Prácticas - Sistemas Financieros",
    role: "Fullstack Developer Jr.",
    period: { from: "2024-04", to: "2023-07" },
    summary: "Participación en el desarrollo de sistemas bancarios y financieros utilizando .NET y SQL Server.",
    tech: ["C#", ".NET Core", "SQL Server", "Entity Framework"],
    achievements: [
      "Scaffolding de base de datos con Entity Framework",
      "Diseño y consumo de controladores en ASP.NET Core",
      "Automatización de procesos de consulta y registro de clientes"
    ],
  },
  {
    id: "3",
    company: "Proyectos Académicos",
    role: "Desarrollador Fullstack en Formación",
    period: { from: "2024-09", to: "2022-03" },
    summary: "Construcción de proyectos de aprendizaje para fortalecer conocimientos en desarrollo frontend y backend.",
    tech: ["Angular", "React", ".NET", "SQL Server", "Git"],
    achievements: [
      "Configuración e instalación de entornos de trabajo en Visual Studio y Visual Studio Code",
      "Creación de APIs con .NET y conexión a bases de datos SQL Server",
      "Despliegue de aplicaciones frontend en Angular y React para prácticas de portafolio"
    ],
  },
];


const formatPeriod = (p: ExperienceItem["period"]) => {
  const opts: Intl.DateTimeFormatOptions = { year: "numeric", month: "short" };
  const from = new Date(p.from + "-01").toLocaleDateString(undefined, opts);
  const to = p.to
    ? new Date(p.to + "-01").toLocaleDateString(undefined, opts)
    : "Actual";
  return `${from} - ${to}`;
};

export default function Experience() {
  return (
    <section>
      <h2>Experiencia Profesional</h2>
      {EXPERIENCES.map((e) => (
        <article
          key={e.id}
          style={{
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "12px",
            margin: "12px 0",
          }}
        >
          <h3>
            {e.role} · {e.company}
          </h3>
          <p style={{ color: "#666" }}>{formatPeriod(e.period)}</p>
          <p>{e.summary}</p>
          <ul>
            {e.achievements.map((a, i) => (
              <li key={i}>{a}</li>
            ))}
          </ul>
          <p>
            <strong>Tecnologías:</strong> {e.tech.join(", ")}
          </p>
        </article>
      ))}
    </section>
  );
}
export {};
