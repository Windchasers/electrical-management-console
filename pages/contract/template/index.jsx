import Head from 'next/head'
import Image from 'next/image'
import { Card, Button, Form, Descriptions, Divider, Table, message } from 'antd'
import styles from './index.module.css'
import { useEffect } from 'react'
import PineChart from './components/PineChart'
import LineChart from './components/LineChart'

const columns = [
  {
    title: '序号',
    dataIndex: 'code',
    key: 'code',
    width:'10%'
  },
  {
    title: '名称',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '年份',
    dataIndex: 'year',
    key: 'year',
  },
  {
    title: '操作',
    dataIndex: 'action',
    key: 'action',
    render: () => <a href={'/file/四川省售电公司与电力用户购售电合同.docx'} style={{color:'#1677FF'}} download>下载</a>,
  },
];

const cardStyle = { width: '100%', marginBottom: 24, borderRadius: 2 }
export default function Users() {

  useEffect(() => {

  })

  return (
    <div className={styles.wrap}>
      <div className={styles.pageHead}>合同模版</div>
      <div className={styles.cardWrap}>
      <Card title="我的合同" style={cardStyle} 
    >

    {/* <Button style={{marginBottom:24}} type='primary' onClick={onInitialContractClick}>拟定新合同</Button> */}
    <Table columns={columns} dataSource={[{code:1,name:'四川省售电公司与电力用户购售电合同',year:2024}]} bordered/>

    </Card>
    </div> 
    </div>
  )
}
