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