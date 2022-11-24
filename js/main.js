const api_url = "https://calculator.pythonanywhere.com/api/v1/deviceList/"
let data

// TODO: writing the main functionality of app (getting results of calculations) =)

function getExactData(modelName) {
  const price = document.getElementById("price");
  const deviceModel = document.getElementsByClassName("component");
  const deviceQuantity = document.getElementsByClassName("components_amount");
  data.forEach((item) => {
    if (item.name == modelName) {
      console.log(item.price);
    }
  });
}

// Calculations
document.getElementById("submit-data").addEventListener("click", () => {
  const price = document.getElementById("price")
  const deviceModels = document.querySelectorAll("#component")
  const deviceQuantity = document.querySelectorAll("#components_amount")

  let allDevices = []

  let resultIncome = 0

  let gIncome = 0

  let gExpense = 0
  deviceModels.forEach((item, index) => {
    let income = 0,
      energy = 0
    allDevices.push(
      `${index + 1}) ` + item.value + ` (${deviceQuantity[index].value})`
    );
    

    data.forEach((a) => {
      if (a.name == item.value) {
        income += a.income
        energy += a.energy_rate
      }
    })

    resultIncome +=
      (parseFloat(income) - parseFloat(price.value) * parseFloat(energy)) *
      parseFloat(deviceQuantity[index].value)

      console.log((parseFloat(income) - parseFloat(price.value) * parseFloat(energy)) *
      parseFloat(deviceQuantity[index].value))

      gIncome += income
      gExpense += parseFloat(price.value) * parseFloat(energy) * parseFloat(deviceQuantity[index].value)

  })

  result = document.querySelector(".result-income");
  document.querySelector(".result-devices").innerHTML =
    allDevices.join("<br />");
  if (resultIncome >= 0) {
    result.classList.remove("text-red-700")
    result.classList.add("text-slate-900")
    result.innerHTML =
      parseFloat(resultIncome.toFixed(4)) +
      `<small
    class="text-[24px] font-normal text-slate-400 dark:text-slate-300"
  >
    / Час</small
  >`;
  } else {
    result.classList.remove("text-slate-900")
    result.classList.add("text-red-700")
    result.innerHTML =
    parseFloat(resultIncome.toFixed(4)) +
      `<small
    class="text-[24px] font-normal text-slate-400 dark:text-slate-300"
  >
    / Час</small
  >`;
  }


  document.querySelector('.filter-table').innerHTML = `
  <table class="min-w-full">
  <thead class="bg-gray-50 dark:bg-gray-700">
    <tr>
      <th
        scope="col"
        class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
      >
        Критерии
      </th>
      <th
        scope="col"
        class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
      >
        1 час
      </th>
      <th
        scope="col"
        class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
      >
        1 день
      </th>
      <th
        scope="col"
        class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
      >
        1 неделя
      </th>
      <th
        scope="col"
        class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
      >
        1 месяц
      </th>
    </tr>
  </thead>
  <tbody>
    <tr
      class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
    >
      <td
        class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        <i class="fa-solid fa-dollar mr-2"></i>
        Доход
      </td>
      <td
        class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400"
      >
        ${parseFloat(gIncome.toFixed(4))} USD
      </td>
      <td
        class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400"
      >
      ${parseFloat((gIncome * 24).toFixed(4))} USD
      </td>
      <td
        class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400"
      >
      ${parseFloat((gIncome * 24 * 7).toFixed(4))} USD
      </td>
      <td
        class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400"
      >
      ${parseFloat((gIncome * 24 * 7 * 30).toFixed(4))} USD
      </td>
    </tr>

    <tr
      class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
    >
      <td
        class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        <i class="fa-solid fa-lightbulb mr-2"></i>
        Расход
      </td>
      <td
        class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400"
      >
      ${parseFloat(gExpense.toFixed(4))} USD
      </td>
      <td
        class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400"
      >
      ${parseFloat((gExpense * 24).toFixed(4))} USD
      </td>
      <td
        class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400"
      >
      ${parseFloat((gExpense * 24 * 7).toFixed(4))} USD
      </td>
      <td
        class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400"
      >
      ${parseFloat((gExpense * 24 * 7 * 30).toFixed(4))} USD
      </td>
    </tr>

    <tr class="bg-white dark:bg-gray-800">
      <td
        class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        <i class="fa-solid fa-sack-dollar mr-2"></i>

        Чистая прибыль
      </td>
      <td
        class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400"
      >
      ${parseFloat(resultIncome.toFixed(4))} USD
      </td>
      <td
        class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400"
      >
      ${parseFloat((resultIncome * 24).toFixed(4))} USD
      </td>
      <td
        class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400"
      >
      ${parseFloat((resultIncome * 24 * 7).toFixed(4))} USD
      </td>
      <td
        class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400"
      >
      ${parseFloat((resultIncome * 24 * 7 * 30).toFixed(4))} USD
      </td>
    </tr>
  </tbody>
</table>
  `


});

