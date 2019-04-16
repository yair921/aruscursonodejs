function velocidad(tiempo){
    try {
    let varKm = (tiempo * 299792458)/1000;
    let varMi = varKm/106934;
   
    let obj={
        km : varKm,
         mi : varMi
        }
   

    console.log(obj);
}
catch (error) {
    console.log(error);
}
}
velocidad(10);