function task_1_do() {
    task_1_res.value = task_1_in.value;
}

function task_2_do() {
    task_2_big.value = parseFloat(task_2_one.value) > parseFloat(task_2_two.value) ? task_2_one.value: task_2_two.value;
}
function task_3_do() {
    task_3_big.value = parseFloat(task_3_one.value) > parseFloat(task_3_two.value) ? task_3_one.value: task_3_two.value;
}

function task_4_do() {
    task_4_rnd.value = Math.random() * (task_4_up.value - task_4_low.value) + parseFloat(task_4_low.value);
}