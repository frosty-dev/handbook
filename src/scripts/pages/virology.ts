import { parseTable, makeTable } from "../utils";
import { registerSearchEntries } from "../search";

export function processVirology(root: HTMLElement): void {
  const diseaseTable = root.querySelector<HTMLElement>(
    "[id='.D0.9F.D1.80.D0.BE.D1.81.D1.82.D1.8B.D0.B5_.D0.B7.D0.B0.D0.B1.D0.BE.D0.BB.D0.B5.D0.B2.D0.B0.D0.BD.D0.B8.D1.8F'] .wikitable"
  );
  const diseases = parseTable(diseaseTable).map((row) => {
    const diseaseBlock = document.createElement("td");
    diseaseBlock.innerHTML = `
    <div class="disease-name">${row["Название болезни"].innerHTML}</div>
    <p class="vector">${row["Переносчик болезни"].innerHTML}</p>
    <p class="source">${row["Источник"].innerHTML}</p>
    <p class="spread">${row["Способ распространения"].innerHTML}</p>
    <p class="description">${row["Описание"].innerHTML}</p>
    `;
    return {
      Disease: diseaseBlock,
      Cure: row["Способ лечения"],
    };
  });

  const diseaseBetterTable = makeTable(["Disease", "Cure"], diseases);
  diseaseBetterTable.className = "disease-ext wikitable";
  diseaseTable.replaceWith(diseaseBetterTable);

  const symptomsTable = root.querySelector<HTMLElement>(
    "[id='.D0.A2.D0.B0.D0.B1.D0.BB.D0.B8.D1.86.D0.B0_.D0.A1.D0.B8.D0.BC.D0.BF.D1.82.D0.BE.D0.BC.D0.BE.D0.B2'] .wikitable"
  );
  const symptoms = parseTable(symptomsTable)
    .sort(
      (a, b) =>
        parseInt(a["Уровень"].textContent, 10) -
        parseInt(b["Уровень"].textContent, 10)
    )
    .map((row) => {
      const symptomBlock = document.createElement("td");
      symptomBlock.innerHTML = `
    <div class="disease-name">${row["Симптом"].innerHTML}</div>
    <p class="level">${row["Уровень"].innerHTML}</p>
    <p class="chemical">${row["Необходимые реагенты"].innerHTML}</p>
    <p class="description">${row["Эффект"].innerHTML}</p>
    `;
      const symptomStats = document.createElement("td");
      symptomStats.innerHTML = `
    <table class="stats">
      <tr><th>Stealth</th><td>${row["Скрытность"].innerHTML}</td></tr>
      <tr><th>Resistance</th><td>${row["Защита"].innerHTML}</td></tr>
      <tr><th>Stage speed</th><td>${row["Скорость развития"].innerHTML}</td></tr>
      <tr><th>Transmission</th><td>${row["Скорость распространения"].innerHTML}</td></tr>
    </table>
    `;
      const thresholds = row["Порог (наведите курсор мыши для подробностей)"];
      thresholds.innerHTML = `<ul class="thresholds"><li>${thresholds.innerHTML
        .split(",")
        .join("</li><li>")}</li></ul>`;
      return {
        Symptom: symptomBlock,
        Stats: symptomStats,
        Thresholds: thresholds,
      };
    });
  const symptomsBetterTable = makeTable(
    ["Symptom", "Stats", "Thresholds"],
    symptoms
  );
  symptomsBetterTable.className = "symptoms-ext wikitable";
  symptomsTable.replaceWith(symptomsBetterTable);
}

export function virologyScript(root: HTMLElement): void {
  // Init fuzzy search with elements
  const diseases = Array.from(
    root.querySelectorAll<HTMLElement>(".disease-ext tr:not(:first-child)")
  );
  registerSearchEntries(
    diseases.map((element, id) => ({
      page: "Infections",
      name: element.querySelector(".disease-name").textContent.trim(),
      element,
      alignment: "center",
      id,
    }))
  );
  const symptoms = Array.from(
    root.querySelectorAll<HTMLElement>(
      ".symptoms-ext > tbody > tr:not(:first-child)"
    )
  );
  registerSearchEntries(
    symptoms.map((element, id) => ({
      page: "Infections",
      name: element.querySelector(".disease-name").textContent.trim(),
      element,
      alignment: "center",
      id,
    }))
  );
}

export default {
  processVirology,
  virologyScript,
};
