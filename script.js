function fetchData() {
    const responseMessage = document.getElementById("responseMessage");
    const table = document.getElementById("submissionTable");

    fetch("https://bcb5-2409-4085-2d9b-bad4-d358-53da-1db3-b43d.ngrok-free.app/contact", {
        method: "PUT"  // Using GET to fetch data
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }
        return response.json();
    })
    .then(data => {
        // Clear existing rows
        const oldTbody = table.querySelector("tbody");
        if (oldTbody) {
            table.removeChild(oldTbody);
        }

        const newTbody = document.createElement("tbody");

        data.forEach(item => {
            const row = document.createElement("tr");

            const fullNameCell = document.createElement("td");
            fullNameCell.textContent = item.name || "";
            row.appendChild(fullNameCell);

            const emailCell = document.createElement("td");
            emailCell.textContent = item.email || "";
            row.appendChild(emailCell);

            const subjectCell = document.createElement("td");
            subjectCell.textContent = item.subject || "";
            row.appendChild(subjectCell);

            const messageCell = document.createElement("td");
            messageCell.textContent = item.message || "";
            row.appendChild(messageCell);

            newTbody.appendChild(row);
        });

        table.appendChild(newTbody);

        responseMessage.textContent = "Data fetched successfully!";
        responseMessage.style.color = "green";
    })
    .catch(error => {
        console.error("Error fetching data:", error);
        responseMessage.textContent = "Failed to fetch data.";
        responseMessage.style.color = "red";
    });
}
