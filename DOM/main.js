// console.dir(document);
// console.log(document);
// console.log(document.body.children);
// console.log(document.body.firstChild);
// console.log(document.body.lastChild);
// console.log(document.body.firstElementChild);
// console.log(document.body.lastElementChild);

// const parent = document.querySelector('.parent');
// console.log(parent);
// console.log(parent.children);
// let HTMLCllection = parent.children
// console.log(parent.children[0].innerHTML);

// // HTMLCllection convert to array
// let HTMLCllectionArr = Array.from(HTMLCllection)
// console.log(HTMLCllectionArr);
// let map = HTMLCllectionArr.map(item => item)
// console.log(map);

// // nodelist
// let nodeList = document.querySelectorAll("div")
// console.log(nodeList);

// // nodelist convert to array
// let nodeListArr = Array.from(nodeList)
// console.log(nodeListArr[3]);
// console.log(nodeListArr);
// // nodeList.forEach((el) => console.log(el))

// const parent = document.querySelector('.parent');

// children
// console.log(parent.firstChild);
// console.log(parent.lastChild);
// console.log(parent.firstElementChild.outerHTML);
// console.log(parent.lastElementChild.textContent);

// // for loop
// for (let i = 0; i < parent.children.length; i++) {
//   const element = parent.children[i].innerHTML;
//   console.log(element);
// }

// sibling
// let div = document.body.children[0]
// console.log(div.nextElementSibling);
// console.log(div.children[0]);
// console.log(div.children[1]);
// console.log(div.children[1].previousElementSibling.textContent);

// By idsearch
// let divEl = document.getElementById('day')
// console.log(divEl.id);
// console.log(divEl.className);
// console.log(divEl.style.backgroundColor = 'green');
// console.log(divEl.getAttribute('id'));
// console.log(divEl.getAttribute('class'));

// // By className search
// let divEl2 = document.getElementsByClassName('day')
// console.log(divEl2[3]);
// console.log(divEl2[4]);

// // Bytag Name
// let a = document.getElementsByTagName('a')
// console.log(a[0].innerHTML = 'More information...');

// // Byname
// let ulName = document.getElementsByName("li")
// console.log(ulName);

// // querySelector
// let ul = document.querySelector('ul')
// let li = document.querySelectorAll('li')
// console.log(ul.style.backgroundColor = 'orange');
// console.log(li[0].style.color = 'black');
// console.log(li[1].style.color = '#455ff0');

// createElement
// const div = document.createElement("div");
// div.id = 'unique'
// div.className = 'main'
// div.setAttribute('onclick', 'remove()')
// // div.innerHTML = "code aur methodology"
// div.style.background = 'green'
// div.style.color = 'black'
// const addText = document.createTextNode('code aur methodology')
// div.appendChild(addText)

// document.body.appendChild(div)
// console.log(div);

function addLang(langName) {
  let li = document.createElement('li')
  li.innerHTML = `${langName}`
  document.querySelector('ul').appendChild(li)
}

addLang('python')

function addOptiLang(langName) {
  let li = document.createElement('li')
  li.appendChild(document.createTextNode(langName))
  document.querySelector('ul').appendChild(li)
}
addOptiLang('TypeScript')
addOptiLang('golang')

//edit 
const secondLang = document.querySelector('li:nth-child(2)')
console.log(secondLang);
secondLang.innerHTML = 'Mojo'
const newLi = document.createElement('li')
newLi.textContent = 'mojo'
secondLang.replaceWith(newLi)

// edit 
const firstLi = document.querySelector('li:first-child')
firstLi.outerHTML = '<li>Ruby</li>'

// remove
const lastLiRemove = document.querySelector('li:last-child')
lastLiRemove.remove()