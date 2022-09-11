// chart script
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: [
            'Completed',
            'On Going',
            'Recent'
          ],
          datasets: [{
            label: 'My First Dataset',
            data: [2, 2, 3],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)'
            ],
            hoverOffset: 4
          }]
    },
    
});


const project = document.querySelectorAll('.project')

const displayProject = (values) =>{
    project.forEach(element =>{
        element.style.display = "none"
        const title = element.querySelector('h4').innerHTML.toUpperCase();
       
        
        if (title.includes(values)){
            element.style.display = "block";
        }
       
    })
}

searchProject.addEventListener('input', (e) =>{
    displayProject(e.target.value.toUpperCase())
})



