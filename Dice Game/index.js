let dieFaceFirstModel = Math.floor((Math.random() * 6) + 1)

let dieFaceSecondModel = Math.floor((Math.random() * 6) + 1)

function displayFirstDie(dieFaceFirstModel){
    if(dieFaceFirstModel === 1){
        return document.querySelector('#img1-1').removeAttribute('hidden')
    } else if( dieFaceFirstModel === 2){
        return document.querySelector('#img1-2').removeAttribute('hidden')
    } else if( dieFaceFirstModel === 3){
        return document.querySelector('#img1-3').removeAttribute('hidden')
    } else if( dieFaceFirstModel === 4){
        return document.querySelector('#img1-4').removeAttribute('hidden')
    } else if( dieFaceFirstModel === 5){
        return document.querySelector('#img1-5').removeAttribute('hidden')
    } else{
        return document.querySelector('#img1-6').removeAttribute('hidden')
    }
}

function displaySecondDie(dieFaceSecondModel){
    if(dieFaceSecondModel === 1){
        return document.querySelector('#img2-1').removeAttribute('hidden')
    } else if( dieFaceSecondModel === 2){
        return document.querySelector('#img2-2').removeAttribute('hidden')
    } else if( dieFaceSecondModel === 3){
        return document.querySelector('#img2-3').removeAttribute('hidden')
    } else if( dieFaceSecondModel === 4){
        return document.querySelector('#img2-4').removeAttribute('hidden')
    } else if( dieFaceSecondModel === 5){
        return document.querySelector('#img2-5').removeAttribute('hidden')
    } else{
        return document.querySelector('#img2-6').removeAttribute('hidden')
    }
}

function displayWinner() {
    if(dieFaceFirstModel > dieFaceSecondModel){
        return document.querySelector('h2').textContent = 'Player 1 Win'
    } else if(dieFaceFirstModel < dieFaceSecondModel){
        return document.querySelector('h2').textContent = 'Player 2 Win'
    } else{
        return document.querySelector('h2').textContent = 'Its A Draw'
    }
}

displayFirstDie(dieFaceFirstModel)
displaySecondDie(dieFaceSecondModel)
displayWinner()