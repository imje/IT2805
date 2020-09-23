/* Part 2 */
console.log('PART 2')
var i;
for (i=1; i<21; i++){ 
	console.log(i); //prints the integrals from 1 to 20 in the developer console.
}

/* Part 3 */
console.log('PART 3')

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
var j;

for (j=0; j<numbers.length;j++) {
    var n = numbers[j]
    if (n%3 == 0 && n%5 != 0) { //if the number is divisable by 3 and not by 5, 'eple' is printed
        console.log('eple');
    }
    if (n%5 == 0 && n%3 != 0) { //if the number is divisable by 5 and not by 3, 'kake' is printed
        console.log('kake');
    }
    if (n%3 == 0 && n%5 == 0) { //if the number is divisable by both 3 and 5, 'eplekake' is printed
        console.log('eplekake');
    }
    if (n%3 != 0 && n%5 != 0){ //if the number is not divisable by 3 and 5, the number is printed
        console.log(n);
    }
   
}

/* Part 4 */
document.getElementById('title').innerText='Hello, JavaScript'; //adds text to the h1 element

/* Part 5 */
function changeDisplay () {
    document.getElementById('magic').style.display = 'none';
}

function changeVisibility () {
    document.getElementById('magic').style.visibility='hidden';
    document.getElementById('magic').style.display = 'block';
}

function reset () {
    document.getElementById('magic').style.display = 'block';
    document.getElementById('magic').style.visibility = 'visible';
    
}

/* Part 6 */
const technologies = [
    'HTML5',
    'CSS3',
    'JavaScript',
    'Python',
    'Java',
    'AJAX',
    'JSON',
    'React',
    'Angular',
    'Bootstrap',
    'Node.js'
];

var ul = document.getElementById('tech');
var k = 0;

while (k<technologies.length) { //adds the elements in technologies to the list with id 'tech' 
    var li = document.createElement('li'); 
    list_element = document.createTextNode(technologies[k]);
    li.appendChild(list_element); 
    ul.appendChild(li);
    k++;
}
