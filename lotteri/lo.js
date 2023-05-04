const svar_div = document.getElementById("svar_div")
const antal_vinster = document.getElementById("input_antal_vinster")
const vinster = [
"Goosedjur",
"Monster",
"Lattitud65",
"Hellcat",
"Lambo röd",
"Snus",
"Snaps",
"Putin",
"Grotto",
"kum",
"10kg meth",
"Jesse Pinkman",
"Walter White",
"Gus Fring",
"Mike Erhmantraut",
"Kommunistiska manifesto",
"ROBLOX"]
function slumpaclick() {
//console.log(`click ${antal_vinster.value}`)
let vinst = `<h3>Dina Vinster:</h3>`
let antalv = antal_vinster.value
let int_antalv = parseInt(antalv)
for (i=0; i<int_antalv; i++){
    let slumptal = Math.floor(Math.random() * 17)
    let t_vinst = vinster[slumptal]
    vinst += `<p> ${t_vinst} </p>`
}
svar_div.innerHTML = vinst
}