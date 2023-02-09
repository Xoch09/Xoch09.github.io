const validator = {

  isValid: function (creditCardNumber) {
    const array = creditCardNumber.split("").map(Number);
    //console.log(array);
    const reversed = array.reverse();
    let sum = 0;

    for (let i = 0; i < reversed.length; i++) {
      const pos = i + 1;

      if (pos % 2 === 0) {
        reversed[i] = reversed[i] * 2;
      }
      if (reversed[i] > 9) {

        const num = reversed[i].toString().split("").map(Number);
        //console.log(num);
        reversed[i] = num[0] + num[1];
      }
      sum += reversed[i]
    }

    return sum % 10 === 0;


  },
  
  maskify: (numero) => {
    const fourSaved = numero.slice(-4)
    //console.log(fourSaved)
    let michi = ""
    for (let i = 0; i < numero.length; i++) {
      michi = michi + "#"


     
    }
    //console.log(michi)
    const formichi = michi.slice(0, michi.length - 4)
    const result = formichi + fourSaved
    //console.log(result)

    return result



  }

}

export default validator;


