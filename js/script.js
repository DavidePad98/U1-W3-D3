const taskPage = document.getElementById("task");
taskPage.addEventListener("submit", function (e) {
  e.preventDefault();

  const submitInputTask = document.getElementById("sub-task");
  console.log(submitInputTask.value);
  // alert("Grazie per aver inviato i tuoi dati");

  const datiClient = document.createElement("div");
  datiClient.innerHTML = `
  <p>${submitInputTask.value}</p>
  <button class="button" id="cancella">Delete</button>
  `;

  const datiClientVisualizzati = document.getElementById("dati");
  datiClientVisualizzati.appendChild(datiClient);
  datiClient.addEventListener("click", function () {
    datiClient.classList.toggle("class-task");
  });

  const deleteAllData = document.getElementById("cancella");
  deleteAllData.addEventListener("click", function () {
    datiClient.remove();
  });

  submitInputTask.value = "";
});
