let friends = ['Bill', 'Mike', 'Brian', 'Jason', 'Trajan'];
let button = document.querySelector('.btn');
button.addEventListener('click', function() {

for (let i = 0; i < friends.length; i++) {
    let currName = friends[i];
    let div = document.createElement('div');
    div.className = 'friend';
    let h3 = document.createElement('h3');
    let h3Text = document.createTextNode(currName);
    h3.appendChild(h3Text);
    div.appendChild(h3);
    document.body.appendChild(div);

    for (let j = 99; j > 0; j--) {
        let num = j;
        let lessNum = j - 1;

        if (j > 1) {
            let p1 = document.createElement('p');
            let p1Text = document.createTextNode(num + ' ' + 'lines of code in the file,' + ' ' + num + ' ' + 'lines of code;' + ' ' + currName + ' ' + 'strikes one out, clears it all out,' + ' ' + lessNum + ' ' + 'lines of code in the file');
            p1.appendChild(p1Text);
            div.appendChild(p1);
        } else {
            let p2 = document.createElement('p');
            let p2Text = document.createTextNode('1 line of code in the file, 1 line of code;' + ' ' + currName + ' ' + 'strikes one out, clears it all out, no more lines of code in the file');
            p2.appendChild(p2Text);
            div.appendChild(p2);

        }
    }
}
});
