const DEFAULT_WIDTH = 60;
const MIN_WIDTH = 30;
const MAX_WIDTH = 120;

function applyWidth(value) {
  const width = Number(value);
  const safeWidth = Number.isFinite(width)
    ? Math.min(MAX_WIDTH, Math.max(MIN_WIDTH, width))
    : DEFAULT_WIDTH;

  document.documentElement.style.setProperty("--reading-width", `${safeWidth}ch`);
}

messenger.storage.local.get({ readingWidth: DEFAULT_WIDTH }).then(({ readingWidth }) => {
  applyWidth(readingWidth);
});

messenger.storage.onChanged.addListener((changes, areaName) => {
  if (areaName === "local" && changes.readingWidth) {
    applyWidth(changes.readingWidth.newValue);
  }
});