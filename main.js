const markAll = document.querySelector("#mark-all");
const numberElement = document.querySelector("#number");
const posts = document.querySelectorAll(".post");

// Asegúrate de que la función se declara antes de llamarla
const updateNotifications = () => {
  const notReadElementActual = document.querySelectorAll(".not-read");
  numberElement.innerText = notReadElementActual.length;
};

// Añade los eventos después de definir la función
posts.forEach((post) => {
  post.addEventListener("click", () => {
    post.querySelector(".status").classList.remove("not-read");
    updateNotifications(); // Llamada dentro del evento
  });
});

markAll.addEventListener("click", () => {
  const notReadElements = document.querySelectorAll(".not-read");
  notReadElements.forEach((notReadElement) => {
    notReadElement.classList.remove("not-read");
  });
  updateNotifications(); // Llamada después de marcar todos como leídos
});

// Llama a updateNotifications() para actualizar el contador inicialmente
updateNotifications();
