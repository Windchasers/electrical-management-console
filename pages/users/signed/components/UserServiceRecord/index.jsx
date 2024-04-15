import { Inter } from '@next/font/google'
// import styles from './users.module.css'
import { Card, Button, Form, Avatar, Descriptions, Divider,Table, message } from 'antd'
import { PlusOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react'




const cardStyle = { width: '90%', marginBottom: 24, borderRadius: 2 }
const { Meta } = Card;

const serviceColumns = [
  {
    title: '序号',
    dataIndex: 'code',
    key: 'code',
  },
  {
    title: '服务时间',
    dataIndex: 'serviceTime',
    key: 'serviceTime',
  },
  {
    title: '类型',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: '类型',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: '联系人',
    dataIndex: 'contacts',
    key: 'contacts',
  },
  {
    title: '客户诉求',
    dataIndex: 'userRequest',
    key: 'userRequest',
  },
  {
    title: '操作',
    dataIndex: 'action',
    key: 'action',
    render: () => <a>删除</a>,
  },
];

export default function Users() {
  const [serviceData,setServiceData] = useState()


  useEffect(() => {
  }, [])

  return (
    <Card title="客户服务记录" style={cardStyle} extra={<Button shape="circle" icon={<PlusOutlined />} />}>
        <Table columns={serviceColumns} dataSource={serviceData??[]} />
        </Card>
  )
}
