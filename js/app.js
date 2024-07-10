const submitBtn = document.querySelector("#submit")
const body = document.getElementById("employeeList")
const form = document.querySelector("form")

// function confirmDelete(){
//     const popup = confirm("Are you sure you want to delete?");
//     if (popup === "OK"){
//         body.remove(row) 
//     }else{
//         return false
//     }
// }

form.addEventListener("submit", (e)=>{
    e.preventDefault()
    const formData = new FormData(form)
    const firstName = formData.get("firstname")
    const lastName = formData.get("lastname")
    const email = formData.get("email")
    const hireDate = formData.get("hire_date")
    const photo = formData.get("photo")
    let row = document.createElement("tr");
    

    row.innerHTML = `
    <td> <img src="../images/${photo.name}" class="img"></td>
    <td>${firstName}</td>
    <td>${lastName}</td>
    <td>${email}</td>
    <td>${hireDate}</td>
    <td><button id="delBtn" onclick="confirmDelete()">Delete</button></td>
    `


    body.append(row)
    const delBtn = document.getElementById("delBtn")

    delBtn.addEventListener("click", ()=>{
        body.remove(row)
        // const popup = confirm("Are you sure you want to delete this employee?")
        // if (popup){
            
        // }
    })
    document.getElementById("form").reset();
})

function clearInputs() {
    document.getElementById("form").reset();
}
