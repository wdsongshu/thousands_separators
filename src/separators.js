function thousands_separators(num) {
    var numArray = num.toString().split(".");
    var integerArray = '';
    var integerSplited =numArray[0].split("");

    for(var i = 0; i<integerSplited.length; i++)
    {
        integerArray+=parseFloat(integerSplited[i]);
        if(Math.abs(integerSplited.length-1-i)%3 === 0 && integerSplited.length-1-i !== 0)
        {
            integerArray+=',';
        }
    }

    if(numArray[1])
    {

        return integerArray + '.' + numArray[1];
    }else{

        return integerArray;
    }
}
module.exports = thousands_separators;

