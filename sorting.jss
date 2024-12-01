const arrayContainer = document.getElementById("array-container");
const generateArray = () => {
    arrayContainer.innerHTML = ""; // Correct capitalization
    for (let i = 0; i < 30; i++) {
        const barHeight = (Math.random() * 80) + 20; // Correct capitalization
        const arrayBar = document.createElement("div"); // Correct capitalization
        arrayBar.classList.add("array-bar"); // Correct capitalization
        arrayBar.style.height = `${barHeight}%`;
        arrayContainer.appendChild(arrayBar); // Correct capitalization
    }
}


const bubblesort=async()=>{ 
    const bars=document.querySelectorAll(".array-bar");
    for(let i=0 ; i<bars.length-1 ; i++){
      for(let j=0 ; j<bars.length-i-1 ; j++){
        bars[j].style.backgroundcolor="#ff6f61";
        bars[j+1].style.backgroundcolor="#ff6f61";
        if(parseInt(bars[j].style.height)>parseInt(bars[j+1].style.height)){
            await swap(bars[j],bars[j+1]);
        }   
        bars[j].style.backgroundcolor="white";
        bars[j+1].style.backgroundcolor="white";
      }
      bars[bars.length-1-i].style.backgroundcolor="#6b6b6b";
      } 
    };

    const swap=(bar1,bar2)=>{
        return new Promise((resolve)=>{
            const tempheight=bar1.style.height;
            bar1.style.height=bar2.style.height;
            bar2.style.height=tempheight;
            setTimeout(()=>{
                resolve();
            },50);
        })
    }

    generateArray();

    