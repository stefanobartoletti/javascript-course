const task3Element = document.getElementById('task-3');


function createAlert() {
    alert('"createAlert" has run');
}

function alertName(name) {
    alert(`'alertName' has run: ${name}`);
}

function concatenateStrings(str1, str2, str3) {
    const result = `'concatenateStrings' has run: ${str1} | ${str2} | ${str3}`;
    return result;
}

createAlert();
alertName('stefano');

task3Element.addEventListener('click', createAlert);

alert(concatenateStrings('qui', 'quo', 'qua'));
