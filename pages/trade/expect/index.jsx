import Head from 'next/head'
import Image from 'next/image'

import styles from './index.module.css'
import { useEffect, useState } from 'react'
import { Table, Tabs, Form, message } from 'antd'
import ClientList from '@/components/ClientList'
import monthMap from '@/utils'


export default function Users() {
  const [dataSource, setDataSourceState] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currUser, setCurrUser] = useState({})

  const getUser = async (id) => {
    setLoading(true)
    const res = await fetch(`/api/user/${id}`, {
      method: "GET",
    })
    const user = await res.json();
    setLoading(false)
    return user
  }

  const onClick = async (user) => {
    const userInstance = await getUser(user.key)
    setCurrUser(userInstance.data)
  }



  useEffect(() => {

  })


  return (
    <div className={styles.contents}>
      <div className={styles.pageHead}>预测电量</div>
      <div className={styles.interfaceWrap}>
        <div className={styles.left}>
          <ClientList onClick={onClick} />
        </div>
        {/* <Table  dataSource={dataSource} columns={columnMap[activeKey]} loading={loading} bordered /> */}
        <div className={styles.right}><Table style={{width:'90%'}} columns={columns} dataSource={dataSource} loading={loading} bordered/></div>
      </div>
    </div>
  )
}


const columns = [
  {
    title: '户号',
    dataIndex: 'code',
    key: 'code',
    width: '5%'
  },
  {
    title: '年份',
    dataIndex: 'year',
    key: 'year',
  },
  {
    title: '类型',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: '计划期数',
    dataIndex: 'planCount',
    key: 'planCount',
  },
  {
    title: '计划电量(MWh)',
    dataIndex: 'planAmount',
    key: 'planAmount',
    editable: true
  },
  {
    title: '操作',
    dataIndex: 'action',
    key: 'action',
    editable: true
  }
]

