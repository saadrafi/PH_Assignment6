const loadData = async (loadAll, isSorted) => {
  const URL = "https://openapi.programming-hero.com/api/ai/tools";
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      displayTools(data.data.tools, loadAll, isSorted);
    });
};

const displayTools = (tools, loadAll, isSorted) => {
  const toolsDiv = document.getElementById("data_container");
  toogleSpinner(true);
  loadALlButton(false);
  toolsDiv.innerHTML = "";
  const loadAllBtn = document.getElementById("load_all");
  if (loadAll == false) {
    tools = tools.slice(0, 6);
    if (isSorted) {
      tools.sort((a, b) => new Date(a.published_in) - new Date(b.published_in));
    }
    loadAllBtn.innerText = "SEE MORE";
  } else {
    if (isSorted) {
      tools.sort((a, b) => new Date(a.published_in) - new Date(b.published_in));
      console.log(tools);
    }
    loadAllBtn.innerText = "SEE LESS";
  }
  tools.forEach((tool) => {

    toolsDiv.innerHTML += `
    <div class="card w-full mx-auto bg-base-100 border border-[#1111111A] h-full flex flex-col rounded-xl shadow-lg">
    <figure class="px-10 pt-10 h-56">
            <img
              src="${tool.image}"
              alt="Shoes"
              class="rounded-xl h-contain w-full"
              
            />
          </figure>
          <div class="card-body">
          <div class="h-32">
            <h2 class="card-title">Features</h2>
            <ol class="list-decimal list-inside">
                ${tool.features
                  .map((feature) => `<li class="card-subtitle">${feature}</li>`)
                  .join("")}
            </ol>
            </div>
            <hr />
            <div class="card-actions">
              <div class="flex justify-between items-center w-full">
                <div class="flex flex-col gap-2">
                  <h2 class="text-3xl font-semibold">${tool.name}</h2>
                  <p class="flex items-center gap-2">
                    <img src="images/calendar-days-regular.svg" class="h-4 w-4" alt="" srcset="" />
                    <span>${tool.published_in}</span>
                  </p>
                </div>
                <div>
                  <label for="modal-data"  onclick="loadDataDetails('${
                    tool.id
                  }')" class="bg-[#FEF7F7] cursor-pointer h-12 w-12 rounded-[50%]"><span class="material-symbols-outlined" style="color: #EB5757;"> arrow_forward </span></label>
                </div>
              </div>
            </div>
          </div>
          </div>`;
    // toolsDiv.innerHTML += div.outerHTML;
  });
  toogleSpinner(false);
  loadALlButton(true);
};

const toogleSpinner = (show) => {
  const spinner = document.getElementById("spinner");
  if (show) {
    spinner.classList.remove("hidden");
  } else {
    spinner.classList.add("hidden");
  }
};

const loadALlButton = (show) => {
  const loadAllBtn = document.getElementById("load_all");
  if (show) {
    loadAllBtn.classList.remove("hidden");
  } else {
    loadAllBtn.classList.add("hidden");
  }
};

document.getElementById("load_all").addEventListener("click", (e) => {
  const text = e.target.innerText;
  loadData(text == "SEE MORE" ? true : false);
});

document.getElementById("sort_by_date").addEventListener("click", () => {
  const loadAllBtn = document.getElementById("load_all");
  const text = loadAllBtn.innerText;
  if (text == "SEE MORE") {
    loadData(false, true);
  } else {
    loadData(true, true);
  }
});

// document.getElementById("sort").addEventListener("click", (e) => {
//   loadData(false, true);sort_by_date
// });
