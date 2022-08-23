function soma(x){
    return new Promise((resolve, reject)=>{
        
        setTimeout(()=>{
           resolve( x + 5000);
        },4000)

    })
}


soma(250)
.then((resultado)=>{
    console.log(`Resolvido RESULTADO: ${resultado}`)
})