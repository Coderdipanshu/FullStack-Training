

// console.log("print");
// console.warn("Warning");
// console.table(["one","two"]);
// console.info("info print");
// document.write("print on web");
// var name="Dipanshu";
// let age =20;
// const isCheck=true;
// console.log(name,age,isCheck);


// var name="hello";
// console.log(name)
// var name="hello1";
// console.log(name)

var age = 20;
// console.log(age)
// var age=22;
// console.log(age)

// {
//     age=22
//     console.log(age)
// }
//  console.log(age)

// let a=10;
// let b=20;
// let c=30;

// let res=a>b?(b>c?)


// let numm1=3;
// let num2=5;
// let result=  --num2 - num2++ * ( numm1  +num2);
// console.log(!result)

// let obj ={"full name":"hello",age:20}
// // console.log(obj["full name"])

// let arr=[{name:"hello"},obj];
// // console.log(arr[0]["name"]);
// console.log(arr[1]["full name"]);
// console.log(arr[1].age);


// let num1=false;
// switch (num1){
//     default:
//         console.log("default");
//         break;
//     case "false":
//         console.log("a");
//         break;

//     case "0":
//         console.log("b");
//         break;
// }

document.getElementById("contactForm")
    .addEventListener("submit", async function (e) {
        e.preventDefault();
         const formData = {
            name: document.getElementById("fullname")
                .value, email: document.getElementById("email").value,
            subject: document.getElementById("subject").value,
            message: document.getElementById("message").value
        };
        try {
            const response = await fetch("https://bcb5-2409-4085-2d9b-bad4-d358-53da-1db3-b43d.ngrok-free.app/contact",
                {
                    method: "POST", headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(formData)
                }); const result = await response.text();
            alert(result);
            if (response.ok) {
                document.getElementById("responseMessage").textContent = "Message sent successfully!";
                document.getElementById("responseMessage").style.color = "green";

                  // Append data to table
                  const formData1 = {
                    name: document.getElementById("fullname")
                        .value, email: document.getElementById("email").value,
                    subject: document.getElementById("subject").value,
                    message: document.getElementById("message").value
                };
                  
                    const response = await fetch("https://bcb5-2409-4085-2d9b-bad4-d358-53da-1db3-b43d.ngrok-free.app/contact",
                        {
                            method: "Put", headers: { "Content-Type": "application/json" },
                            body: JSON.stringify(formData1)
                        });
  const tableBody = document.querySelector("#submissionTable tbody");
  const newRow = document.createElement("tr");
  newRow.innerHTML = `
    <td>${formData1.name}</td>
    <td>${formData1.email}</td>
    <td>${formData1.subject}</td>
    <td>${formData1.message}</td>
  `;
  tableBody.appendChild(newRow);
                document.getElementById("contactForm").reset(); // Clear form after success
              } else {
                document.getElementById("responseMessage").textContent = "Failed to send message.";
                document.getElementById("responseMessage").style.color = "red";
              }


              
        }
        catch (error) {
            console.error("Error submitting form:", error);
            alert("There was an error submitting the form.");
        }
    });


