
const lineChart = (selector, xAxisData, yAxisData) => {
  var myChart = echarts.init(document.getElementById(selector));
  option = {
      grid: {
        left: 80,
        right: 2,
        top: 10,
        bottom: 60
      },
      tooltip: {
        backgroundColor: 'rgba(255, 255, 255, 0.85)', 
        borderColor: '#ffffff',
        borderWidth: 3,
        borderRadius: 100,
        extraCssText: 'box-shadow: none;',
        trigger: 'axis',
        
        formatter: function (params) {
          var tooltipContent = '<div>';
          tooltipContent += '<span style="font-weight:500;color:#000">' + new Date(params[0].axisValue).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' }) + '</span><br />';
    
          params.forEach(function (item) {
            tooltipContent += '<span>' + item.seriesName + ': $' + item.value + '</span><br />';
          });
    
          tooltipContent += '</div>';
    
          return tooltipContent;
        },
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: xAxisData,
        axisLine: {
          show: false 
        },
        axisLabel: {
          color: '#696969',
          formatter: function (value) {
            return new Date(value).toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
          },
          
        },
      },
      yAxis: {
        type: 'value',
        splitLine: {
          show: true,
          lineStyle: {
            type: 'dashed',
            width: 1.25, 
            color: '#E2E2E2'
          }
        },
        axisLine: {
          show: true, 
          lineStyle: {
            color: 'rgba(255, 255, 255, 0.75)',
            width: 3
          }
        },
        axisLabel: {
          color: '#696969',
          align: 'left',
          margin: 50 
        }
      },
      series: [
        {
          name: 'Amount',
          data: yAxisData,
          type: 'line',
          showSymbol: false,
          symbolSize: 9,
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: '#FFA334' },
              { offset: 1, color: 'rgba(255, 255, 255, 0.00)' }
            ]),
          },
          itemStyle: {
            color: '#FFA334'
          },
        }
      ]
    };
    myChart.setOption(option);
}

// pie chart
const pieChart2 = (selector, dataTitle, data) => {
  var myChart = echarts.init(document.getElementById( selector ));

  option = {
    title: {
    },
    tooltip: {
      trigger: 'item',
      backgroundColor: 'rgba(255, 255, 255, 0.90)', // Transparent black background
        borderColor: '#ffffff',
        borderWidth: 3,
        borderRadius: 100,
        extraCssText: 'box-shadow: none;',
        textStyle: {
      },
    },
    legend: {
      show: false 
    },
    series: [
      {
        name: dataTitle,
        type: 'pie',
        radius: '85%',
        label: {
          textStyle: {
            fontSize: 20,
            fontWeight: '500'
          },
          color: 'black',
        },
        labelLine: {
          length: 120,
          lineStyle: {
            color: '#000', 
            width: 2,
          },
          startSymbol: 'circle',
          endSymbol: 'circle',
        },
        itemStyle: {
          borderColor: 'white', 
          borderWidth: 2,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
          borderColor: 'white', 
          borderWidth: 2,
        },
        data: data,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: '#B8AEF9'
          }
        }
      },
    ],
    graphic: [
      {
        type: 'text',
        left: 'center',
        top: 'center',
        style: {
          text: '•',
          textAlign: 'center',
          fill: 'rgba(255, 255, 255, 0.5)', 
          font: '14px FontAwesome', 
        },
      },
    ],
  };
  
  myChart.setOption(option);
}
