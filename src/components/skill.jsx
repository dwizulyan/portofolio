// --------------------------------------
// | Ini adalah bagian skill            |
// | Disini saya membuat bagian skill   |
// | untuk website ini                  |
// --------------------------------------
export default function Skills() {
  return (
    <div className="w-100 min-h-[100vh] py-24 bg-slate-900 flex flex-col justify-center items-center">
      <h1 className="text-[#FF8FB1] text-3xl mb-16 font-black">SKILLS</h1>
      <div className="flex flex-wrap w-[300px] gap-5 justify-center">
        <RoundedBox value="HTML" />
        <RoundedBox value="CSS" />
        <RoundedBox value="JavaScript" />
        <RoundedBox value="PHP" />
      </div>
    </div>
  );
}

// --------------------------------------------------------------
// | Semua komponen saya simpan di bawah                        |
// | Lebih mudah membuat komponen terpisah                      |
// | daripada menempat kan semua elemen terpisah ke satu div    |
// --------------------------------------------------------------

function RoundedBox(props) {
  return (
    <div className="w-[300px] rounded-full h-[300px] flex justify-center items-center bg-[#432C7A]">
      <h1 className="text-3xl text-[#FF8FB1] font-black">{props.value}</h1>
    </div>
  );
}
