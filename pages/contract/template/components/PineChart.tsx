import ReactECharts  from "echarts-for-react"
import * as echarts from "echarts"
//定义组件可传参数
type DomProps={   
    width?:string;
    height?:string;
    data: []
}
const PineChart =(props:DomProps)=>{
    const  option = {
      tooltip: {
        trigger: 'item'
      },
      legend: {
        top: '5%',
        left: 'center'
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2
          },
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 40,
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          data: props.data
        }
      ]
    };
    
 
    return (
        <ReactECharts  option={option} style={{width:`${props?.width}`,height:`${props?.height}`}} ></ReactECharts>
    )
 
}
export  default PineChart;