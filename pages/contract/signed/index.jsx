import Head from 'next/head'
import Image from 'next/image'

import styles from './index.module.css'
import { useEffect, useState } from 'react'
import { Table, Card, Button, Form, message } from 'antd'
import CurdContractModal from './components/CurdContractModal'

const cardStyle = { width: '100%', marginBottom: 24, borderRadius: 2 }

const columns = [
  {
    title: '序号',
    dataIndex: 'code',
    key: 'code',
    width: '5%'
  },
  {
    title: '名称',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '甲方',
    dataIndex: 'client',
    key: 'client',
  },
  {
    title: '状态',
    dataIndex: 'status',
    key: 'status',
    render: () => '待审批',
  },
  {
    title: '操作',
    dataIndex: 'action',
    key: 'action',
    render: () => <a>查看</a>,
  },
];

export default function SignedContract() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dataSource, setDataSourceState] = useState([]);
  const [loading,setLoading] = useState(false)
  const [form] = Form.useForm();

  const handleOk = async () => {
    console.log('contract-form:', form.getFieldsValue());
    try {
      let res = await fetch(`/api/contract`, {
        method: "POST",
        body: JSON.stringify(
          form.getFieldsValue()
        ),
      });
      res = await res.json();
      message.success('添加合同成功')
    } catch (error) {
      message.error(error.message)
    }
    // handleAddUser()
    setIsModalOpen(false);
    getContractList()
  };

  // 获取合同列表
  const getContractList = async () => {
    setLoading(true)
    const res = await fetch(`/api/contract`, {
      method: "GET",
    })
    const list = await res.json();
    console.log(list);

    setDataSourceState(list.data);
    setLoading(false)
  }

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onInitialContractClick = () => {
    setIsModalOpen(true)
  }

  useEffect(() => {
    getContractList()
  }, [])

  return (
    <div className={styles.wrap}>
      <CurdContractModal visible={isModalOpen} handleCancel={handleCancel} handleOk={handleOk} form={form} />
      <div className={styles.pageHead}>签约合同</div>

      <Card title="合同管理流程" style={cardStyle}>


      </Card>

      <Card title="我的合同" style={cardStyle}
      >

        <Button style={{ marginBottom: 24 }} type='primary' onClick={onInitialContractClick}>拟定新合同</Button>
        <Table columns={columns} dataSource={dataSource} loading={loading} bordered />

      </Card>


    </div>
  )
}
