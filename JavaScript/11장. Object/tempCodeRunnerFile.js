const date1 = new Date();

const dateFormat = `${date1.getFullYear()}-${date1.getMonth() + 1}-${date1.getDate()} ${date1.getHours()}:${date1.getMinutes()}:${date1.getSeconds()}`;

console.log(dateFormat);