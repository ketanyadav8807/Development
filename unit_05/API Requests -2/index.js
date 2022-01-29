const btn = document.getElementById("btn");
btn.addEventListener("click" , addData);

function addData(event){
    event.preventDefault()
 let title = document.getElementById("title").value;
 let status = document.getElementById("checkbox").checked ;

 var data = {
            title: title,
            status: status
            }
 
 fetch("https://json-server-mocker-masai.herokuapp.com/tasks",{
    method: 'POSt',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
 })
}
getData()
async function getData(){
    var data = await fetch("https://json-server-mocker-masai.herokuapp.com/tasks");
    data = await data.json();
    data.forEach(function(el){
        var container = document.getElementById("container");
        var h2 = document.createElement("h2");
        h2.innerText = el.title;
        if(el.status === true){
            h2.style.color = "green";
            h2.style.border = "1px solid green";
        }
        else{
            h2.style.color = "red";
            h2.style.border = "1px solid red";
        }
        container.appendChild(h2);
    })
    // console.log(data)
}