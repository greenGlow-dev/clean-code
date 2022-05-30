foo = false

//code

 if(!foo) {
    foo = 'apple'
 } 

bar(foo,kip);

//clean code

bar(foo ||'apple', kip);
