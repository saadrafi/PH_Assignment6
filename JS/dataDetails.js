const loadDataDetails = (id) => {
  const URL = `https://openapi.programming-hero.com/api/ai/tool/${id}`;
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      displayDataDetails(data.data);
    });
};

const displayDataDetails = (data) => {
  const dataDetailsDiv = document.getElementById("data_details");

  dataDetailsDiv.innerHTML = ` 
            <label for="modal-data" class="btn btn-sm btn-circle absolute right-2 top-2 hidden lg:inline md:inline">✕</label>

 <div class="flex flex-col justify-center items-center gap-5 lg:flex-row">
  <div
    class="card p-8 w-full lg:w-96 md:w-96  bg-base-100 border border-[#EB5757] h-full gap-3 flex flex-col rounded-xl shadow-lg bg-[#EB5757]/[0.05]"
  >
    <div class="h-32">
      <p class="break-words font-semibold">${data.description}</p>
    </div>

    ${
      data.pricing
        ? `<div class="flex flex-col md:flex-row lg:flex-row gap-2 justify-around lg:h-24 md:h-24 h-full">

        <div class="text-[#03A30A] font-semibold flex-1 card bg-base-100 shadow-xl flex flex-col justify-center items-center justify- 
                items-center p-5">
           <span class="text-sm ">${data.pricing[0].price}</span>
           <span class="text-sm ">${data.pricing[0].plan}</span>
        </div>
      
      

      
      <div class="text-[#F28927] font-semibold flex-1 card bg-base-100 shadow-xl flex flex-col  justify-items-center justify-center 
       items-center p-5">
          <span class="text-sm">${data.pricing[1].price}</span>
          <span class="text-sm">${data.pricing[1].plan}</span>
        </div>
          
      <div class="text-[#EB5757] font-semibold flex-1 card bg-base-100 shadow-xl flex flex-col  justify-items-center justify-center 
       items-center p-5">
          <span class="text-sm"">${data.pricing[2].price}</span>
          <span class="text-sm"">${data.pricing[2].plan}</span>
        </div>

    </div>`
        : `<div class="flex flex-col md:flex-row lg:flex-row gap-2 justify-around lg:h-24 md:h-24 h-full">

        <div class="text-[#03A30A] font-semibold flex-1 card bg-base-100 shadow-xl flex flex-col justify-center items-center justify- 
                items-center p-5">
           <span class="text-sm ">Free of Cost</span>
           <span class="text-sm ">Basic</span>
        </div>
      
      

      
      <div class="text-[#F28927] font-semibold flex-1 card bg-base-100 shadow-xl flex flex-col  justify-items-center justify-center 
       items-center p-5">
          <span class="text-sm">Free of Cost</span>
          <span class="text-sm">Pro</span>
        </div>
          
      <div class="text-[#EB5757] font-semibold flex-1 card bg-base-100 shadow-xl flex flex-col  justify-items-center justify-center 
       items-center p-5">
          <span class="text-sm"">Free of Cost</span>
          <span class="text-sm"">Enterprise</span>
        </div>

    </div>`
    }


    

    <div class="flex gap-4 justify-between">
     <div class="lg:h-36 md:h-36 h-full">
            <h2 class="card-title mb-2">Features</h2>
            <ul class="list-disc list-inside">
                ${Object.keys(data.features)
                  .map(
                    (feature) => `<li class="text-sm">${data.features[feature].feature_name}</li>`
                  )
                  .join("")}

            </ul>
            </div>
      <div class="lg:h-36 md:h-36 h-full">
            <h2 class="card-title mb-2">Integrations</h2>
            <ul class="list-disc list-inside">
                ${
                  data.integrations && data.integrations.length > 0
                    ? data.integrations
                        .map(
                          (integration) => `<li class="card-subtitle text-sm">${integration}</li>`
                        )
                        .join("")
                    : `<p class="card-subtitle text-sm">No Data Found</p>`
                }

            </ul>
        </div>
    </div>
  </div>
  <div
    class="card p-8 w-full lg:w-96 md:w-96 bg-base-100 border border-[#EB5757] flex flex-col rounded-xl shadow-lg"
  >
    <div class="avatar indicator h-48 w-full relative">
    ${
      data.accuracy.score
        ? `<span class="indicator-item badge badge-secondary absolute top-4 right-14">${
            data.accuracy.score * 100 + "% accuracy"
          }</span>`
        : `<span></span>`
    }
      
      <div class="rounded-lg w-[100%]">
        <img class="h-contain " src=${data.image_link[0]} />
      </div>
    </div>
    <div class="h-44 mt-6">
    ${
      data.input_output_examples
        ? `<h1 class="text-center font-semibold text-xl mb-2">${data.input_output_examples[0].input}</h1>`
        : `<h1 class="text-center font-semibold text-xl mb-5">Can you give any example?</h1>`
    }
    ${
      data.input_output_examples
        ? ` <p class="text-center text-sm break-words">
        ${data.input_output_examples[0].output}
      </p>`
        : ` <p class="text-center text-sm break-words">
        No! Not Yet! Take a Break!!!
      </p>`
    }
     
    </div>
  </div>
</div>

         `;
};
