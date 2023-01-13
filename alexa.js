let paints = 4;
let drawings = 11;
let photographs = 33;

for (let i = 1; i < paints; i++) {
let col = document.createElement('div');
col.setAttribute('class', 'col');

col.addEventListener('click', function() {
    fullpage.style.backgroundImage = "url('/images/paint-" + i + ".jpg')";
    fullpage.style.display = 'block';
  });

let card = document.createElement('div');
card.setAttribute('class', 'card anim');
 
let img = document.createElement('img');
img.setAttribute('class', 'card-img-top');
img.setAttribute('src', '/images/paint-' + i + '.jpg');

card.appendChild(img);
col.appendChild(card);
paint.appendChild(col);
}

for (let i = 1; i < drawings; i++) {
    let col = document.createElement('div');
    col.setAttribute('class', 'col');
    col.addEventListener('click', function() {
        fullpage.style.backgroundImage = "url('/images/drawing-" + i + ".jpg')";
        fullpage.style.display = 'block';
      });
    
    let card = document.createElement('div');
    card.setAttribute('class', 'card anim');
    
    let img = document.createElement('img');
    img.setAttribute('class', 'card-img-top');
    img.setAttribute('src', '/images/drawing-' + i + '.jpg');
    
    card.appendChild(img);
    col.appendChild(card);
    drawing.appendChild(col);
    }
    
    for (let i = 1; i < photographs; i++) {
        let col = document.createElement('div');
        col.setAttribute('class', 'col');
        col.addEventListener('click', function() {
            fullpage.style.backgroundImage = "url('/images/photograph-" + i + ".jpg')";
            fullpage.style.display = 'block';
          });
        
        let card = document.createElement('div');
        card.setAttribute('class', 'card anim');
        
        let img = document.createElement('img');
        img.setAttribute('class', 'card-img-top');
        img.setAttribute('src', '/images/photograph-' + i + '.jpg');
        
        card.appendChild(img);
        col.appendChild(card);
        photograph.appendChild(col);
        }
        
    
        window.addEventListener('scroll', reveal)
        reveal();
        function reveal() {
            let items = document.querySelectorAll('.anim')
            for (let i = 0; i < items.length; i++) {
                let windowHeight = window.innerHeight;
                let revealTop = items[i].getBoundingClientRect().top;
                let distance = 50;
        
                if (revealTop < windowHeight - distance) {
                    items[i].classList.add('active')
                } else {
                    items[i].classList.remove('active')
                }
            }
        }