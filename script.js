const formatter = new Intl.DateTimeFormat("fr-FR", {
  day: "2-digit",
  month: "long",
  year: "numeric",
});

document.querySelectorAll("[data-date]").forEach((node, index) => {
  const date = new Date();
  date.setDate(date.getDate() - index);
  node.textContent = formatter.format(date);
});
