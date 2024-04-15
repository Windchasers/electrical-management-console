import ReactECharts  from "echarts-for-react"
import * as echarts from "echarts"
//定义组件可传参数
type DomProps={   
    width?:string;
    height?:string;
}
const LineChart =(props:DomProps)=>{
    const  option = {
      xAxis: {
        type: 'category',
        data: ['1', '2', '3', '4', '5', '6', '7']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [ 1],
          type: 'line'
        }
      ]
    };
    
 
    return (
        <ReactECharts  option={option} style={{width:`${props?.width}`,height:`${props?.height}`}} ></ReactECharts>
    )
 
}
export  default LineChart;