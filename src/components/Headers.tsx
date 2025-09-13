import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header
      style={{
        background: "#2563eb",
        color: "white",
        padding: "12px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <h1>Portafolio Lizbeth Rivera</h1>
      <nav style={{ display: "flex", gap: "12px" }}>
        <Link to="/" style={{ color: "white" }}>Inicio</Link>
        <Link to="/experience" style={{ color: "white" }}>Experiencia</Link>
        {/* <Link to="/typescript" style={{ color: "white" }}>TypeScript</Link>
        <Link to="/react" style={{ color: "white" }}>React</Link> */}
        <Link to="/contact" style={{ color: "white" }}>Contacto</Link>
      </nav>
    </header>
  );
} 
export {};
