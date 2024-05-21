function askName() {
    let name = document.getElementById("name").value;
    if (name == '') {
        document.getElementById("error-name").innerText = 'Ошибка! Введите Ваше имя!';
        return;
    }
    str = `Привет, ${name}!`;
    document.getElementById("result-name").innerText = str;
    document.getElementById("name").value = '';
    document.getElementById("error-name").innerText = '';

}

function askbrendName() {
    let brend = document.getElementById("brend").value;
    if (brend == '') {
        document.getElementById("error").innerText = 'Ошибка! Введите название ручки!';
        return;
    }
    if ((brend == 'Bic') || (brend =='ErichKrause') || (brend =='Beifa') || (brend =='Brauberg') || (brend =='Centrum')) {
        document.getElementById("result").innerText = `${brend} - хороший выбор!`;
        document.getElementById("brend").value = '';
        document.getElementById("error").innerText = '';
        return
    }
    str = `${brend} - главное чтобы хорошо писала!`;
    document.getElementById("result").innerText = str;
    document.getElementById("brend").value = '';
    document.getElementById("error").innerText = '';

}
