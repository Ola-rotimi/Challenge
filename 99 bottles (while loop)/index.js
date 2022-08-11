function beerBottle(i){
    
    while (i >= 1){
        console.log(`${i} bottles of beer on the wall, ${i} bottles of beer.`)
        console.log(`Take one down and pass it around, ${i - 1} bottles of beer on the wall.`)
        i--
    }

}

beerBottle(99)