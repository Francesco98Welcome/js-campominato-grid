const gridContainer = document.getElementById('gridContainer');
const playBtn = document.querySelector('.playBtn');

playBtn.addEventListener('click', showContainer);

function showContainer() {
    gridContainer.classList.add('visible');
    gridContainer.classList.remove('hidden');
}


for (let i = 1; i < 101; i++) {

    const newBox = document.createElement('div');
    newBox.classList.add('box');
    newBox.addEventListener('click',

        function () {
            console.log(i);
            newBox.innerHTML = i;

            if( this.classList.contains('clicked')){
                this.classList.remove('clicked');
                newBox.innerHTML = '';
            }
            else{
                this.classList.add('clicked');
            }

        }

    );

    gridContainer.append(newBox);

}
