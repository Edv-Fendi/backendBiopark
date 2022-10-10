const vetor = []
const impares=[]

for (let i = 0; i < 100; i++) {
    vetor.push(i)
}
const multiplos = vetor.map(function(item){
    return item * 3
})

multiplos.forEach(function(item){
    if (item % 2!=0) {
        console.log(item)
    }
})





