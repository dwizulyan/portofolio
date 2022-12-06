// ----------------------------------
// | Ini adalah bagian Hero         |
// | Disini lah kamu bisa mengedit  |
// | bagian hero dari website ini   |
// ----------------------------------

import "../app.css";
import logo from "../assets/logo.svg";

export default function Hero() {
  // THE HERO PAGE
  return (
    <div className="w-[100%] h-[100vh] items-center  flex flex-col justify-center gradient-custom gap-16">
      <div className="flex w-full justify-center items-center gap-5 flex-col">
        <Logo />
        <Title />
        <Button />
      </div>
    </div>
  );
}

// --------------------------------------------------------------
// | Semua komponen saya simpan di bawah                        |
// | Lebih mudah membuat komponen terpisah                      |
// | daripada menempat kan semua elemen terpisah ke satu div    |
// --------------------------------------------------------------

function Logo() {
  return <img className="w-[200px]" src={logo} alt="" />;
}

function Title() {
  return (
    <h1 className="text-4xl text-center font-bold text-[#FF8FB1]">
      Hay, saya Dwi Zulyan hamid, Web Developer.
    </h1>
  );
}

function Button() {
  return (
    <button className="p-3 text-[#80489C] rounded-xl font-bold bg-slate-900 shadow-xl">
      Lihat Lebih
    </button>
  );
}
