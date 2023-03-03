const loadData = async () => {
  const URL = "https://openapi.programming-hero.com/api/ai/tools";
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      displayTools(data.data.tools);
    });
};

const displayTools = (tools) => {
  const toolsDiv = document.getElementById("data_container");
  toolsDiv.innerHTML = "";
 
  tools.forEach((tool) => {
    toolsDiv.innerHTML += `
    <div class="card w-full mx-auto bg-base-100 border border-[#1111111A] h-full flex flex-col rounded-xl shadow-lg">
    <figure class="px-10 pt-10 h-52">
            <img
              src="${tool.image}"
              alt="Shoes"
              class="rounded-xl"
              
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
  
};






