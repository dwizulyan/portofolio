// ------------------------------------------------
// | Ini adalah bagian utama dari website ini     |
// | Disini saya mengimport semua component induk |
// | dari setiap bagian yang ada di website ini   |
// ------------------------------------------------

// Todo -----------------------------------------------------------------------
// Todo | 1. Memberikan comment di setiap komponen induk yang belum ada       |
// Todo |    comment                                                          |
// Todo -----------------------------------------------------------------------

import "./app.css";

import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Skills from "./components/skill";
import Project from "./components/project";
import Contact from "./components/contact";
import Footer from "./components/footer";

// ----------------------------------------
// | Di bawah ini adalah fungsi untuk     |
// | memanggil semua fungsi induk yang ada|
// ----------------------------------------

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
