let temp = prompt('Абанын температурасын киргизиңиз (°C):');

if (temp < 0) {
    alert('Суук ❄')
} else if (temp >= 0 && temp <= 25) {
    alert('Жакшы 😊')
} else {
    alert('Ысык 🔥')
}
