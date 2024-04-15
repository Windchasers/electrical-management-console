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
      <div className={styles.pageHead}>结算日志</div>
      {/* <Table  dataSource={dataSource} columns={columnMap[activeKey]} loading={loading} bordered /> */}
      <Table columns={columns} dataSource={dataSource} loading={loading} />
    </div>
  )
}


const columns =  [
    {
      title: '#',
      dataIndex: 'code',
      key: 'code',
      width: '7%'
    },
    {
      title: '客户名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '结算月份',
      dataIndex: 'month',
      key: 'month',
    },
    {
      title: '结算状态',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: '结算日期',
      dataIndex: 'date',
      key: 'date',
      editable: true
    },
    {
      title: '结算报告',
      dataIndex: 'report',
      key: 'report',
      editable: true
    }
  ]
  
