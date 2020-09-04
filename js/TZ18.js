const arr = [10, 12, 15, 21];
for (var i = 0; i < arr.length; i++) {
    setTimeout(function() {
        console.log('1 _ Index: ' + i + ', element: ' + arr[i]);
    }, 3000);
}
for (let i = 0; i < arr.length; i++) {
    setTimeout(function() {
        console.log('2 _ Index: ' + i + ', element: ' + arr[i]);
    }, 3000);
}
for (var i = 0; i < arr.length; i++) {
    let ind = i;
    setTimeout(function() {
        console.log('3 _ Index: ' + ind + ', element: ' + arr[ind]);
    }, 3000);
}