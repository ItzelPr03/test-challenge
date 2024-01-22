const dna2 = (dnastring) => {
    let resultado = "";
    dnastring.split("").map((value) => {
      value === "A" || value === "C"||  value === "T" || value === "G"
        ? (resultado += value)
        : "";
    });
  
    return resultado;
  };

  module.exports=dna2
// console.log(dna2("aAATgGGCcd"))
