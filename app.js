let friends = ['Bill', 'Mike', 'Brian', 'Jason', 'Trajan'];

for (let i = 0; i < friends.length; i++) {
    let currName = friends[i];

    for (let j = 99; j > 0; j--) {
        let num = j;
        let lessNum = j - 1;

        if (j > 1) {
            console.log(num + ' ' + 'lines of code in the file,' + ' ' + num + ' ' + 'lines of code;' + ' ' + currName + ' ' + 'strikes one out, clears it all out,' + ' ' + lessNum + ' ' + 'lines of code in the file');
        } else {
            console.log('1 line of code in the file, 1 line of code;' + ' ' + currName + ' ' + 'strikes one out, clears it all out, no more lines of code in the file');
        }
    }
}