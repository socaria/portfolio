import "./App.css";
import video from "./assets/art.mp4";
import foto from "./assets/foto.jpg";
import skills from "./assets/skills.PNG";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";

function App() {
  const navbarLinks = [
    { url: "/about", title: "About" },
    { url: "/projects", title: "Proyectos" },
    { url: "/skills", title: "Skills" },
  ];

  return (
    <div className="App">
      <Navbar navbarLinks={navbarLinks} />
      <Hero Video={video} />
      <Slider
        imageSrc={foto}
        title={"Sobre mí"}
        subtitle={
          ["   ",
            "Soy Fullstack devoloper con con formación universitaria en ingeniería química.",
            "Recientemente finalicé el bootcamp de Henry, por lo que me encuentro en búsqueda de nuevos desafíos para crecer profesionalmente y seguir aprendiendo, mientras tanto continúo desarrollando páginas web por mi cuenta.",
            "Anteriormente me he desempeñado en roles relacionados a calidad industrial, lo cual me ha permitido desarrollar aptitudes de liderazgo y compromiso trabajando en equipo.",
            "Disfruto mucho de aprender e investigar ya sea para solucionar algún problema, como para implementar algo nuevo. Soy proactiva por lo que mis resultados van más allá de los objetivos planteados."]}
      />
      <Slider
        imageSrc={skills}
        title={"Proyectos"}
        subtitle={["Proyectos desarrollados"]}
        flipped={true}
      />
      <Slider
        imageSrc={skills}
        title={"Skills"}
        subtitle={["Tecnologías implementadas en mis proyectos."]}
        flipped={false}
      />
    </div>
  );
}

export default App;
