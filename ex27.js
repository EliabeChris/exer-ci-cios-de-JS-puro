function alturas (alturaUm, alturaDois,taxaUm,taxaDois) {

let alturaCrianacaUm = alturaUm
let alturaCrianacaDois = alturaDois

let taxaDeCrescimento1 = taxaUm
let taxaDeCrescimento2 = taxaDois

if(alturaCrianacaDois > alturaCrianacaUm) {
    let contadorAnos = 0

    while(alturaCrianacaDois >= alturaCrianacaUm) {
        if(taxaDeCrescimento1 > taxaDeCrescimento2) {
            alturaCrianacaDois += taxaDeCrescimento2
            alturaCrianacaUm += taxaDeCrescimento1
            contadorAnos ++
        } else if(taxaDeCrescimento2 > taxaDeCrescimento1) {
            alturaCrianacaDois += taxaDeCrescimento1
            alturaCrianacaUm += taxaDeCrescimento2
            contadorAnos ++
        }
       
    }

    console.log(`Criança um vai ultrapassara criança dois em ${contadorAnos} anos!`)

} else if (alturaCrianacaUm > alturaCrianacaDois) {
    let contadorAnos = 0
    
    while(alturaCrianacaUm >= alturaCrianacaDois) {
        if(taxaDeCrescimento1 > taxaDeCrescimento2) {
            alturaCrianacaDois += taxaDeCrescimento1
            alturaCrianacaUm += taxaDeCrescimento2
            contadorAnos ++
        } else if(taxaDeCrescimento2 > taxaDeCrescimento1) {
            alturaCrianacaDois += taxaDeCrescimento2
            alturaCrianacaUm += taxaDeCrescimento1
            contadorAnos ++
        }
       
    }
    console.log(`Criança dois vai ultrapassara criança um em ${contadorAnos} anos!`)
}
}

alturas(80,90,16,40)