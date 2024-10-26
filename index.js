const container = document.getElementById('container');
const squareBtn = document.getElementById('square');
const triangleBtn = document.getElementById('triangle');
const circleBtn = document.getElementById('circle');
const quantityInput = document.getElementById('quantity');

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createShape(type) {
    const shape = document.createElement('div');
    shape.classList.add('shape', type);

    const size = getRandomInt(20, 100);
    const top = getRandomInt(0, container.clientHeight - size);
    const left = getRandomInt(0, container.clientWidth - size);

    shape.style.width = size + 'px';
    shape.style.height = size + 'px';
    shape.style.top = top + 'px';
    shape.style.left = left + 'px';

    if (type === 'square') {
        shape.style.backgroundColor = '#ff0000';
        shape.style.border = '1px solid black';
    } else if (type === 'triangle') {
        shape.style.width = 0;
        shape.style.height = 0;
        shape.style.borderLeft = size / 2 + 'px solid transparent';
        shape.style.borderRight = size / 2 + 'px solid transparent';
        shape.style.borderBottom = size + 'px solid #1929d5';
    } else if (type === 'circle') {
        shape.style.borderRadius = '50%';
        shape.style.backgroundColor = '#198619';
        shape.style.border = '1px solid black';
    }

    shape.addEventListener('click', () => {
        const selectedShape = document.querySelector('.selected');
        if (selectedShape) {
            if (selectedShape.style.borderRadius === '50%') {
                selectedShape.style.backgroundColor = '#198619';
            } else if (selectedShape.style.border === '1px solid black') {
                selectedShape.style.backgroundColor = '#ff0000';
            } else {
                selectedShape.style.borderBottom = selectedShape.getBoundingClientRect().width + 'px solid #1929d5';
            }
            selectedShape.classList.remove('selected');
        }
        if (type === 'triangle') {
            shape.style.borderBottom = size + 'px solid #aaaaaa';
        } else if (type === 'circle' || type === 'square') {
            shape.style.backgroundColor = '#aaaaaa';
        }
        shape.classList.add('selected');
    });

    shape.addEventListener('dblclick', () => {
        shape.remove();
    });

    container.appendChild(shape);
}


squareBtn.addEventListener('click', () => {
    const quantity = parseInt(quantityInput.value) || 1;
    for (let i = 0; i < quantity; i++) {
        createShape('square');
    }
});

triangleBtn.addEventListener('click', () => {
    const quantity = parseInt(quantityInput.value) || 1;
    for (let i = 0; i < quantity; i++) {
        createShape('triangle');
    }
});

circleBtn.addEventListener('click', () => {
    const quantity = parseInt(quantityInput.value) || 1;
    for (let i = 0; i < quantity; i++) {
        createShape('circle');
    }
});