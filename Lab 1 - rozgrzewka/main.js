const liczba1Input = document.getElementById("liczba1");
const liczba2Input = document.getElementById("liczba2");
const liczba3Input = document.getElementById("liczba3");
const liczba4Input = document.getElementById("liczba4");
const obliczBtn = document.getElementById("oblicz");
const WynikiDiv = document.getElementById("wyniki");

function obliczWyniki() {
  const num1 = parseFloat(liczba1Input.value);
  const num2 = parseFloat(liczba2Input.value);
  const num3 = parseFloat(liczba3Input.value);
  const num4 = parseFloat(liczba4Input.value);

  suma = num1 + num2 + num3 + num4;
  srednia = suma / 4;
  minWartosc = Math.min(num1, num2, num3, num4);
  maksWartosc = Math.max(num1, num2, num3, num4);

  WynikiDiv.innerHTML = `
    Suma: ${suma} <br>
    Średnia: ${srednia} <br>
    Wartość Minimalna: ${minWartosc} <br>
    Wartość Maksymalna: ${maksWartosc}
  `
};

obliczBtn.addEventListener("click", () => {
  obliczWyniki();
});

liczba1Input.addEventListener("input", obliczWyniki);
liczba2Input.addEventListener("input", obliczWyniki);
liczba3Input.addEventListener("input", obliczWyniki);
liczba4Input.addEventListener("input", obliczWyniki);
