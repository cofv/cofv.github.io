const slumptal = Math.floor(math.random() * 9) + 1;
let antalgissningar = 0;
function gissaTal(){
    console.log("click")
    let textfelt_gissa = document.getElementById("gissa").value;
    let gissa_int = Number(textfelt_gissa);
    let vinn = false;
    let p_svar = document.getElementById("p_svar");
    console.log("textfelt=" + textfelt_gissa)
    if (antalgissningar < 3){
        if(slumptal === gissa_int){
            console.log(`RÄTT! antalgissningar= $(antalgisningar)`);
            vinn = true;
            p_svar.innerHTML= `YOUR A WINNER!`;
            antalgisningar = 3;
        }
        else {
            console.log(`FEL! antalgissningar= $(antalgisningar)`);
            if (antalgisningar === 2)
            p_svar.innerHTML=`LOOSER!`;
            else
            p_svar.innerHTML=`$(textfelt_gissa) är FEL! Gissning nr $(antalgisningar+1) av 3`;
            document.getElementById("gissa").value="";
            document-getElementById("gissa").focus();
        }
        antalgisningar++;
    }
    else{
        p_svar.innerHTML=`LOOSER`!
    }
}
console.log("slumptalet" + slumptal)