document.addEventListener("DOMContentLoaded", () => {
  const slide = document.getElementById("slide");
  const toLeft = () => {
    slide.style.left = "-100%";
    slide.style.transition = "left 1s";

    setTimeout(append, 1000);
  };
  const append = () => {
    slide.append(slide.children[0]);
    slide.style.left = 0;
    slide.style.transition = "none";
  };

  setInterval(toLeft, 2500);

  //   구분선

  const partner = document.querySelector("footer select");
  partner.addEventListener("change", (e) => {
    const url = e.target.value;
    if (url.value !== "www") {
      window.open(url);
    }
  });

  //   구분선

  const noticeLi = document.querySelectorAll("#notice li");
  const popup = document.getElementById("popup");
  const popupBtn = popup.querySelector("button");
  let p = 0;
  const pop = () => {
    if (p == 0) {
      popup.classList.add("show");
      p = 1;
    } else {
      popup.classList.remove("show");
      p = 0;
    }
  };

  noticeLi.forEach((i) => {
    i.children[0].addEventListener("click", pop);
    //   popup.style.visibility = "visible";
  });

  popupBtn.addEventListener("click", pop);
  //   alert(popupBtn);
}); //전체 끝................................
