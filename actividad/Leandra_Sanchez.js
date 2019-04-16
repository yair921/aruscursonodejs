/* Realice una función que reciba como parámetro un arreglo de jsons con uno de sus atibutos de tipo entero y retorne un 
arreglo de los objetos ordenados según su índice de menor a mayo.Cada Json debe tener por lo menos 2 atributos aparte del indice tipo entero.*/


    // function OrdenarArreglo(){
    //     try {
    //         let arr = new Object([

               
    //                         {
    //                             id:3,
    //                             nombre:'Juan',
    //                             apellido:'Montes',
                    
    //                         },
    //                         {
    //                             id:1,
    //                             nombre:'Pedro',
    //                             apellido:'Gallego',
                    
    //                         },
    //                         {
    //                             id:2,
    //                             nombre:'Ana',
    //                             apellido:'Lopez',
                    
    //                         }




    //         ]);
    //         arr.forEach((e , i ) => {
    //             console.log(`
    //             El indice es ${i}
    //             Usuario ${JSON.stringify(e)}`);
    //            });
               
    //     } catch (errr) {
    //         console.log(error);
    //         }
    //     }
    //     OrdenarArreglo();

   

    var json = [{

       "pelicula": "Escape Room",
       "id" : 3,
       },
     {
         "pelicula": "La Llorona",
         "id" : 1,
     },
     {"pelicual" : "El Conjuro 3",
      "id" : 2
    }    
    ];
    json.sort(function(x, y){
return x.id - y.id;

    });
    console.log(json);
    