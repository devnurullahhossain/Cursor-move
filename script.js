let main = document.querySelector("#main_section");
let cursor = document.querySelector(".cursor");
let imageBox = document.querySelector(".image_box");

main.addEventListener("mousemove", function (nur) {
  gsap.to(cursor, {
    x: nur.x,
    y: nur.y,
    duration: 1,
  });
});

imageBox.addEventListener("mouseenter", function () {
  cursor.innerHTML = "View More";
  gsap.to(cursor, {
    scale: 2,
  });
});

imageBox.addEventListener("mouseleave", function () {
  cursor.innerHTML = "";
  gsap.to(cursor, {
    scale: 1,
  });
});
