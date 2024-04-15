import Head from 'next/head'
import Image from 'next/image'
import { Card, Button, Form, Descriptions, Divider, Table, message } from 'antd'
import styles from './index.module.css'
import { useEffect } from 'react'
import PineChart from './components/PineChart'
import LineChart from './components/LineChart'


const cardStyle = { width: '49%', marginBottom: 24, borderRadius: 2 }
export default function Users() {
  useEffect(() => {

  })

  return (
    <div className={styles.wrap}>
      <div className={styles.pageHead}>合同概览</div>
      <div className={styles.cardWrap}>
      <div className={styles.cards}>
        <Card style={cardStyle} title='合同类型分布'><PineChart width='760px' height='400px' 
        data={
          [{ value: 0, name: '批发合同' },
        { value: 500, name: '购电合同' },
        { value: 1500, name: '零售合同' },]
      } 
        /></Card>
        <Card style={cardStyle} title='合同套餐分布'><PineChart width='760px' height='400px' 
        data={
          [{ value: 1, name: '不让利套餐' },
        { value: 0, name: '分成让利套餐' },
        { value: 0, name: '固定单价套餐' },
        { value: 0, name: '固定让利套餐' },]
      } 
        /></Card>
       
      </div>
      <Card title='合同签约情况'><LineChart width='100%' height='500px' 
        data={
          [{ value: 1, name: '不让利套餐' },
        { value: 0, name: '分成让利套餐' },
        { value: 0, name: '固定单价套餐' },
        { value: 0, name: '固定让利套餐' },]
      } 
        /></Card>
        </div>
    </div> 
  )
}
