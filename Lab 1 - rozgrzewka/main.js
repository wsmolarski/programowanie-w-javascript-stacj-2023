const liczba1Input = document.getElementById("liczba1");
const liczba2Input = document.getElementById("liczba2");
const liczba3Input = document.getElementById("liczba3");
const inputContainer = document.getElementById("input-container");
const obliczBtn = document.getElementById("oblicz");
const dodajBtn = document.getElementById("dodaj");
const WynikiDiv = document.getElementById("wyniki");

liczba1Input.addEventListener("input", obliczWyniki);
liczba2Input.addEventListener("input", obliczWyniki);
liczba3Input.addEventListener("input", obliczWyniki);

function obliczWyniki() {

  const inputFields = inputContainer.querySelectorAll("input[type='text']");

  let suma = 0;
  let iloscLiczb = 0;
  let minWartosc = Infinity;
  let maksWartosc = -Infinity;

  inputFields.forEach(input => {

    const num = parseFloat(input.value);

    if (!isNaN(num)) {
      suma += num;
      iloscLiczb++;
      minWartosc = Math.min(minWartosc, num);
      maksWartosc = Math.max(maksWartosc, num);
    };
  });

  const srednia = iloscLiczb > 0 ? suma / iloscLiczb : 0;

  WynikiDiv.innerHTML = `
    Suma: ${suma} <br>
    Średnia: ${srednia} <br>
    Wartość Minimalna: ${minWartosc === Infinity ? '-' : minWartosc} <br>
    Wartość Maksymalna: ${maksWartosc === -Infinity ? '-' : maksWartosc}
  `;
};

obliczBtn.addEventListener("click", () => {
  
  obliczWyniki();
});

dodajBtn.addEventListener("click", () => {

  const inputWrapper = document.createElement("div");

  const newInput = document.createElement("input");
  newInput.type = "text";
  newInput.className = "dynamicznePole";
  newInput.style.margin = "4px 4px 4px 0";

  inputWrapper.appendChild(newInput);

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Usuń pole"
  deleteBtn.addEventListener("click", () => {

    inputContainer.removeChild(inputWrapper);
  });

  inputWrapper.appendChild(deleteBtn);
  inputContainer.appendChild(inputWrapper);

  newInput.addEventListener("input", obliczWyniki);
});
