/* 부드러운 스크롤 – 내비 링크 클릭 시 자연스럽게 이동 */
document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute("href"));
    target?.scrollIntoView({ behavior: "smooth" });
  });
});

/* details 아코디언 – 하나만 펼치기 (선택) */
const accordions = document.querySelectorAll("details");
accordions.forEach((el) =>
  el.addEventListener("toggle", () => {
    if (el.open) {
      accordions.forEach((other) => {
        if (other !== el) other.open = false;
      });
    }
  })
);