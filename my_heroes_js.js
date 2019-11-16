var trace1 = {
  x: [1, 2, 3, 4, 5],
  y: [1, 6, 3, 6, 1],
  mode: 'markers+text',
  type: 'scatter',
  name: 'Team A',
  text: ['A-1', 'A-2', 'A-3', 'A-4', 'A-5'],
  textposition: 'top center',
  textfont: {
    family:  'Raleway, sans-serif'
  },
  marker: { size: 12 }
};


var data = [ trace1];

var layout = {
  xaxis: {
    range: [ 0.75, 5.25 ]
  },
  yaxis: {
    range: [0, 8]
  },
  legend: {
    y: 0.5,
    yref: 'paper',
    font: {
      family: 'Arial, sans-serif',
      size: 20,
      color: 'grey',
    }
  },
  title:'Data Labels on the Plot'
};

Plotly.newPlot('myDiv', data, layout, {showSendToCloud: true});
