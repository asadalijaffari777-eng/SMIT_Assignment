// Assignment 1(change text)----->

// const paragraph = document.querySelector('#message')

// function changeText (){
//     paragraph.innerHTML = 'Welcome'
// }


// Assignment 2 (input value)----->
// const nameInput = document.querySelector('#nameInput')
// const result = document.querySelector('#result')

// function inputValue(){
//     result.innerHTML = nameInput.value
// }


// Assignment 3 (chnage background color)----->
// const text = document.querySelector('#text')

// function changeBackground(){
//     text.style.backgroundColor = 'lightblue'
// }


// Assignment 4 (color of heading to red)----->
// const heading = document.querySelector('#mainTitle')

// function changeHeadingColor(){
//     heading.style.color = 'red'
// }


// Assignment 5 (show the value of input)----->
// const num1 = document.querySelector('#num1')
// const result = document.querySelector('#result')

// function showValue(){
//     result.innerHTML = num1.value
// }


// Assignment 6 (log the clicked output)----->

// function submitBtn(){

// Assignment 7 (sum 2 inputs)----->

// const first = document.querySelector('#first')
// const second = document.querySelector('#second')
// const result = document.querySelector('#sum')

// function sumNumber(){
//     console.log('Button Clicked')
// }

//     result.textContent = +first.value + +second.value
// }


// Assignment 8 (change text)----->

// const para = document.querySelector('#para')

// function changeContent(){
//     para.textContent = 'Updated Successfully'
// }


// Assignment 9 (dic styling using JS)----->

// const box = document.querySelector('#box')

// box.style.width = '200px'
// box.style.height = '200px'
// box.style.backgroundColor = 'green'


// Assignment 10 (email display in console)----->
// const email = document.querySelector('#email')

// function emailDisplay(){
//     console.log('The email is: ', email.value)
// }


// Assignment 11 (fontsize to 24px)----->

// const para = document.querySelector('#para')
// para.style.fontSize = '24px'


// Assignment 12 (greeting name)----->

// const username = document.querySelector('#username')
// const greetingDiv = document.querySelector('#greeting')
// const greetBtn = document.querySelector('#greetBtn')

// greetBtn.addEventListener('click', ()=>{
//     greetingDiv.textContent = 'Hello, '+ username.value
// })


// Assignment 13 (change image src)----->

// const profilePic = document.querySelector('#profilePic')
// const changeImage = document.querySelector('#changeImage')

// changeImage.addEventListener('click', ()=>{
//     profilePic.src = 'https://img.magnific.com/free-photo/closeup-shot-beautiful-butterfly-with-interesting-textures-orange-petaled-flower_181624-7640.jpg?semt=ais_hybrid&w=740&q=80'
// })


// Assignment 14 (change textColor using className)----->

// const highlight = document.querySelectorAll('.highlight')

// for(let i of highlight){
//     i.style.color = 'orange'
// }

// highlight.forEach(i=>{  // both for loop apply the style
//     i.style.color = 'orange'
// })


// Assignment 15 (check the checkbox condition)----->

// const checkBox = document.querySelector('#checkBox')
// const result = document.querySelector('#result')

// checkBox.addEventListener('change', ()=>{
//     checkBox.checked ? result.textContent = 'checked' : result.textContent = 'not checked'
// })


// Assignment 16 (use select property's value)----->

// const option = document.querySelector('#options')
// const selectedValue = document.querySelector('#selectedValue')

// option.addEventListener('change', ()=>{
//     selectedValue.textContent = option.value
// })


// Assignment 17 (show date and time)----->

// const showDate = document.querySelector('#showDate')
// const showResult = document.querySelector('#dateResult')

// showDate.addEventListener('click', ()=>{
//     showResult.textContent = new Date().toLocaleString()
// })


// Assignment 18 (hide paragraph)----->

// const hideBtn = document.querySelector('#hideBtn')
// const hidePara = document.querySelector('#hidePara')

// hideBtn.addEventListener('click', ()=>{
//     hidePara.style.display = 'none'
// })


// Assignment 19 (compare age)----->

// const age = document.querySelector('#age')
// const compareBtn = document.querySelector('#compareBtn')
// const result = document.querySelector('#result')

// compareBtn.addEventListener('click', ()=>{
//     age.value >= 18 ? result.textContent = 'Eligible' : result.textContent = 'Not Eligible'
// })


// Assignment 20 (clear input value)---->

// const clearSearchBox = document.querySelector('#clearSearchBox')
// const serachBox = document.querySelector('#searchBox')

// clearSearchBox.addEventListener('click', ()=>{
//     serachBox.value = ''
// })