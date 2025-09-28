const ctxGanhos = document.getElementById('graficoGanhos').getContext('2d');
new Chart(ctxGanhos, {
  type: 'line',
  data: {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago'],
    datasets: [{
      label: 'Ganhos',
      data: [500, 800, 600, 700, 650, 900, 1100, 1200],
      borderColor: '#000',
      backgroundColor: '#ffc0cb',
      fill: true,
      tension: 0.3
    }]
  }
});

const ctxComparativo = document.getElementById('graficoComparativo').getContext('2d');
new Chart(ctxComparativo, {
  type: 'pie',
  data: {
    labels: ['Entradas', 'Saídas'],
    datasets: [{
      data: [2500, 800],
      backgroundColor: ['#ffc0cb', '#000']
    }]
  }
});
