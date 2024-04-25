function fibo() {
    let a=2;
    let b=3;
    
    for(let i=1;i<=6;i++)
    {
        let c=a+b;
        a=b;
        b=c;
    console.log(c);

    }

}
fibo();