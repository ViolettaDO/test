var array = [
    "string_1",
    "string_2",
    5,
    1.5,
    false,
    true
];
console.log('task_1', array);

var a3 = {
    3 : 'hello',
    'one' : 'hi',
    'testt' : 'vodoley',
    'ivan' : 'ivanov'
};

for (var a3_key in a3) {
    if (String(a3_key).length > 4)
        document.getElementById('task_2').value += `${a3_key}:${a3[a3_key]}
        `;
}


var a7 = {};
    document.getElementById('task_3_json').value = JSON.stringify(a7);
function task_3_append() {
    var key = document.getElementById('u7-key_input').value;
    var value = document.getElementById('u7-value_input').value;
    if (!key || !value)
        return alert('введите ключ или значение');
    if (a7[key])
        alert(`Элемент с ключом ${key} существует (значение ${a7[key]}), будет переписан`);
    a7[key] = value;
    document.getElementById('task_3_json').value = JSON.stringify(a7, null, ' ');
    document.getElementById('u7-key_input').value = '';
    document.getElementById('u7-value_input').value = '';
}

const A =  ['Tor', 'Lokki', 'Odin', 34, 'privet'];
document.getElementById('task_4_res').value = A.length;

var d = [0, 2, 5, -4, 6, 22, -9, -12, 13, 78];
var d_even = [];
var d_odd = [];
for (var i in d) {
    if (d[i] % 2 == 0) {
        d_even.push(d[i]);
    }
    else
        d_odd.push(d[i]);
}
task_5_res.value = JSON.stringify(d, null, ' ');
task_5_even.value = JSON.stringify(d_even, null, ' ');
task_5_odd.value = JSON.stringify(d_odd, null, ' ');

task_6_res.value = JSON.stringify(d, null, ' ');