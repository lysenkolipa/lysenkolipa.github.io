
let options = document.querySelectorAll('.selectOption');
let checkbox = document.querySelectorAll('.percent');
let selected = document.querySelector('.selected');

initSearch(selected.innerText);

options.forEach(function (option) {
    option.addEventListener('click', function() {
        initSearch(this.innerText);
    });
});

checkbox.forEach(function (elem) {
    elem.addEventListener('change', function () {
        let cryptoElement = this.closest('.block');
        initElement(cryptoElement.id.toUpperCase(), selected.innerText, this.checked);
    });
});

function initSearch(currencyCode) {
    const cryptoCodeSet = ['BTC', 'LTC', 'ETH'];
    cryptoCodeSet.forEach(function (cryptoCode) {
        let checkbox = document.querySelector('#' + cryptoCode.toLowerCase() + ' .percent');
        initElement(cryptoCode, currencyCode, checkbox.checked);
    });
}

function initElement(cryptoCode, currencyCode, isPercent) {
    let query = 'https://apiv2.bitcoinaverage.com/indices/global/ticker/' + cryptoCode + currencyCode;
    fetch(query)
        .then(response => response.json())
        .then(data => {
            let selector = '#' + cryptoCode.toLowerCase();
            template(selector, currencyCode, isPercent, data);
        });
}

function template(elementSelector, currencyCode, isPercent, data) {

    const fildSet = ['hour', 'day', 'week', 'month'];
    let element = document.querySelector(elementSelector);
    let type = (isPercent) ? 'percent' : 'price';
    let sign = (isPercent) ? '%' : currencyCode;

    fildSet.forEach(function (elem) {
        element.querySelector('.' + elem + '-data').innerText = data.changes[type][elem] + sign;
    });
}