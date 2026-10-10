const DEFAULT_WIDTH = 60;
const settingsForm = document.querySelector("#settings-form");
const widthInput = document.querySelector("#reading-width");
const saveStatus = document.querySelector("#save-status");

messenger.storage.local.get({ readingWidth: DEFAULT_WIDTH }).then(({ readingWidth }) => {
  widthInput.value = readingWidth;
});

settingsForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  await messenger.storage.local.set({ readingWidth: Number(widthInput.value) });
  saveStatus.textContent = "Saved";
});