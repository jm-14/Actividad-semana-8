const DATA_URL = "json/data.json"; 

const container = document.getElementById("container"); 

function showData(dataArray) {
  container.innerHTML = ''; 

  for (const item of dataArray) {
    container.innerHTML += `<p>${item.name} ${item.lastname}</p>`;
  }
}

fetch(DATA_URL)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    showData(data.students); // Paso el array de estudiantes a la función showData
  })
  .catch(error => {
    console.error('Hubo un problema con el fetch:', error);
  });