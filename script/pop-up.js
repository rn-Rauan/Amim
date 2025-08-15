const profileBtn = document.querySelector('.profile_btn');
const dropdown = document.querySelector('.dropdown_wrapper');

profileBtn.addEventListener('click', () => {
  dropdown.classList.remove('none');
  dropdown.classList.toggle('hide');
});

document.addEventListener('click', (event) => {
  const isClickInsideDropdown = dropdown.contains(event.target);
  const isProfileClicked = profileBtn.contains(event.target);

  if (!isClickInsideDropdown && !isProfileClicked) {
    dropdown.classList.add('hide');
  }
});