// Defining async function
async function getapi(url) {
  // Storing response
  const response = await fetch(url)

  // Storing data in form of JSON
  data = await response.json()

  // giving data to the function comopnentFunc()
  componentFunc(data)

  // setting first values for devices (select option element in HTML)
  data.forEach((item) => {
    document.querySelector("#component").innerHTML += `
  <option class="bg-input_dark" value="${item.name}">
    ${item.name}
  </option>
`;
  });
}
// Calling function so as it works
getapi(api_url)

// Getting add button
const addComponent = document.getElementById("add-component")

// Getting components content
let components = document.getElementById("components__content")

// Full function is settings and functionality of form calculator
function componentFunc(obj) {
  // When clicking the button
  addComponent.addEventListener("click", () => {
    const allComponents = document.querySelectorAll("#components")
    const componentsAlert = document.querySelector(".components-alert")
    // Checking for quantity of devices
    if (allComponents.length < 30 && allComponents.length > 0) {
      // Applying template
      components.innerHTML += `
      <div class="mb-5">
          <div class="flex w-full">
            <label
              for="component"
              class="block text-sm font-semibold text-white mb-3 w-[73%]"
              >Устройство</label
            >
            <label
              for="components_amount"
              class="block text-sm font-semibold text-white mb-3 w-[27%]"
              >Кол. устройств</label
            >
          </div>
          <div id="components" class="w-full flex">
            <select
              id="component"
              name="component"
              class="h-full py-3 px-3 mr-2 border-none bg-input_dark font-medium w-[73%] text-white sm:text-sm rounded-md focus:outline-none focus:ring focus:border-blue-500"
            >
            ${obj.map((item) => {
              option = `
                  <option class="bg-input_dark" value="${item.name}">
                    ${item.name}
                  </option>
              `;
              return option
            })}

            </select>
            <input
              type="number"
              id="components_amount"
              name="components_amount"
              value="1"
              min="1"
              class="focus:outline-none focus:ring focus:border-blue-500 mr-2 block py-3 w-[20%] sm:text-sm border-none rounded-md bg-input_dark text-white"
            />
            <div
              class="remove-component flex items-center justify-center transition-[0.3] w-[7%] rounded-md bg-transparent hover:bg-input_dark"
            >
              <i class="fa-solid fa-trash-can text-white"></i>
            </div>
          </div>
        </div>
        `;
    } else if (!componentsAlert) {
      // if devices are equal to 30 warning the user
      components.innerHTML += `<p class="text-red-700 font-medium components-alert">Можно только добавить до 30 устройств!</p>`
    }

    // Removing functions
    const allTrashBtns = document.querySelectorAll(".remove-component")
    allTrashBtns.forEach((item) => {
      console.log(item)
      item.addEventListener("click", () => {
        if (
          document.querySelector("#components__content").childElementCount >= 2
        ) {
          console.log(
            document.querySelector("#components__content").childElementCount
          )
          console.log("test")
          parentComponent = item.parentElement
          parentComponent = parentComponent.parentElement
          parentComponent.remove()
        }
      });
    });
  });
}

const defaultOption = document.querySelector(".default-option")
const otherOption = document.querySelector(".other-option")

document.getElementById("currency").addEventListener("change", () => {
  console.log(document.getElementById("currency").value)
  if (document.getElementById("currency").value === "default") {
    document.getElementById("price").value = "0.013"
    document.getElementById("price").setAttribute("readonly", "readonly")
  } else {
    document.getElementById("price").value = ""
    document.getElementById("price").placeholder = "Введите цену вручную..."
    document.getElementById("price").removeAttribute("readonly")
  }
});
