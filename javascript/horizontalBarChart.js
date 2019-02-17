var horizontalBardata = {
    labels: ['Totaal kilometers', 'Afgelegd'],
    datasets: [
        {
            label: 'Distance (km)',
            backgroundColor: ['#92d400' ,'#db0000'],
            data: [400000000, 270270270 ,0 ]
        }
    ]
};

var horizontalBaroptions = {
    legend: {display: false},
    scales: {
        yAxes: [{
            gridLines: {
                color: "rgba(0, 0, 0, 0)",
            }
        }]
    }
};
var horizontalBarWrapper = document.getElementById('horizontalBarWrapper');

var horizontalBarChart = new Chart(horizontalBarWrapper, {
    type: 'horizontalBar',
    data: horizontalBardata,
    options: horizontalBaroptions,
    title: {
        display: true,
        text: 'Distance'
    }
});
