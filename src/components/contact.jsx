// ------------------------------------------
// | Ini adalah bagian halaman contact      |
// | disinilah saya menempatkan informasi   |
// | tentang kontak saya                    |
// ------------------------------------------

// Import the logo
import logo from "../assets/logo.svg";

export default function Contact() {
  return (
    <div className="w-full flex flex-col jsutify-center items-center py-10 min-h-[100vh] bg-gradient-to-b from-[#432C7A] to-[#80489C]">
      <Logo />
      <Form />
    </div>
  );
}

// --------------------------------------------------------------
// | Semua komponen saya simpan di bawah                        |
// | Lebih mudah membuat komponen terpisah                      |
// | daripada menempat kan semua elemen terpisah ke satu div    |
// --------------------------------------------------------------

function Logo() {
  return <img className="w-[250px]" src={logo} alt="" />;
}

function Form() {
  return (
    <form action="" autoComplete="none" className="w-full h-max p-10">
      <div className="flex flex-col mb-5">
        <InputLabel for="email" value="Your E-Mail" />
        <InputText id="email" />
      </div>
      <div className="flex flex-col mb-5">
        <InputLabel for="message" value="Message" />
        <TextAreaInput id="message" />
      </div>
      <div className="flex flex-col">
        <Button value="Email Me" />
      </div>
    </form>
  );
}
function InputText(props) {
  return (
    <input
      type="email"
      autoComplete="none"
      placeholder={props.placeholder}
      className="focus:outline-none p-3 border-2 border-slate-900 bg-transparent text-slate-900 font-bold rounded-xl"
      id={props.id}
    />
  );
}

function InputLabel(props) {
  return (
    <label className="text-xl font-black" htmlFor={props.for}>
      {props.value}
    </label>
  );
}

function Button(props) {
  return (
    <button
      onClick={(e) => contactMeHandler(e)}
      className="border-0 p-3 w-max rounded-xl text-xl font-black text-white bg-slate-900"
    >
      {props.value}
    </button>
  );
}
function TextAreaInput(props) {
  return (
    <textarea
      placeholder={props.placeholder}
      id={props.id}
      cols="30"
      autoComplete="none"
      rows="10"
      className="focus:outline-none p-3 border-2 bg-transparent border-slate-900 text-white rounded-xl"
    ></textarea>
  );
}

// ------------------------------------
// | yang berada di bawah ini adalah  |
// | fungsi bukan komponen            |
// ------------------------------------

function contactMeHandler(e) {
  e.preventDefault();
  return alert("Masih belum ada fiturnya boss, developernya tolol.");
}
