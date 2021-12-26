const ctx = document.getElementById('submissionChart').getContext('2d');

const DATA_COUNT = 7;
const NUMBER_CFG = {count: DATA_COUNT, min: 0, max: 100};

const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

const borderColor = [
    'rgba(255, 99, 132, 1)',
    'rgba(54, 162, 235, 1)',
    'rgba(255, 206, 86, 1)',
    'rgba(75, 192, 192, 1)',
    'rgba(153, 102, 255, 1)',
    'rgba(255, 159, 64, 1)'
];

const backgroundColor =  [
    'rgba(255, 99, 132, 0.2)',
    'rgba(54, 162, 235, 0.2)',
    'rgba(255, 206, 86, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(153, 102, 255, 0.2)',
    'rgba(255, 159, 64, 0.2)'
];

const data = {
    labels: labels,
    datasets: [
        {
        label: 'Pariwisata',
        data: [12, 19, 3, 5, 2, 3, 10, 20, 6, 10, 9, 25],
        borderColor: borderColor,
        backgroundColor: backgroundColor,
        },
        {
        label: 'Penelitian',
        data: [10, 19, 3, 5, 2, 3, 14, 20, 10, 11, 4, 2],
        borderColor: borderColor,
        backgroundColor: backgroundColor,
        },
        {
        label: 'Pendidikan',
        data: [8, 19, 3, 5, 2, 3, 14, 20, 10, 11, 4, 2],
        borderColor:borderColor,
        backgroundColor: backgroundColor,
        }
    ]
};

const config = {
    type: 'bar',
    data: data,
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Bagan Pengajuan Izin Masuk Kawasan Konservasi'
            }
        }
    },
};

const myChart = new Chart(ctx, config);