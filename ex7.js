function bhaskara (ax2, bx, c) {

   delta = () => {
        let delta = Math.pow(bx, 2) - (4*ax2*c)
        
        if(delta < 0){
            console.log("Deslta é negativo")
        } else {
            formulaX1 = () => {
                let x1 = ((-ax2) + Math.sqrt(delta)) / 2* ax2
                console.log(`x1 = ${x1}`)
            }
            formulaX2 = () => {
                let x2 = ((ax2) + Math.sqrt(delta)) / 2* ax2
                console.log(`x2 = ${x2}`)
            }
            formulaX1()
            formulaX2()
        }

    }
    delta()
}
bhaskara(20,30,0)
bhaskara(30,-5,12)