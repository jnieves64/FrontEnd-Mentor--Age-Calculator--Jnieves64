const form = document.getElementById('form-age');

const input = document.getElementsByTagName('input');
const label = document.getElementsByTagName('label');

const dayInput = document.getElementById('day');
const monthInput = document.getElementById('month');
const yearInput = document.getElementById('year');

const errorMsgDay = document.getElementById('error-day');
const errorMsgMonth = document.getElementById('error-month');
const errorMsgYear = document.getElementById('error-year');

const submitBtn = document.getElementById('send');

const msgRequired = 'This field is required';

const dayResult = document.getElementById('day-result');
const monthResult = document.getElementById('month-result');
const yearResult = document.getElementById('year-result');

let invalid = (msg, spanTarget, labelTarget, inputTarget) => {
    spanTarget.innerHTML = msg;
    labelTarget.style.color = '#f30505';
    inputTarget.style.borderColor = '#f30505';
}

let calcularEdad = (birthDay, birthMonth, birthYear) => {

    let fechaActual = new Date();
    let fechaNacimiento = new Date(birthYear, birthMonth - 1, birthDay);

    let diferencia = fechaActual.getTime() - fechaNacimiento.getTime();

    let dias = diferencia / (1000 * 60 * 60 *24);
    let anios = Math.floor(dias / 365);
    let meses = Math.floor((dias % 365) / 30);
    let diasRestantes = Math.floor((dias % 365) % 30);

    dayResult.innerHTML = diasRestantes;
    monthResult.innerHTML = meses;
    yearResult.innerHTML = anios;

}

dayInput.addEventListener('input', () => {
    errorMsgDay.innerHTML = '';
    label[0].style.color = '#6c6c6c';
    dayInput.style.borderColor = '#dddddd';
});

monthInput.addEventListener('input', () => {
    errorMsgMonth.innerHTML = '';
    label[1].style.color = '#6c6c6c';
    monthInput.style.borderColor = '#dddddd';
})

yearInput.addEventListener('input', () => {
    errorMsgYear.innerHTML = '';
    label[2].style.color = '#6c6c6c';
    yearInput.style.borderColor = '#dddddd';
})

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    if (dayInput.value === '') {
        return invalid(msgRequired, errorMsgDay, label[0], dayInput);
    }

    if (monthInput.value === '') {
        return invalid(msgRequired, errorMsgMonth, label[1], monthInput);
    }

    if (yearInput.value === '') {
        return invalid(msgRequired, errorMsgYear, label[2], yearInput);
    }

    else {
        if (dayInput.value < 1 || dayInput.value > 31 ) {
            return invalid('Must be a valid date', errorMsgDay, label[0], dayInput);
        }

        if (monthInput.value < 1 || monthInput.value > 12 ) {
            return invalid('Must be a valid month', errorMsgMonth, label[1], monthInput);
        }

        if (yearInput.value > 2023) {
            return invalid('Must be in the past', errorMsgYear, label[2], yearInput);
        } 

        else {
            calcularEdad(dayInput.value, monthInput.value, yearInput.value);
        }
    }
});
