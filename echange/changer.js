class Pengar{
    constructor(antal, pengsort){
    this.antal =antal
    this.pengsort = pengsort
   }
}
/**
 * exchange
 * in: belop som ska växlas, valör på sedel
 * out: antal sedlar elle mynt
 */
function exChange(belopp, sedel){
    return Math.floor(belopp, )
}
/**
 * getExchangeArray()
 * in inbetalt belopp
 * out: array innehåler antal mynt i vaje val
 */
function getExchangeArray(inbetalning, priset){
   let antal_mynt = 0
   let pengar_tillbaka = 0
   sedlar_mynt_array = []
   //500---------------------------------
   pengar_tillbaka = inbetalning - priset
   antal_mynt = exChange(pengar_tillbaka, 500)
   console.log(`antal= ${antal_mynt}`)
}
const input_pris = document.getElementById("pris")
const input_inbet = document.getElementById("inbet")
const svardiv = document.getElementById("svar_div")
const kalkyleraknapp = document.getElementById("kalk_input")
kalkyleraknapp.addEventListener("click", kalkyleraClick)
function kalkyleraClick(e){
    let t_pris = parseInt(input_pris.value)
    let t_inbet = parseInt(input_inbet.value)
    getExchangeArray(t_inbet, t_pris)
    //console.log(`klick`)   
}