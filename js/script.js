// var l = window.history.length;
// console.log(l)

// history.back();
function mass(m) {
    let summ = 0
    m.forEach(function(i1){
        if (i1 % 2 == 0) {
            console.log(i1 )
        }
        summ = summ + i1
    });
    console.log(summ)
}
mass([1,3,4,5,6,7,7,6,346,7,346,1000])

let s = 'asd asd df'
console.log(s.split(' '))

s1 = s.split(' ')

// s1.forEach(function(elem, index) {
//     console.log(elem)
//     console.log(index)
// })

// let lid = document.querySelectorAll(".nums")
let mass2 = []
let sum = 0
let a2 = document.querySelectorAll('.nums')

for(let i = 0; i<a2.length; i++) {
    console.log(a2[i].innerHTML)
    mass2.push(parseInt(a2[i].innerHTML))
}
mass2.forEach(function(elem) {
    sum = sum + elem
})
console.log(sum)
console.log(mass2)
// let a3 = document.getElementsByClassName('nums')
// console.log(a3)
// let a4 = document.getElementsByClassName('nums').innerHTML()
// console.log(a4)

function summ() {
    el2 = document.querySelectorAll('.inp')
    let sum = 0
    for(let i = 0; i<el2.length; i++) {
        console.log(el2[i].value)
        sum = sum + parseInt(el2[i].value)
        
    }
   alert(sum)
}

el = document.querySelectorAll('.inp')
// let ins = summ(el)
// console.log(ins)

let btn = document.querySelector('.btn')
btn.onclick = summ  