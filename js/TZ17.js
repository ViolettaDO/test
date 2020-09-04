function task_1_do() {
    task_1_res.value = task_1_in.value;
}

function task_2_do() {
    task_2_big.value = MaxOrRandom(parseFloat(task_2_one.value), parseFloat(task_2_two.value));
}
function task_3_do() {
    task_3_big.value = MaxOrRandom(parseFloat(task_3_one.value), parseFloat(task_3_two.value));
}

function MaxOrRandom(first, second) {
    if (first == second)
        return Math.random() < 0.5 ? first : second;
    return first > second ? first : second;
}



function task_4_do() {
    task_4_rnd.value = Random(task_4_low.value, task_4_up.value);
}

function Random(min, max) {
    return Math.random() * (max - min) + parseFloat(min);;
}