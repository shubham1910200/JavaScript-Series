# Project related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 1

```javascript

const button = document.querySelectorAll('.button')
const body = document.querySelector('body');

for(let i = 0;i<button.length;i++)
{
  button[i].addEventListener('click',(e)=>{
    console.log(e)
    console.log(e.target)
    const color = e.target.id
    body.style.backgroundColor =  color
 })
}
```

## Project 2 solution 
```javascript
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (results === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `please give valid height ${height} `;
  } else if (results === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `please give valid weight ${weight} `;
  } else {
    const bmi = (weight / ((height * height) / 1000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;
    if (bmi < 18.6) {
      results.innerHTML = `<span>Under Weight</span>`;
    } else if (bmi > 18.5 && bmi < 24.9) {
      results.innerHTML = `<span>Normal Range </span>`;
    } else if (bmi > 24.9) {
      results.innerHTML = `<span>Overweight </span>`;
    }
  }

  console.log(results);
});

```
# Project -3 
```javascript

 const time = document.querySelector('#clock');

setInterval(() => {
  const date = new Date();
  time.innerHTML = date.toLocaleTimeString();
}, 1000);

```
# Project -6
```javascript
// generate rando color

const randomColor = function () {
  const hex = '0123456789ABCDEF';

  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let intervalId;
const body = document.querySelector('body');
const startChangingColor = function () {
  intervalId = setInterval(changeBgColor, 1000);
  function changeBgColor() {
    body.style.backgroundColor = randomColor();
  }
};
document.querySelector('#start').addEventListener('click', startChangingColor);
const stopChangingColor = function () {
  clearInterval(intervalId);
};
document.querySelector('#stop').addEventListener('click', stopChangingColor);

```

# Project 5 solution
```Javascript
  const key = document.querySelector('.key');

window.addEventListener('keydown', (e) => {
  key.innerHTML = `
    <div class = 'color'>
    <table>
    <tr>
    <th>Key</th>
    <th>keycode</th>
    <th>Code</th>
    </tr>
    <tr>
    <td>${e.key ===' '?'Space':e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
    </tr>
    </table>
    </div>
    `;
});

```