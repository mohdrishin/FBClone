const dropdownBtn = document.querySelector(".accounts-menu");
const dropdownMenu = document.querySelector(".account-details");

// DropDown Account Details

dropdownBtn.addEventListener("click", () => {
    dropdownMenu.classList.toggle("show");
    console.log('dropdownMenu clicked');
});

