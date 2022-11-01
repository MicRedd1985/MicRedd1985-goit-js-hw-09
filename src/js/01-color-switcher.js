const btnStart = document.querySelector ("button[data-start]"); 
const btnStop = document.querySelector ('button[data-stop]');
const body = document.querySelector ('body')

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

const base = {
    intervalId : null,
    isActive: false, 

    start() {
        if (this.isActive) {
            return;
        }
    btnStart.disabled = true;
    btnStop.disabled = false;

        this.isActive = true;
        this.intervalId = setInterval(() => {
            body.style.backgroundColor = getRandomHexColor();
            console.log (this.intervalId)
        },1000);
        console.log ('start')

        
    },

    stop () {
        btnStart.disabled = false;
    btnStop.disabled = true;
        clearInterval (this.intervalId)
        this.isActive = false;
        console.log ('stop')

    }
}

btnStart.addEventListener ('click', () => {base.start ()});
btnStop.addEventListener ('click', () => {base.stop ()});


