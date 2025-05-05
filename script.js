const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    faqQuestions.forEach((item) => {
      if (item !== question) {
        item.classList.remove("active");
        item.nextElementSibling.style.maxHeight = null;
        const otherIcon = item.querySelector("img");
        if (otherIcon) otherIcon.src = "./images/icon-plus.svg";
      }
    });

    question.classList.toggle("active");
    const answer = question.nextElementSibling;
    const icon = question.querySelector("img");

    if (question.classList.contains("active")) {
      answer.style.maxHeight = answer.scrollHeight + "px";
      if (icon) icon.src = "./images/icon-minus.svg";
    } else {
      answer.style.maxHeight = null;
      if (icon) icon.src = "./images/icon-plus.svg";
    }
  });
});
