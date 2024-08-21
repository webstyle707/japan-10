const slider = document.getElementById('slider');
const items = slider.querySelectorAll('li');
let currentIndex = 0;

function slideUp() {
    const itemHeight = items[currentIndex].offsetHeight + 8; // 8px space-y-2
    slider.style.transition = 'transform 0.5s ease';
    slider.style.transform = `translateY(-${itemHeight}px)`;

    setTimeout(() => {
        slider.appendChild(items[currentIndex]);
        slider.style.transition = 'none';
        slider.style.transform = 'translateY(0)';
        currentIndex = (currentIndex + 1) % items.length;
    }, 500);
}

setInterval(slideUp, 2000);



const slider1 = document.getElementById('slider1');
        const items1 = slider1.querySelectorAll('li');
        let currentIndex1 = 0;

        function slideUp1() {
            const itemHeight = items1[currentIndex1].offsetHeight + 8; // 8px space-y-2
            slider1.style.transition = 'transform 0.5s ease';
            slider1.style.transform = `translateY(-${itemHeight}px)`;

            setTimeout(() => {
                slider1.appendChild(items1[currentIndex1]);
                slider1.style.transition = 'none';
                slider1.style.transform = 'translateY(0)';
                currentIndex1 = (currentIndex1 + 1) % items1.length;
            }, 500);
        }

        setInterval(slideUp1, 1700);




        const firstform = document.getElementById("firstform").style;
        const showForm =()=>{
            firstform.display="flex";
        }
        const hideForm =()=>{
            firstform.display="none";
        }



        window.addEventListener("scroll", function () {
          const footerbtn = document.getElementById("footerbtn").style;
          if (window.scrollY > 150) {
            footerbtn.bottom = "0";
          } else {
            footerbtn.bottom = "-100%";
          }
        });