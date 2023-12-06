// Fungsi untuk mendapatkan data JSON dari file
async function fetchData(filePath) {
  try {
    const response = await fetch(filePath);
    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Fungsi untuk merender data JSON ke dalam HTML
function renderProjects(data) {
  var container = document.getElementById("projects-container");

  data.forEach(function (project) {
    var projectItem = document.createElement("div");
    projectItem.className = "col-md-4 w-works-mobile";
    projectItem.innerHTML = `
      <div data-aos="zoom-in">
        <div class="project-item shadow-box">
          <img src="assets/images/bg1.png" alt="BG" class="bg-img" />
          <div class="project-img">
            <div class="swiper imageWorkSlider">
              <div class="swiper-wrapper">
                <!-- Updated to use the project.images array -->
                ${project.images
                  .map(
                    (image) => `
                      <div class="swiper-slide">
                        <img src="${image.url}" alt="${project.name_project} Image">
                      </div>
                    `
                  )
                  .join("")}
              </div>
              <div class="swiper-pagination"></div>
            </div>
          </div>
          <div class="d-flex align-items-center justify-content-between">
            <div class="project-info">
              <p>${project.type}</p>
              <h1>${project.name_project}</h1>
            </div>
            <a href="${project.link}" target="_blank" class="project-btn">
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
fetchData("assets/json/works.json").then((data) => {
  if (data) {
    renderProjects(data);

    // Inisialisasi Swiper setelah rendering selesai
    var workSlider = new Swiper(".imageWorkSlider", {
      grabCursor: true,
      effect: "fade",
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }
});
