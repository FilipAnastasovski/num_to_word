function DigitsInArry (number)  
{    
    let arryOfdigits = [];
    while (number !== 0) 
    {
        let units = number % 10;
        arryOfdigits.unshift(units);
        number = Math.floor(number / 10)
    }
    return arryOfdigits;
}

 
function naming2digitnumber(a , b)  
{
    let string ="";
    let wholenumber = (a*10)+b;
    
    if(wholenumber <20)            
    { 
        if(number < 20)    
        {string += oneTo19[wholenumber-1];  return string;}
        else
        {
            if(numberOfcycle === 1)
            { string +=  " " + oneTo19[wholenumber-1]; return string; }
            else
            { string += "i" + oneTo19[wholenumber-1];  return string; }
        }
    }
    else
    {
        if(b === 0 )              
        {
            if(number < 100)    
            {
            string += decade[a-2];
            return string;
            }
            else
            { 
                if(numberOfcycle === 1) {  string += " " + decade[a-2];  return string; }
                else {  string +="i" + decade[a-2];  return string;}
            }
        }
        else
        {
            string += decade[a-2] + "i" + oneTo19[b-1]; 
            return string;
        }
    } 
    
}


function naming2digitnumberForiljadi(a , b)   
{
    let string ="";
    let wholenumber = (a*10)+b;

    if(wholenumber <20)
    { 
        
        switch (b)               
        {
            case 1:  return string+="edna";
            case 2:  return string+="dve";
            default: { string = " "+ oneTo19[wholenumber-1]; return string;}
        }
    }
    else
    {
        if(b === 0 )
        {
            if(number < 100)    
            {
            string += decade[a-2];
            return string;
            }
            else
            {
                if(numberOfcycle === 1) {  string += " " + decade[a-2];  return string; }
                else {  string +="i" + decade[a-2];  return string;}
            }
        }
        else
        {
            string += decade[a-2] + "i" + oneTo19[b-1];
            return string;
        }
    } 
}

 
function naming3digitnumber(x , y, z) 
{
    let string ="";
    numberOfcycle +=1;
   
    if(x+y+z === 0)        
    { return string; }
    else
    {
        
        if((y === 0) && (z === 0))    
        {
            if(number < 1000)
            {
                string += hundrets[x-1];
                return string;
            }
            else
            {
                if(numberOfcycle === 1) { string += " " + hundrets[x-1]; return string; }
                else { string += "i" + hundrets[x-1]; return string; }
            }
        }
        else
        {
            
            if(x === 0 )      
            {
                string += naming2digitnumber(y,z);
                return string;
            }
            else
            {
                string += hundrets[x-1] +" " + naming2digitnumber(y,z);
                return string;
            }
        }
    }
}

function naming3digitnumberForIljadi(x , y, z) 
{
    let string ="";
    numberOfcycle +=1;

    if(x+y+z === 0)
    { return string; }
    else
    {
        if((y === 0) && (z === 0))
        {
             if(number < 1000)
            {
                string += hundrets[x-1];
                return string;
            }
            else
            {
                if(numberOfcycle === 1) { string += " " + hundrets[x-1]; return string; }
                else { string += "i" + hundrets[x-1]; return string; }
            }
        }
        else
        {
            if(x === 0 )
            {
                string += naming2digitnumberForiljadi(y,z);
                return string; 
            }
            else
            {
                if((y < 2) || (z === 0))
                {
                    string += hundrets[x-1] + naming2digitnumberForiljadi(y,z);
                    return string;
                }
                else
                {
                    string += hundrets[x-1] + " " + naming2digitnumberForiljadi(y,z);
                    return string;
                }
            }
        }
    }
}

function NumberToWords()
{
    let r = prompt("vnesi broj");
    number = parseInt(r);
    numberOfcycle=0;
    
    if(isNaN(number))        
    {   document.getElementById("number").innerHTML = "Incorect input!  Check your number";}
    else
    {
        let numberToWords = "";
        let array= DigitsInArry(number);

        switch (array.length % 3)               
        {
            case 0: break;
            case 1: array.unshift(0,0); break;
            case 2: array.unshift(0); break;
        }
        
        let numberOfcycle = array.length / 3;    
        let counterForIljada = array.length / 3;
    
        for (let index = 0; index < numberOfcycle; index++) 
        {
            
            let first_digit = array.shift();
            let second_digit = array.shift();
            let third_digit = array.shift();
            
           
            if(counterForIljada === 2)
            {   
                if(third_digit === 1)
                {
                    numberToWords +=  naming3digitnumberForIljadi (first_digit, second_digit, third_digit)+ " "; 
                    if(first_digit + second_digit + third_digit !== 0)   
                    {numberToWords += cardinal[numberOfcycle-index]+ " ";}  
                }
                else
                {
                    numberToWords +=  naming3digitnumberForIljadi (first_digit, second_digit, third_digit)+ " ";
                    if(first_digit + second_digit + third_digit !== 0)
                    { numberToWords += suffixCardinal[numberOfcycle-index]+ " ";} 
                }
            }
           
            else
            {
                if(third_digit === 1)
                {
                    numberToWords += naming3digitnumber (first_digit, second_digit, third_digit)+ " ";
                    if(first_digit + second_digit + third_digit !== 0)
                    { numberToWords += cardinal[numberOfcycle-index]+ " ";} 
                }
                else
                {
                    numberToWords += naming3digitnumber (first_digit, second_digit, third_digit)+ " ";
                    if(first_digit + second_digit + third_digit !== 0)
                    {numberToWords += suffixCardinal[numberOfcycle-index]+ " ";} 
                }
            }
            counterForIljada -=1;
        }
        
        if(numberToWords !== "")
        { document.getElementById("number").innerHTML = `Your imput ${number}  the word is <br/> ${numberToWords}`;} 
        else
        { document.getElementById("number").innerHTML = `Your imput ${number}  the word is <br/> nula`; } 
    }
} 


let oneTo19 = ["eden", "dva", "tri", "chetiri", "pet", "shes","sedum", 
"osum", "devet", "deset", "edinaeset", "dvanaeset", 
"trinaeset", "chetirinaest","petnaeset", "shesnaeset",
"sedumnaeset", "osumnaeset", "devetnaeset",]

let decade = ["dvaeset", "trieset", "chetirieset", "peeset", "sheeset", "sedumdeset", "osumdeset", "devedeset"];
let hundrets = ["sto", "dvesta" , "trista", "chetrsto", "petsto", "shesto", "sedumsto", "osumsto", "devetsto" ]


let cardinal = ["", "","iljada","milion", "bilion", "trilion", "kvadrilion"];
let suffixCardinal = ["", "", "iljadi","milioni","bilioni","trilioni","kvadrilioni"]; 

let number;  
let numberOfcycle =0;
