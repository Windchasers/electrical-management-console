import Head from 'next/head'
import Image from 'next/image'

import styles from './index.module.css'
import { useEffect, useState } from 'react'
import { Table, Tabs,Button, Form, message } from 'antd'
import CurdTradeModal from './components/CurdTradeModal'
import monthMap from '@/utils'


export default function Users() {
  const [dataSource, setDataSourceState] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currTab, setCurrTab] = useState('seller');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    console.log('trade-form', form.getFieldsValue());
    handleAddTrade()
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleAddTrade = async () => {
    try {
      let res = await fetch(`/api/trade`, {
        method: "POST",
        body: JSON.stringify(
          form.getFieldsValue()
        ),
      });
      res = await res.json();
      message.success('添加结算记录成功')
    } catch (error) {
      message.error(error.message)
    }
    getTradeList()
  }

  // 获取交易记录列表
  const getTradeList = async () => {
    setLoading(true)
    const res = await fetch(`/api/trade`, {
      method: "GET",
    })
    const list = await res.json();
    console.log(list);

    setDataSourceState(list.data);
    setLoading(false)
  }


  useEffect(() => {
    getTradeList()
  },[])

  const onChange = (tab) => {
    console.log('tab', tab);
    setCurrTab(tab)
  }

  return (
    <div className={styles.contents}>
      <div className={styles.pageHead}>交易结算</div>
      <Tabs defaultActiveKey="seller" items={[{ key: 'seller', label: '售电公司' }, { key: 'buyer', label: '用电企业' }]} onChange={onChange} />
      <CurdTradeModal visible={isModalOpen} handleCancel={handleCancel} handleOk={handleOk} form={form} />
      <Button style={{marginBottom:12}} onClick={showModal} type='primary'>新增</Button>
      <Table columns={columnSelector[currTab]} dataSource={dataSource} loading={loading} bordered />
    </div>
  )
}


const columnSelector = {
  seller: [
    {
      title: '结算月份',
      dataIndex: 'month',
      key: 'month',
      // render: (_, record) => {
      //   return (<div>{monthMap[record.month]}</div>)
      // },
      width: '7%'
    },
    {
      title: '结算企业总数',
      dataIndex: 'companyAmount',
      key: 'companyAmount',
    },
    {
      title: '批发交易合同总电量',
      dataIndex: 'tradeElectricAmount',
      key: 'tradeElectricAmount',
    },
    {
      title: '零售交易合同总电量',
      dataIndex: 'retailElectricAmount',
      key: 'retailElectricAmount',
    },
    {
      title: '售电公司购电均价',
      dataIndex: 'sellerPurchaseAveragePrice',
      key: 'sellerPurchaseAveragePrice',
      editable: true
    },
    {
      title: '售电公司售电均价',
      dataIndex: 'sellerSellingAveragePrice',
      key: 'sellerSellingAveragePrice',
      editable: true
    },
    {
      title: '购售电价差收入',
      dataIndex: 'sellingBuyingDifference',
      key: 'sellingBuyingDifference',
    },
    {
      title: '分摊考核电费',
      dataIndex: 'share',
      key: 'share',
    },
    {
      title: '售电服务费',
      dataIndex: 'exchange',
      key: 'exchange',
    },
    {
      title: '操作',
      dataIndex: 'action',
      key: 'action',
    },
  ]
  ,
  buyer: [
    {
      title: '交易月份',
      dataIndex: 'month',
      key: 'month',
      // render: (_, record) => {
      //   return (<div>{monthMap[record.month]}</div>)
      // },
      width: '7%'
    },
    {
      title: '企业名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '本月实际用电量',
      dataIndex: 'monthlyAmout',
      key: 'monthlyAmout',
    },
    {
      title: '全年协议计划电量',
      dataIndex: 'yearlyPlanAmout',
      key: 'yearlyPlanAmout',
    },
    {
      title: '全年协议交易电价',
      dataIndex: 'yearlyPlanPrice',
      key: 'yearlyPlanPrice',
      editable: true
    },
    {
      title: '协议外月度计划电量',
      dataIndex: 'monthlyOutterPlanAmount',
      key: 'monthlyOutterPlanAmount',
      editable: true
    },
    {
      title: '协议外月度计划电价',
      dataIndex: 'monthlyOutterPlanPrice',
      key: 'monthlyOutterPlanPrice',
    },
    {
      title: '计划结算电量',
      dataIndex: 'paidPlanAmount',
      key: 'paidPlanAmount',
    },
    {
      title: '计划结算电价',
      dataIndex: 'paidPlanPrice',
      key: 'paidPlanPrice',
    },
    {
      title: '计划结算电费',
      dataIndex: 'paidPlanTotal',
      key: 'paidPlanTotal',
    },
    {
      title: '超用电量',
      dataIndex: 'overuseAmount',
      key: 'overuseAmount',
    },
    {
      title: '超用结算电价',
      dataIndex: 'overusePrice',
      key: 'overusePrice',
    },
    {
      title: '超用结算电费',
      dataIndex: 'overuseTotal',
      key: 'overuseTotal',
    },
    {
      title: '目录电价结算电费',
      dataIndex: 'accordTotal',
      key: 'accordTotal',
    },
    {
      title: '操作',
      dataIndex: 'action',
      key: 'action',
    },
  ]
}