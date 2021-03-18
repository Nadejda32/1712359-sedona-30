const buttonSearch = document.querySelector(".button-search");
const buttonSearchHotel = document.querySelector(".button-search-hotel");
const formSearch = document.querySelector(".form-search-hotel");
const inputDate = document.querySelector(".input-date");
const inputAdults = document.querySelector(".input-adults");
const inputChildren = document.querySelector(".input-children");

formSearch.classList.add("form-hide");

buttonSearch.addEventListener("click", function (evt){
  if (formSearch.classList.contains("form-hide")){
    evt.preventDefault();
    formSearch.classList.remove("form-hide");
    formSearch.classList.add("form-show");
  } else {
    evt.preventDefault();
    formSearch.classList.remove("form-show");
    formSearch.classList.remove("form-error");
    formSearch.classList.add("form-hide");
  }
});

formSearch.addEventListener("submit", function(evt){
  if (!inputDate.value || !inputAdults.value || !inputChildren.value) {
    evt.preventDefault();
    formSearch.classList.remove("form-error");
    formSearch.offsetWidth = formSearch.offsetWidth;
    formSearch.classList.add("form-error");
  } else {
    if(isStorageSupport) {
      localStorage.setItem("adults", inputAdults.value);
      localStorage.setItem("children", inputChildren.value);
    }
  }
});

