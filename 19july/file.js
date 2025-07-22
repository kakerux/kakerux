// settimeout fn - two parameter-fn and time
// calls the fn after that time , works only one time
setTimeout(()=>console.log("inside timeout"),3000)

let frm = document.querySelector('#frm')

function showfrm() {
    frm.removeAttribute('style')
}
setTimeout(showfrm,2000)


// setinterval
// used to do task repedetly after some time
// setInterval(()=>console.log("its in setinterval"),2000)

// let count=0
// setInterval(()=>{
//     document.querySelector('#show').innerHTML= ++count
// },1000)

// setInterval(() => {
//     let date = new Date()
//     let time = date.toLocaleTimeString()
//     document.querySelector('#time').innerHTML = time
// }, 1000);



// timewatch
let c=0
function startt(){
  st =  setInterval(()=>{
        document.querySelector('#time').innerHTML=c++
    },50)
}
function resett(){
    document.querySelector('#time').innerHTML=0
}
function stopp(){
    clearInterval(st)
}
