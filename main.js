
const removeTask = function(e) {
  const index = e.currentTarget.dataset.key;
  document.querySelector(`li[data-key="${index}"]`).remove();
}


document.querySelectorAll('button').forEach((button)=> {
  button.addEventListener('click', removeTask);
})
