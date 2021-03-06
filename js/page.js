//charts
let ctx = document.getElementById('monthlySales').getContext('2d');
let pieCtx = document.getElementById('deptSales').getContext('2d');

var monthlySalesChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Oct', 'Nov', 'Dec'],
        datasets: [{
            labels: '# of Sales',
            data: [12, 19, 3],
            backgroundColor: [
                'rgba(238, 184, 104, 1]',
                'rgba(75, 166, 223, 1]',
                'rgba(239, 118, 122, 1]',
            ],
            borderWidth: 0
        }]
    },
    options: {
        scales: {
            yAxis: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }

});

//Pie

var deptSales = new Chart(pieCtx, {
        type: 'pie',
        data: {
            labels: ['Hiking', 'Running', 'Hunting'],
            datasets: [{
                label: '# of Sales',
                data: [12, 19, 3],
                backgroundColor: [
                    'rgba(238, 184, 104, 1)',
                    'rgba(75, 166, 223, 1)',
                    'rgba(239, 118, 122, 1)',
                ],
                borderWidth: 0
            }]
        },
        options: {

        }
    }

)