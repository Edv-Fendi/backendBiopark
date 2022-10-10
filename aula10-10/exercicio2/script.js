const vetor = []
for (let i = 0; i < 100; i++) {
    vetor.push(i)
}

const testing = vetor.filter(function(item){
    return item > 50

})

console.log(testing)




