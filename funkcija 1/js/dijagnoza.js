
// Pomoću ove funkcije može da se odštampa otpusna lista pacijenta ukoliko ne ostaje na bolničkom lečenju.


let pacijent = {
    ime: 'Marko',
    prezime: 'Ilić',
    godine: 52,
    zdrav(){
        console.log('%cPacijent je ZDRAV i može se pripremati otpusna lista.', 'background:lightgreen')
    },
    terapija(d){
        console.log(`%cStanje pacijenta nije dobro i moraće da nastavi sa terapijom. DIJAGNOZA: ${d}`,'background:lightblue')
    },
}

// Štampa se odpusna lista
pacijent.zdrav()  
// Ostaje na bolničkom lečenju
pacijent.terapija('glavobolja')