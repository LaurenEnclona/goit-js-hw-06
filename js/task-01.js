const categoriesElements = document.querySelectorAll(".item");
console.log('categoriesElements');
console.log("Number of Categories:", categoriesElements.length);

categoriesElements.forEach((el) => {
    const categoryName = el.firstElementChild.textContent;
    console.log("Category:", categoryName);

    const categoryTypesList = el.lastElementChild;
    const categoryTypesLength = categoryTypesList.children.length;
    console.log("Elements:", categoryTypesLength);
});