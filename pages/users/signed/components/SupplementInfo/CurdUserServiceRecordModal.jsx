import Head from 'next/head'
import Image from 'next/image'

// import styles from './index.module.css'
import { useEffect } from 'react'
import { Modal,Form ,Input,Select} from 'antd'



export default function CurdUserServiceRecordModal(props) {


return (
    <Modal title="新增用户" open={props.visible} onOk={props.handleOk} onCancel={props.handleCancel} okText='确定' cancelText='取消'>
      <Form
    name="basic"
    autoComplete="off"
     form={props.form}
  >
    <Form.Item
      label="客户名称"
      name="name"
      rules={[{ required: true, message: '请输入签约客户名称' }]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="客户简称"
      name="desc"
      rules={[{ required: true, message: '请输入签约客户简称' }]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="客户状态"
      name="status"
      rules={[{ required: true, message: '请选择签约客户状态' }]}
    >
      <Select
      defaultValue="unsigned"
      style={{ width: '100%' }}
      options={[
        { value: 'unsigned', label: '未签约' },
        { value: 'signed', label: '已签约' },
        { value: 'expired', label: '合同过期' },
      ]}
    />
    </Form.Item>
    <Form.Item
      label="交易市场"
      name="market"
      rules={[{ required: true, message: '交易市场不能为空' }]}
    >
      <Select
      style={{ width: '100%' }}
      options={[
        { value: 'sichuan', label: '四川电力交易中心' },
        { value: 'beijing', label: '首都电力交易中心' },
        { value: 'qinghai', label: '青海电力交易中心' },
        { value: 'chongqing', label: '重庆电力交易中心' },
        { value: 'gansu', label: '甘肃电力交易中心' },
      ]}
    />
    </Form.Item>
    <Form.Item
      label="交易单元"
      name="unit"
      rules={[{ required: true, message: '交易单元不能为空' }]}
    >
      <Select
      defaultValue="company"
      style={{ width: '100%' }}
      options={[
        { value: 'company', label: '售电公司' },
      ]}
    />
    </Form.Item>
    <Form.Item
      label="用电单元"
      name="unit"
      rules={[{ required: true, message: '用电单元不能为空' }]}
    >
      <Select
      defaultValue="guankang"
      style={{ width: '100%' }}
      options={[
        { value: 'guankang', label: '贯康电力用电单元' },
        { value: 'user', label: '电力用户' },
      ]}
    />
    </Form.Item>
    <Form.Item
      label="交易代码"
      name="tradeCode"
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="行业分类"
      name="field"
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="所在地区"
      name="region"
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="详细地址"
      name="address"
    >
      <Input />
    </Form.Item>
 

   
  </Form>
    </Modal>
)
}