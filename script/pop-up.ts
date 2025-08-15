const profileBtn = document.querySelector('.profile_btn') as HTMLButtonElement;
const dropdown = document.querySelector('.dropdown_wrapper') as HTMLDivElement;

profileBtn.addEventListener('click', () => {
  dropdown.classList.remove('none');
  dropdown.classList.toggle('hide');
});

document.addEventListener('click', (event) => {
  const isClickInsideDropdown = dropdown.contains(event.target as Node);
  const isProfileClicked = profileBtn.contains(event.target as Node);

  if (!isClickInsideDropdown && !isProfileClicked) {
    dropdown.classList.add('hide');
  }
});
