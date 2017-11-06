define(['jquery','echarts', './utils'], function($, echarts) {
    // 初始化echarts实例
    var myChart = echarts.init(document.getElementById('main'));

    // 图表中的信息项
    var option = {
        title: {
            text: 'ECharts 入门示例'
        },
        tooltip: {},
        legend: {
            data:['销量']
        },
        xAxis: {
            data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
        },
        yAxis: {},
        series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
        }]
    };

    // 展示数据对应图表
    myChart.setOption(option);
})