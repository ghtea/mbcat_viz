// make chart
var chart = c3.generate({
    data: { // specify the data to be used in the chart
        url: 'my_heroes_csv.csv',
        type: 'scatter',
        x:'Like'
    },
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
