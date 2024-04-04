function toggleColor(element, color) {
    element.classList.toggle('bg-color');
    element.style.backgroundColor = element.classList.contains('bg-color') ? color : '';
  }
function nameOperation(){
    var nameElement = document.getElementById('in');
    var name = nameElement.value;
    var greetingElement = document.getElementById('greeting');
    greetingElement.textContent = 'Hello, ' + name + '!';
}