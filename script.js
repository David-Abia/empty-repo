const buttons = document.querySelectorAll('button:not(#update)');
const restart = document.querySelector('#update');
const yellow = document.getElementById('yellow');
const pink = document.getElementById('pink');
const white = document.getElementById('white');
const lightGreen = document.getElementById('lightgreen');
const orange = document.getElementById('#F74B00');
const blueColor = document.querySelector('.blueColor')
const ul = document.querySelector('ul');
const li = document.querySelector('li');

const pinkClass = document.querySelector('.pink')
const whiteClass = document.querySelector('.white');

// function colorUpdate() {
//   const liColor = li.className;
//   li.style.color = liColor
// }

// colorUpdate()


function colorUpdate() {
  const listItems = document.querySelectorAll('ul li');

  listItems.forEach(li => {
    const colorClass = li.className;

    // Handle special case for lightgreen text
    if (colorClass === 'lightgreen') {
      li.style.background = 'lightgreen';
      li.style.fontFamily = 'Arial';
    } 
    else {
      li.style.background = colorClass;
      li.style.color = '#ffff';
      whiteClass.style.color = '#151515';
      li.style.fontFamily = 'Arial';
      

    }
  });
}

colorUpdate()

        function init() {
         buttons.forEach(btn => {
            btn.style.background = '';
            btn.style.color = '';
            btn.textContent = 'color?';
            btn.style.border = ''
            blueColor.textContent = 'Blue'
         })
        }

        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                const color = btn.id;
                
                
            if(btn.style.background = color) {
             btn.style.color = '#ffff';
                btn.textContent = color;
                btn.style.border = 'none';
                yellow.style.color = '#151515';
                pink.style.color = '#151515';
                white.style.color = '#151515';
                white.style.border = '1px solid #151515';
                lightGreen.style.color = '#151515';
                
               
                return;
            }
         
                
            })
        }) 

        lightGreen.addEventListener('click', () => {
lightGreen.textContent = 'light green';
        })

        orange.addEventListener('click', () => {
 orange.textContent = 'orange'
        })

        restart.addEventListener('click', () => {
            init()
        })

        init()

// const red = document.querySelector('#red');
// const grey = document.querySelector('#grey');
// const brown = document.querySelector('#brown');
// const blue = document.querySelector('#blue');
// const green = document.querySelector('#green');
// const yellow = document.querySelector('#yellow');
// const pink = document.querySelector('#pink');
// const purple = document.querySelector('#purple');
// const black = document.querySelector('#black');
// const white = document.querySelector('#white');
// const lightGreen = document.querySelector('#lightGreen');
// const orange = document.querySelector('#orange');
// const update = document.querySelector('#update');
// const update2 = document.querySelector('#update2');

/*
red.addEventListener('click', () => {
    red.style.background = '#ff0000';
    red.style.border = 'none';
    red.innerHTML = 'Red';
    red.style.color = '#ffff';
})

grey.addEventListener('click', () => {
    grey.style.background = 'grey';
    grey.style.border = 'none'
    grey.style.color = 'white';
    grey.innerText = 'Grey';
})

brown.addEventListener('click', () => {
    brown.style.background = 'brown';
    brown.style.border = 'none'
    brown.style.color = 'white';
    brown.innerText = 'Brown';
})

update.addEventListener('click', () => {



    // update2.style.display = 'block';
    
    update.style.display = 'none';
    
    // update2.style.position = 'absolute';
    // update2.style.left = '43%'

    red.addEventListener('click', () => {
    red.style.background = 'grey';
    red.style.border = 'none';
    red.innerHTML = 'Grey';
    red.style.color = '#ffff';
})

grey.addEventListener('click', () => {
    grey.style.background = 'green';
    grey.style.border = 'none'
    grey.style.color = 'white';
    grey.innerText = 'Grey';
})

brown.addEventListener('click', () => {
    brown.style.background = 'brown';
    brown.style.border = 'none'
    brown.style.color = 'white';
    brown.innerText = 'Brown';
})
})
*/
