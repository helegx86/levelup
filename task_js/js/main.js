function myLog(msg)
{
	document.write("<br>");
	document.write(msg);
	console.log(msg);
}

 //Линейные алгоритмы
 function swapElements()
 {   
    myLog(`--------------------swapElements----------------------`);

      let a = 5;
      let b = 17;
      myLog(`a = ${a} b = ${b}`);

      let temp = a;
      a = b
      b = temp;

      myLog(`Swap a  = ${a} b = ${b}`); 
 }

 function hypotenuse(a, b)
 {
    myLog(`--------------------hypotenuse----------------------`);
    
    myLog(`a = ${a} b = ${b}`); 
    myLog(`Sqrt ${Math.sqrt(a*a + b*b)}`);  
 }


 function lineEquation(x1, y1, x2, y2)
 {
    myLog(`--------------------lineEquation----------------------`);
    
    myLog(`x1 = ${x1} y1 = ${y1} x2 = ${x2} y2 = ${y2}`); 
    let k = (y1 - y2) / (x1 - x2);
    let b = y2 - k * x2;

    myLog(`y = ${k} * x  + ${b}`); 
 }


//Условия
 function rnd(min, max) 
 {  
    return Math.floor(Math.random() * (max - min + 1) ) + min; 
}  
  
 function findMax()
 {

    myLog(`--------------------findMax----------------------`);

    let a = rnd(-30,30);
    let b = rnd(-30,30);
    let c = rnd(-30,30);

    let mult, sum;

    myLog(`a = ${a} b = ${b} c = ${c}`);
    myLog(`Multireault ${mult = a*b*c}`);
    myLog(`SumResult ${sum = a+b+c}`);
    myLog(`Max  ${ mult>sum ? mult:sum  }`);
       
 }


 function divide()
 { 
    myLog(`--------------------divide----------------------`);

    let a = rnd(-300,300);
    let b = rnd(-300,300);
   
    if(b == 0){
        myLog(`a=${a} не делится на b=${b}`);
        return;
    } 

    myLog(`a = ${a} b = ${b}`);  
    myLog(`Остаток = ${a%b}`);
    myLog(`Частное = ${a/b}`); 
 } 

 function findQuarter()
 { 
    myLog(`--------------------findQuarter----------------------`);

    let x = rnd(-11,11);
    let y = rnd(-11,11); 

    myLog(`x = ${x} y = ${y}`);  

    if(x == 0 && y == 0)
    {
      myLog(`Это центр!`);
      return; 
    }

    if(x > 0 && y > 0 )
    {
        myLog(`1 четверть`);
    }
    else if(x < 0 && y > 0)
    {
        myLog(`2 четверть`);
    }
    else if(x < 0 && y < 0)
    {
        myLog(`3 четверть`);
    }
    else  
    {
        myLog(`4 четверть`);
    }  
 }


 function inCircle()
 { 
    myLog(`--------------------inCircle----------------------`);

    let x = rnd(-16,16);
    let y = rnd(-16,16);  
    let r = rnd(0, 11); 

    myLog(`x = ${x} y = ${y} radius = ${r}`);  

    let pointRadius = Math.sqrt(x*x + y*y);

    myLog(`${ pointRadius > r ? "Не принадлежит" : "Принадлежит"}`);  
    
 }

 function sqrt()
 {
   myLog(`--------------------sqrt----------------------`);

   let a = rnd(-16,16);
   let b = rnd(-16,16);  
   let c = rnd(-16,16);  

   myLog(`a = ${a} b = ${b} c = ${c}`);  
   if(a==0)
   {
      myLog(`a Не может быть равен 0`);
      return;
   }

   let d = b*b - 4*a*c; 
   
    if(d > 0)
    {
      return  myLog(`x1 = ${  ( -1*b + Math.sqrt(d) )/ (2*a)  } x2 = ${  ( -1*b - Math.sqrt(d) )/ (2*a)  }`);  
    }
    else if(d < 0)
    {
      return  myLog(`x1,x2 = ${   -1*b/ (2*a)  }`);  
    }
    else
    {
      myLog(`Решений нет`);
    } 
 }

