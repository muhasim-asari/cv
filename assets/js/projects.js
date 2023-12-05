// Fungsi untuk mendapatkan data JSON dari file
function fetchData(filePath) {
  return fetch(filePath)
    .then((response) => response.json())
    .catch((error) => console.error("Error fetching data:", error));
}

// Fungsi untuk merender data JSON ke dalam HTML
function renderProjects(data) {
  var container = document.getElementById("projects-container");

  data.forEach(function (project) {
    var projectItem = document.createElement("div");
    projectItem.className = "col-md-4";
    projectItem.innerHTML = `
              <div data-aos="zoom-in">
                  <div class="project-item shadow-box">
                      <a class="overlay-link" href="work-details.html"></a>
                      <img src="assets/images/bg1.png" alt="BG" class="bg-img" />
                      <div class="project-img">
                          <img src="${project.images[0].url}" alt="Project" /> <!-- Updated to use images array -->
                      </div>
                      <div class="d-flex align-items-center justify-content-between">
                          <div class="project-info">
                              <p>${project.type}</p>
                              <h1>${project.name_project}</h1>
                          </div>
                          <a href="work-details.html" class="project-btn">
                              <img src="assets/images/icon.svg" alt="Button" />
                          </a>
                      </div>
                  </div>
              </div>
          `;

    container.appendChild(projectItem);
  });

  // Inisialisasi AOS setelah rendering selesai
  AOS.init();
}

// Panggil fungsi untuk mendapatkan data dan merender
fetchData("assets/json/works.json").then((data) => renderProjects(data));
