const button = document.getElementsByClassName("expand");
const icon = document.getElementById("icon");
const navExpand = document.querySelector("nav");
const navExpanding = () => {
  navExpand.classList.toggle("active");

  if (icon.classList.contains("fa-compress-arrows-alt")) {
    icon.classList.remove("fa-compress-arrows-alt");
    icon.classList.add("fa-expand-arrows-alt");
  } else {
    icon.classList.remove("fa-expand-arrows-alt");
    icon.classList.add("fa-compress-arrows-alt");
  }

  //burger animation
};
