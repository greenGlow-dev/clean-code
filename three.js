// number three 

//code:

 var c = Math.random();
 var d = Math.random();
 var  a = {foo:'something1', bar:'something2'};

 c > d ? a.foo ='apple' : a.bar = 'banana';

 console.log(a.foo)

// clean code:

a  = {[c>d ? 'foo':'bar']:'apple'};


