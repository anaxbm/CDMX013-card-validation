/* object sintaxys const object1 = { a: 'foo', b: 42, c: {} }; */
const validator = {

  isValid: function(cardNumberValue){  /* recibiendo parametro desde index */

    const reversingCardNumber= function(cardNumberValue){ /* ocupa el valor porque es una funcion interna */
        return [...cardNumberValue].reverse()
    }       /*string to array*/     /*reversed*/


  let cardNumberReversed= reversingCardNumber(cardNumberValue) /* regresa el valor una vez que se ejecuto reversingCardNumber */
       /*guardando array al reves */

       /* .map recorre el elemento, pero te da la opcion de hacer una operacion y se guarda el nuevo arreglo que es newArray*/
    let multiplicationPairNumbersArray =cardNumberReversed.map(
      /* x igual a valor de la posicion, i igual a numero de posicion*/
      function(x,i){
                 /* operacion ternaria */
        return  ((i+1)%2===0)?x*2:x
                /* condicion */
                /*0 +1 = 1 
    1 + 1 = 2 
    para lograr contar desde 1*/
      

      }
    )
    /*console.log(multiplicationPairNumbersArray)*/



    function sumDigits (number){
      let numberToString= number.toString() /*recibir numero y convertilo a un string*/ 

      let stringToArray= [...numberToString] /*string to array*/
      let num1=  parseInt(stringToArray[0])
      let num2 = parseInt (stringToArray[1])
      return num1+ num2 
    }
    /*console.log(sumDigits(14))*/
  

    let multiResult = multiplicationPairNumbersArray.map(
      function(x){ 
        return (x>9)?sumDigits(x): parseInt(x) /* para convertir los strings a number*/
                     /*sumarlos*/
      }
      )
     /* console.log(multiResult)*/

   let sumAllDigits = multiResult.reduce( /* para sumar todos los elementos*/
    function(acumulador, x){
      
      return acumulador + parseInt(x) 
          /* en aculumador se va guardando la suma de los elementos.. */
    
   })
   /*console.log(sumAllDigits)*/

   return sumAllDigits % 10 === 0 ? true : false  /*multiplo de 10*/

  },

  maskify: function(cardNumberValue){
    const maskifyArrayFunction= function(cardNumberValue){
      return [...cardNumberValue]
    } 

    let maskArray= maskifyArrayFunction(cardNumberValue)
    /*console.log(maskArray)*/

   let maskedArray = maskArray.map(
               /*orden de parametros siempre el valor y despues posicion*/
      function(x , i){
               return  i < (maskArray.length - 4) ? '#' : x
                  /* si la posicion  */
      }
    )
    maskedArray = maskedArray.toString().replace(/,/g, '')
    
  


    return maskedArray
  }
  
};




/*export const perro ={ /* cuando no es export default se exporta desde que se declara 
  ladrar: function(){
    console.log("gua gua")
  }
};
*/
export default validator; 

