const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})

/* comment this out later on. It does not work perfectly. 
But due to time constaints and risking new bugs, I will keep it later
Delete over summer 2024
*/
document.addEventListener('DOMContentLoaded', () => {
        const volunteeringBtn = document.getElementById('volunteering-btn');
        const scheduleBtn = document.getElementById("schedule-btn");
        const missionBtn = document.getElementById("mission-btn");
        const competitionsBtn = document.getElementById("competitions-btn");
        const rows = document.querySelectorAll('.t-chart tbody tr');
        

        volunteeringBtn.addEventListener('click', () => {
            window.location.href = '/voluntering.html';
        });
        competitionsBtn.addEventListener('click', () => {
            window.location.href= '/competitions.html'
        })
        scheduleBtn.addEventListener('click', () => {
            window.location.href = '/schedule.html';
        });
        if(missionBtn)
        {
        missionBtn.addEventListener('click', () => {
            console.log("Mission button clicked")
            window.location.href = '/ourmission.html';
        });
    
    }else {
        console.log("Mission button Not found");
    }

    rows.forEach(row => {
        const description = row.getAttribute('data-description');
        const descriptionBox = document.createElement('div');
        description.classList.add('description-text');
        descriptionBox.innerText = description;
        row.classList.add('description-box');
        row.appendChild(descriptionBox)
    });

});

function redirect_to_page(link){
    window.location.href= link;
}