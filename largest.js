let a,b,c;
function large(a,b,c)
{
    if(a>b&&a>c)
    console.log("a is bigger");
    else if(b>c&&b>a)
    console.log("b is bigger ");
    else{
        console.log("c is bigger");
    }
}
large(10,20,30);