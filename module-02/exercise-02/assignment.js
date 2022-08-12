const task3Element = document.getElementById('task-3');


function createAlert() {
    alert('"createAlert" has run');
}

function alertName(name) {
    alert(`'alertName' has run: ${name}`);
}

function concatenateStrings(str1, str2, str3) {
    alert(`'concatenateStrings' has run: ${str1} | ${str2} | ${str3}`);
}

createAlert();
alertName('stefano');

task3Element.addEventListener('click', createAlert)

concatenateStrings('qui', 'quo', 'qua')
