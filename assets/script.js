function iplus(n) {
    let mae = document.getElementsByClassName('dmother')[n];
    let icon = document.getElementsByClassName('plusicon')[n];
    
    let escondido = mae.lastElementChild.style.display === '' || mae.lastElementChild.style.display === 'none'

    if(escondido) {
        mae.lastElementChild.style.display = 'block'
        icon.src = 'assets/images/icon-minus.svg'
    } else {
        mae.lastElementChild.style.display = 'none'
        icon.src = 'assets/images/icon-plus.svg'
    }
}





/*function carregar() {

    var subitem1 = document.getElementById('sub-item-1')
    var icon = document.querySelector('img.plusicon')
    if (subitem1.style.display == 'none') {
        subitem1.style.display = 'block'
        icon.src = 'assets/images/icon-minus.svg'
    } else {
        subitem1.style.display = 'none'
        icon.src = 'assets/images/icon-plus.svg'
    }
}

function iplus() {
    carregar()
}
*/
//I used the "carregar()" function because using just "iplus()" the first click was not activating the operation, note: starting now