//Циклы
 function fact()
 {
   myLog(`--------------------fact----------------------`); 

   let n = rnd(1,23);
   myLog(`n = ${n}`);  

   let nn = 1;
   for(i=1; i < n+1; ++i)
   {
      nn = nn*i;
   }

   myLog(`n! = ${nn}`);
 }



 function functionValues()
 {
   myLog(`--------------------functionValues----------------------`); 

   let min = 1;
   let max = 45;
   let step = 2;

   myLog(`min = ${min} max = ${max} step = ${step}`);   

   let x = min;
   while(x <= max)
   {
      let y = -1 * 0.23 * x * x + x 
      myLog(`y = ${y}, x = ${x}`);   
      x += step
   } 
 }
 
 function naturalNumberEvidence()
 {
   myLog(`--------------------naturalNumberEvidence----------------------`); 

   let digit = rnd(10000 , 100000000); 

   myLog(`digit = ${digit}`);   


   let sum = 0;
   let mult = 1;
   while(true)
    {
         let res = digit % 10;
        
         digit = (digit - res) / 10;
         sum += res;
         mult *= res;

         myLog(`res = ${res}`);  

         if(digit < 1)
         {
            break;
         } 
    }

    myLog(`sum = ${sum}  mult = ${mult}`);   
 }

 //1+2+...+n = n(n+1)/2
 function set()
 {
   myLog(`--------------------Set----------------------`); 
 
   let n = rnd(1 , 100000000); 

   n1 = n*(n+1)/2;

   let sum = 0;
   for(i=1; i< n + 1; i++)
   {
      sum+=i;
   }

   if(n1==sum)
   {
      myLog(`Равно при N=${n}`);   
   }
   else
   {
      myLog(`Не равно при N=${n}`);   
   } 
 }
 
 function fibonachi()
 {
   myLog(`--------------------Fibonachi----------------------`); 

   let n = rnd(1 , 100); 
   
   if (n <= 2)
   {
      myLog(`${1}`);   
      return;
   } 
   
   let x = 1;
   myLog(`${1}`);  
   let y = 1;
   myLog(`${1}`);  
   let ans = 0;
   for (var i = 1; i < n; i++)
   {
     ans = x + y;
     x = y;
     y = ans;
     myLog(`${ans}`);  

   }
 
}

//Одномерные массивы
function massif()
{
     myLog(`--------------------massif----------------------`); 

     let n = 20;
     let m = [];

     let index = 0;
     let value = 0;
     let temp = 0;
     for(i=0; i<n; i++)
     {
         value = m[i] = rnd(-100,100); 
         myLog(`${value}`);  
         if(temp < value)
         {
            temp = value;
            index = i;
         }
     }
     myLog(`Max value = ${temp} Index =${index} `);    
}

function reverse()
{
     myLog(`--------------------reverse----------------------`); 

     let n = 20;
     let m = []; 
  
     for(i=0; i<n; i++)
     {
         m[i] = rnd(-100,100); 
         myLog(`${ m[i]}`);   
     }
     myLog(`-------------------------------`);

     for(i=0; i<n; i++)
     {
         let a = m[i];
         let b = m[n-1-i]

         m[i] = b;
         m[n-1-i] = a; 

         if(i > (n-1-i))
         {
            break;
         } 
     }

     for(i=0; i<n; i++)
     {
       myLog(`${ m[i]}`);   
     }
    
}

function sideReverse()
{
     myLog(`--------------------sideReverse----------------------`); 

     let m = [1,2,3,4,5,6,7,8,9]; 
     
     for(i=0; i<m.length; i++)
     {
         myLog(`${ m[i]}`);   
     }

     let d = m.length%2;
     let center = (m.length - m.length%2)/2 + d;

     for(i=0; i<m.length; i++)
     {  
         if(center + i == m.length)
         {
            break;
         } 
        let a =  m[i];
        m[i] = m[center + i];  
        m[center + i] = a; 
       
     } 
     myLog(`----result-----`); 
     for(i=0; i<m.length; i++)
     {
         myLog(`${ m[i]}`);   
     }
}

function middleSum()
{
     myLog(`--------------------middleSum----------------------`);
     
     let m = [1,2,3,4,5,6,7,8,9,10,11,12]; 
     
     let sum = 0;
     for(i=0; i<m.length; i++)
     {
         myLog(`${m[i]}`); 
         
         sum+=m[i]
     }
     
     let middle = sum/m.length;

     myLog(`Среднее ${middle}`);  

     for(i=0; i<m.length; i++)
     {
        if( m[i] > middle)
        {
            myLog(`Элемент ${ m[i] }`);  
        }
     }
}


function maxSum()
{
     myLog(`--------------------MaxSum----------------------`);
     
     let n = 10;
     let m = []; 
  
     for(i=0; i<n; i++)
     {
         m[i] = rnd(0,30); 
         myLog(`${ m[i]}`);   
     }
     myLog(`-------------------------------`);


     let max = m[0];
     let min = m[0];
     let tmpIndex = [0,0];
     for(i=0; i<n; i++)
     { 
         if(m[i] > max)
         {
            max = m[i];
            tmpIndex[0] = i;
         }
         if(m[i] < min)
         {
            min = m[i];
            tmpIndex[1] = i;
         }
     }
     myLog(`Max ${max}`);
     myLog(`Min ${min}`);

     let sum = 0;
     let startIndex = tmpIndex[0];
     let endIndex = tmpIndex[1];
     if(tmpIndex[0] > tmpIndex[1])
     {
         startIndex = tmpIndex[1];
         endIndex = tmpIndex[0];
     }

     for(i = startIndex + 1; i < endIndex; i++)
     {
         sum+=m[i] 
     }
     myLog(`Sum ${sum}`);

}


function startTests()
{
	 swapElements();
	 hypotenuse(8,4);
	 lineEquation(3.3, -1.5, -8.6, 5);
	 findMax();
	 divide();
	 findQuarter();
	 inCircle();
	 sqrt();
	 fact();
	 functionValues();
	 naturalNumberEvidence();
	 set();
	 fibonachi();
	 massif();
	 reverse();
	 sideReverse();
	 middleSum();
	 maxSum();
}

