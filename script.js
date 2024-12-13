document.querySelector("#menu-btn").onclick = () => {
    document.querySelector(".navbar").classList.toggle('active'); // Remove the dot before 'active'
    document.querySelector("#menu-btn").classList.toggle('fa-times');
};
