import Head from 'next/head'
import Image from 'next/image'

import styles from './index.module.css'
import { useEffect, useState } from 'react'
import { Table, Tabs, Form, message } from 'antd'
import monthMap from '@/utils'


export default function Users() {
  const [dataSource, setDataSourceState] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currTab, setCurrTab] = useState('seller');



  useEffect(() => {

  })


  return (
    <div className={styles.contents}>
      <div className={styles.pageHead}>费用回收</div>
      {/* <Table  dataSource={dataSource} columns={columnMap[activeKey]} loading={loading} bordered /> */}
      <Table columns={columns} dataSource={dataSource} loading={loading} />
    </div>
  )
}


const columns =  [
    {
      title: '序号',
      dataIndex: 'code',
      key: 'code',
      width: '5%'
    },
    {
      title: '公司名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '应收服务费',
      dataIndex: 'serviceCost',
      key: 'serviceCost',
    },
    {
      title: '实收服务费',
      dataIndex: 'serviceCostCharged',
      key: 'serviceCostCharged',
    },
    {
      title: '回收率',
      dataIndex: 'recycleRate',
      key: 'recycleRate',
      editable: true
    },
    {
      title: '操作',
      dataIndex: 'action',
      key: 'action',
      editable: true
    }
  ]
  
