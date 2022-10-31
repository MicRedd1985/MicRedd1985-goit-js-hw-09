const btnStart = document.querySelector ("button[data-start]"); 
const btnStop = document.querySelector ('button[data-stop]');
const body = document.querySelector ('body')

const base = {
    intervalId : null,
    isActive: false, 

    start() {
        if (this.isActive) {
            return;
        }
        this.isActive = true;
        this.intervalId = setInterval(() => {
            body.style.backgroundColor = getRandomHexColor();
            console.log (this.intervalId)
        },1000);
        console.log ('start')

        
    },

    stop () {
        clearInterval (this.intervalId)
        this.isActive = false;
        console.log ('stop')

    }
}

btnStart.addEventListener ('click', () => {base.start ()});
btnStop.addEventListener ('click', () => {base.stop ()});


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }