// make data
var chart = c3.generate({
    data: {
        url: '/my_heroes_csv.csv',
        type: 'scatter'
    }
});

// make chart from data
var chart = c3.generate({
    bindto: '#target', // specify the DOM element to which the chart will be bound
    data: chart, // specify the data to be used in the chart
    size: { // specify the chart size
      height: 340,
      width: 680
    },
    axis: { // specify the x and y axis labels
      x: {
        label: 'Like',
      },
      y: {
        label: 'Skilled'
      }
    }
  });
