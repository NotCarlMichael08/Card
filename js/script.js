document.addEventListener("DOMContentLoaded", function () {

    const open_button = document.getElementById("loveButton");
    const close_button = document.getElementById("closeCard");
    const card = document.querySelector(".shadowing");

    open_button.addEventListener("click", openCard);
    close_button.addEventListener("click", closeCard);

    function openCard() {
        card.style.display = "flex";
    }
    
    function closeCard() {
        card.style.display = "none";
    }

    function createHeart() {

        const hearts = [
            "❤️", 
            "💖", 
            "💘", 
            "💝", 
            "💕", 
            "💞"
        ];
    
        const heart = document.createElement("div");
    
        heart.classList.add("heart");
    
        heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
    
        heart.style.left = Math.random() * 100 + "vw";

        heart.style.fontSize = Math.random() * 20 + 15 + "px";

        heart.style.animationDuration = Math.random() * 3 + 2 + "s";

        document.body.appendChild(heart);
    
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    setInterval(createHeart, 400);
});
