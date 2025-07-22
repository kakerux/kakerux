// cntrl c stops the json server

// if you edit the json file you have to restart it or it will not work 

async function fet() {
    let res = await fetch("http://localhost:3000/username")
    let data = await res.json()         //the data comes in string format
    // console.log(data)

    let st = data.map((item)=>`
    <tr>
    <td>${item.id}</td>
    <td>${item.name}</td>
    <td>${item.age}</td>
    <td>${item.contact}</td>
    <td>${item.city}</td>
    <td><button onclick="mydelete('${item.id}')" >Delete</button></td>
    <td><button onclick="myedit('${item.id}')" >Edit data</button></td>
    </tr>
    `).join(" ")
    document.querySelector('#storedata').innerHTML=st
}
fet()

async function myedit(id){
    let res = await fetch(`http://localhost:3000/username/${id}`)
    let userdata = await res.json()
    // console.log(userdata)
    let userinput = `<h1> EDIT YOUR DATA </h1>
    <input type="text" value="${userdata.id}" id="id1" readonly /> <br><br>
    <input type="text" value="${userdata.name}" id="name1" /> <br><br>
    <input type="text" value="${userdata.age}" id="age1" /> <br><br>
    <input type="text" value="${userdata.contact}" id="contact1" /> <br><br>
    <input type="text" value="${userdata.city}" id="city1" /> <br><br>  
    <input type="submit" onclick="finaledit('${userdata.id}')" /> 
    `

    document.querySelector('#editfrm').innerHTML = userinput
}




const finaledit = (id) =>{
   alert(id)
    let usereditdata = {
        id:document.querySelector('#id1').value,
        name:document.querySelector('#name1').value,
        age:document.querySelector('#age1').value,
        contact:document.querySelector('#contact1').value,
        city:document.querySelector('#city1').value
    }

    fetch(`http://localhost:3000/username/${id}`,{
        method:'PUT',
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify(usereditdata)
        
    })
    .then(()=>alert("edit successfully...!!!!"))
  
  
}

// http://localhost:3000/username/${id} cause when you type id in that url of
//  database it shows the data of that id
// .then()works when the process is completed 
function mydelete(id){
    fetch(`http://localhost:3000/username/${id}`,{         
        method:"DELETE"
    }).then((e)=>alert("Deleted"))
}

function postdata(){
    let frmdata = {
        name:document.querySelector('#name').value,
        age:document.querySelector('#age').value,
        contact:document.querySelector('#contact').value,
        city:document.querySelector('#city').value,
    }

    fetch('http://localhost:3000/username',{
        method:"POST",
        headers:{
            'Content-type' :'application/json'
        },
        body:JSON.stringify(frmdata)
    })
}


