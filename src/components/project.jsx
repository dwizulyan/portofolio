// ------------------------------------------
// | Ini adalah bagian project              |
// | disinilah saya  bisa membuat list      |
// | project yang sudah saya kerjakan       |
// ------------------------------------------

export default function Project() {
  return (
    <div className="min-h-[100vh] w-full bg-gradient-to-b flex justify-center items-center flex-col gap-16 py-10 from-slate-900 to-[#432C7A]">
      <h1 className="text-3xl font-black text-white uppercase">Project</h1>
      <div className="grid grid-cols-2 gap-3 overflow-hidden px-5 box-border">
        <Box
          link="https://dwizulyan.github.io/calculator"
          created="29 - November 2022"
          projectName="Calculator App"
        />
        <Box
          link="https://dwizulyan.github.io/stringreverse"
          created="25 - November 2022"
          projectName="String Reverse App"
        />
        <Box
          link="https://dwizulyan.github.io/randompasswordgenerator"
          created="27 - November 2022"
          projectName="Random Password Genereator App"
        />
      </div>
    </div>
  );
}

// --------------------------------------------------------------
// | Semua komponen saya simpan di bawah                        |
// | Lebih mudah membuat komponen terpisah                      |
// | daripada menempat kan semua elemen terpisah ke satu div    |
// --------------------------------------------------------------

function Box(props) {
  return (
    <a href={props.link}>
      <div className="flex flex-col rounded justify-between p-5 items-start  w-[175px] h-[175px] bg-[#80489C]">
        <h1 className="text-slate-900 text-xl  font-bold">
          {props.projectName}
        </h1>
        <p className="text-xs">Created At: {props.created}</p>
      </div>
    </a>
  );
}
