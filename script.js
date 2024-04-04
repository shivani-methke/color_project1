
    const colorDiv = document.getElementById('box');
    const red = document.getElementById('red');
    const yellow = document.getElementById('yellow');
    const green = document.getElementById('green');
    const blue = document.getElementById('blue');
    const purple = document.getElementById('purple');
    const orange = document.getElementById('orange');
    const pink = document.getElementById('pink');
    const cyan = document.getElementById('cyan');

    red.addEventListener('click', () => {
      colorDiv.style.backgroundColor = 'red';
      colorDiv.style.color='white';
    });

    yellow.addEventListener('click', () => {
      colorDiv.style.backgroundColor = 'yellow';
      colorDiv.style.color='black';
    });

    blue.addEventListener('click', () => {
      colorDiv.style.backgroundColor = 'blue';
      colorDiv.style.color='white';
    });

    green.addEventListener('click', () => {
      colorDiv.style.backgroundColor = 'green';
      colorDiv.style.color='white';
    });

    purple.addEventListener('click', () => {
      colorDiv.style.backgroundColor = 'purple';
      colorDiv.style.color='white';
    });

    orange.addEventListener('click', () => {
      colorDiv.style.backgroundColor = 'orange';
      colorDiv.style.color='black';
    });

    pink.addEventListener('click', () => {
      colorDiv.style.backgroundColor = 'pink';
      colorDiv.style.color='black';
    });

    cyan.addEventListener('click', () => {
      colorDiv.style.backgroundColor = 'cyan';
      colorDiv.style.color='black';
    });
