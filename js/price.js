function setPrice(oldValue, newValue) {
    let oldVal = document.getElementById('oldPrice');
    let newVal = document.getElementById('newPrice');

    oldVal.innerHTML = 'R ' + oldValue;
    newVal.innerHTML = 'R ' + newValue;
}

setPrice('250.00', '160.00');