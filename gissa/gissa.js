const slumptal = Math.floor(Math.random() * 9) + 1;
let antalgissningar = 0;
console.log("slumptal:" + slumptal)

function gissaTal() {
    console.log("click")
    let textfelt_gissa = document.getElementById("gissa").value;
    let gissa_int = Number(textfelt_gissa);
    let p_svar = document.getElementById("p_svar");
    console.log("textfelt=" + textfelt_gissa)
    
    if (antalgissningar < 3) {
        if (slumptal === gissa_int) {
            console.log(`RÄTT! antalgissningar= ${antalgissningar}`);
            p_svar.innerHTML= "YOU'RE A WINNER!";
            antalgissningar = 3;
        } else {
            console.log(`FEL! antalgissningar= ${antalgissningar}`);
            if (antalgissningar === 2) {
                p_svar.innerHTML = "LOSER!";
                antalgissningar = 3;
            } else {
                p_svar.innerHTML = `${textfelt_gissa} är FEL! Gissning nr ${antalgissningar + 1} av 3`;
                document.getElementById("gissa").value = "";
                document.getElementById("gissa").focus();
                antalgissningar++;
            }
        }
    } else {
        p_svar.innerHTML = "LOSER!";
    }

    // Disable further guessing after the game has ended
    if (antalgissningar === 3) {
        document.getElementById("gissa").disabled = true;
    }
}

console.log("slumptalet " + slumptal);
