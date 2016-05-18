function thousands_separators(num) {
    var numArray = num.toString().split(".");
    var integer = '';
    var integerSplited =numArray[0].split("");

    for(var i = 0; i<integerSplited.length; i++)
    {
        integer+=parseFloat(integerSplited[i]);
        if(Math.abs(integerSplited.length-1-i)%3 === 0 && integerSplited.length-1-i !== 0)
        {
            integer+=',';
        }
    }

    if(numArray[1])
    {

        return integer + '.' + numArray[1];
    }else{

        return integer;
    }
}
module.exports = thousands_separators;

