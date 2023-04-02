function toggleMenu() {
  document.getElementById('link_list').classList.toggle('link_list_visible')
  document.getElementById('size').classList.toggle('arrow_down')
}

document.getElementById('size').addEventListener('click', toggleMenu)