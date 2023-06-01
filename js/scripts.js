var sidebarOpen = false;

var sidebar = document.getElementById('sidebar');

function sidebarOpen() {
    if (!sidebarOpen) {
        sidebar.classList.add('sidebar-responsive');
        sidebarOpen = true;
    }
}

function closeSidebar() {
    if (sidebarOpen) {
        sidebar.classList.remove('sidebar-responsive');
        sidebarOpen = false;
    }
}

// charts

// bar chart
var barCharOptions = {
    series: [{
        data: [1495, 1174, 1101, 1085, 896, 795, 601, 366, 341, 321]
    }],
    chart: {
        type: 'bar',
        background: "transparent",
        height: 350,
        toolbar: {
            show: false,
        }
    },
    plotOptions: {
        bar: {
            borderRadius: 4,
            horizontal: true,
        }
    },
    labels: {
        style: {
            colors: '#f5f7ff',
        }
    },
    dataLabels: {
        enabled: false
    },

    xaxis: {
        categories: ['Sé', 'Lapa', 'Pinheiros', 'Moóca', 'Santo Amaro', 'Butantã', 'Vila Mariana',
            'Santana', 'Ipiranga', 'Casa Verde'
        ],
        labels: {
            style: {
                colors: "#f5f7ff",
            },
        },

    },
    yaxis: {
        labels: {
            style: {
                colors: "#f5f7ff",
            },
        },
    }
};

var barChar = new ApexCharts(document.querySelector("#bar-chart"), barCharOptions);
barChar.render();


var areaChartOptions = {
    series: [{
        name: 'Alertas',
        type: 'area',
        data: [2574, 2945, 1325, 320, 80, 120, 257, 20, 114, 450, 630, 1475]
    }, {
        name: 'Registros',
        type: 'line',
        data: [2658, 2369, 1425, 407, 137, 334, 172, 44, 295, 399, 762, 1308]
    }],
    chart: {
        height: 350,
        type: 'line',
        background: "transparent",
        stacked: false,
        toolbar: {
            show: false,
        }
    },
    stroke: {
        curve: 'smooth'
    },
    fill: {
        type: 'solid',
        opacity: [0.35, 1],
    },
    grid: {
        borderColor: "55596e",
    },
    legend: {
        labels: {
            colors: "f5f7ff"
        }
    },
    labels: ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET ', 'OUT', 'NOV', 'DEZ'],
    markers: {
        size: 0
    },
    xaxis: {
        axisBorder: {
            color: "#55596e",
            show: true
        },
        axisTicks: {
            color: '#55596e',
            show: true,
        },
        labels: {
            offsetY: 5,
            style: {
                colors: "#f5f7ff"
            }
        }
    },
    yaxis: [
        {
            title: {
                text: 'Alertas',
                style: {
                    color: '#f5f7ff',
                }
            },
            labels: {
                style: {
                    colors: "#f5f7ff",
                },
            },

        },
        {
            opposite: true,
            title: {
                text: 'Registros',
                style: {
                    color: '#f5f7ff',
                }
            },
            labels: {
                style: {
                    colors: "#f5f7ff",
                },
            },

        },


    ],
    tooltip: {
        shared: true,
        intersect: false,
        theme: "dark",
        y: {
            formatter: function (y) {
                if (typeof y !== "undefined") {
                    return y.toFixed(0) + " points";
                }
                return y;
            }
        }
    }
};

var areaChart = new ApexCharts(document.querySelector("#area-chart"), areaChartOptions);
areaChart.render();