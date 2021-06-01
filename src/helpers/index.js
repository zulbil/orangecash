export const helper = {

    initSecretPhoneNumber : function() {
        const authorizePrefixNumber 	= 	['089','084','085']
	    const prefixNumberIndex			=	Math.floor(Math.random() * authorizePrefixNumber.length) 

        return authorizePrefixNumber[prefixNumberIndex] + Math.floor(Math.random() * (9999999-1000000+1)+1000000)
    },

    // This function help us to check an occurence of a string
    checkOccurence : function (char, array) {
        let occurence = 0;
    
        array.forEach(function (item, index) {
            if (char === item) {
                occurence++;
            }
        });
    
        return occurence;
    },

    checkNumber: function (number, reference) {

        const num = number.toString().split("");
      
        const referenceNum = reference.toString().split("");
      
        let numberArray = [
            { number: '0',  classStyle: 'right-position'}, 
            { number: '8',  classStyle: 'right-position'}
        ];
      
        for (var i = 2; i < num.length; i++) {
          let obj = {
            number: "",
            classStyle: "",
          };
          // If a number is more than one time on phone number
          if (this.checkOccurence(num[i], referenceNum) > 1) {
            if (referenceNum.indexOf(num[i], i) === i) {
              obj.number = num[i];
              obj.classStyle = "right-position";
            } else {
              obj.number = num[i];
              obj.classStyle = "wrong-position";
            }
          } else {
            if (referenceNum.indexOf(num[i]) === i) {
              obj.number = num[i];
              obj.classStyle = "right-position";
            } else if (referenceNum.indexOf(num[i]) != -1) {
              obj.number = num[i];
              obj.classStyle = "wrong-position";
            } else {
              obj.number = num[i];
              obj.classStyle = "not-exist";
            }
          }
      
          numberArray.push(obj);
        }
      
        return numberArray;
      }


}