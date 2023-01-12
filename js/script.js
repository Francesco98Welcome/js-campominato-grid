const gridContainer = document.getElementById('gridContainer');
const playBtn = document.querySelector('.playBtn');
const difficult = document.querySelector('#difficult');

playBtn.addEventListener('click', showContainer);


function showContainer() {
        if (difficult.value == 'easy'){
            easy();
        }
        else if (difficult.value == 'medium'){
            medium();
        }
        else if (difficult.value == 'hard') {
            hard();
        }
    }


function easy() {

    gridContainer.innerHTML = '';
    for (let i = 1; i < 101; i++) {

    const newBox = document.createElement('div');
    newBox.classList.add('box');

    gridContainer.classList.remove('hidden'); 
   //  gridContainer.classList.add('d-flex');

    newBox.addEventListener('click',

        function () {
            console.log(i);
            
            newBox.innerHTML += i;

            if( /*this*/newBox.classList.contains('clicked')){
                /*this*/newBox.classList.remove('clicked');
                /*this*/newBox.innerHTML = '';
            }
            else{
                /*this*/newBox.classList.add('clicked');
            }
        }
);
    gridContainer.append(newBox);
    }
}



function medium() {

    gridContainer.innerHTML = '';
    for (let i = 1; i < 82; i++) {
    
    const newBox = document.createElement('div');
    newBox.classList.add('box');
    newBox.classList.add('boxMediumContainer');
    gridContainer.classList.remove('hidden');
    //gridContainer.classList.add('d-flex');

    newBox.addEventListener('click',

    function () {
        console.log(i);
        
        newBox.innerHTML += i;

        if( /*this*/newBox.classList.contains('clicked')){
            /*this*/newBox.classList.remove('clicked');
            /*this*/newBox.innerHTML = '';
        }
        else{
            /*this*/newBox.classList.add('clicked');
        }
    }
);
    gridContainer.append(newBox);

    }
    
}



function hard() {

    gridContainer.innerHTML = '';
    for (let i = 1; i < 50; i++) {
    
    const newBox = document.createElement('div');
    newBox.classList.add('box');
    newBox.classList.add('boxHardContainer');
    gridContainer.classList.remove('hidden');
    //gridContainer.classList.add('d-flex');

    newBox.addEventListener('click',

    function () {
        console.log(i);
        
        newBox.innerHTML += i;

        if( /*this*/newBox.classList.contains('clicked')){
            /*this*/newBox.classList.remove('clicked');
            /*this*/newBox.innerHTML = '';
        }
        else{
            /*this*/newBox.classList.add('clicked');
        }
    }
);
    gridContainer.append(newBox);

    }
    
}