const chartOptions = {
    credits: {
        enabled: false,
    },
    chart: {
        type: "line",
    },
    title: {
        text: "Profits by Month - Food Industry (2023)",
    },
    xAxis: {
        categories: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ],
    },
    yAxis: {
        title: {
            text: "Profits (in USD)",
        },
    },
    series: [
        {
            name: "Profits",
            data: [
                15000, 18000, 22000, 19000, 25000, 28000, 32000, 29000, 27000, 23000, 20000, 17000,
            ],
        },
    ],
};

Highcharts.chart("Page", chartOptions);
