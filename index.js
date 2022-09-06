let str='';
const calc=(num)=>{
    
    if(num != '=')
    {
        str+= num;
        document.getElementById('textarea').innerHTML = str;
    }
    else{
       PEMDAS(str);
    }
    
}


const PEMDAS=(value)=>
{
  
    let regex = /\W/g;
    let op = value.split(regex);
    let opr = value.match(regex);
    const result = operation(op,opr);
    document.getElementById('textarea').innerHTML =result;
}

const operation = (op,opr)=>
{
 console.log(op,opr['+']);
 let calc = 0;
 //multiplication
 for(;;)
{
 let i =  opr.findIndex(x=>x == '*');
 if(i==-1)
 break;
 calc = op[i] * op[i+1];
 opr.splice(i,1);
 op.splice(i,2,calc)
 console.log(opr,op);
}
calc = 0;
//addition
for(;;)
{
 let i =  opr.findIndex(x=>x == '+');
 if(i==-1)
 break;
 calc = parseInt(op[i]) + parseInt(op[i+1]);
 opr.splice(i,1);
 op.splice(i,2,calc)
 console.log(opr,op);
}
calc = 0;
//subtraction
for(;;)
{
 let i =  opr.findIndex(x=>x == '-');
 if(i==-1)
 break;
 calc = op[i] - op[i+1];
 opr.splice(i,1);
 op.splice(i,2,calc)
 console.log(opr,op);
}

 str='';
 return op[0];
}