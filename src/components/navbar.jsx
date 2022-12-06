// ------------------------------------------
// | Ini adalah bagian navbar               |
// | disinilah saya  bisa membuat navigasi  |
// ------------------------------------------

import logo from "../assets/bold-logo.svg";
export default function Navbar() {
  return (
    <nav className="w-full h-[10vh] bg-slate-900 flex px-5 items-center fixed top-0 justify-between">
      <div className="flex justify-start gap-1 items-center">
        <img className="w-[50px]" src={logo} alt="" />
        <h1 className="text-2xl text-white">DwiCode</h1>
      </div>

      <Hamburger />
      <div className="linkWrapper absolute top-[10vh] left-[-100%] flex flex-col justify-center items-center gap-24 bg-slate-900 w-full h-[90vh]">
        <Link value="HOME" />
        <Link value="SKILLS" />
        <Link value="PROJECT" />
        <Link value="CONTACT" />
      </div>
    </nav>
  );
}

// --------------------------------------------------------------
// | Semua komponen saya simpan di bawah                        |
// | Lebih mudah membuat komponen terpisah                      |
// | daripada menempat kan semua elemen terpisah ke satu div    |
// --------------------------------------------------------------

function Hamburger() {
  function linksActive() {
    const linkWrapper = document.querySelector(".linkWrapper");
    let links = linkWrapper.classList;
    links.forEach((link) => {
      if (link == "left-0") {
        links.remove("left-0");
        links.add("left-[-100%]");
      } else {
        links.add("left-0");
        console.log(link);
      }
    });
  }
  return (
    <div
      onClick={() => linksActive()}
      className="flex h-[25px] flex-col justify-between"
    >
      <div className="w-[30px] bg-white h-[2px]"></div>
      <div className="w-[30px] bg-white h-[2px]"></div>
      <div className="w-[30px] bg-white h-[2px]"></div>
    </div>
  );
}
function Link(props) {
  function linksDeactive() {
    const links = document.querySelectorAll(".link");
    links.forEach((link) => {
      link.addEventListener("click", () => {
        document.querySelector(".linkWrapper").classList.remove("left-0");
      });
    });
  }
  return (
    <a
      onClick={() => linksDeactive()}
      className="link text-white text-2xl"
      href={props.link}
    >
      {props.value}
    </a>
  );
}
