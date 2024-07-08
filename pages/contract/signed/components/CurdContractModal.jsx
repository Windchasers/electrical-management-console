import Head from 'next/head'
import Image from 'next/image'

// import styles from './index.module.css'
import { useEffect, useState } from 'react'
import { Modal, Form, Input, Select, Steps, Button } from 'antd'

const steps = [
  {
    title: '基本信息',
    content: 'First-content',
  },
  {
    title: '工商注册信息',
    content: 'Second-content',
  },
  {
    title: '用电档案',
    content: 'Last-content',
  },
  {
    title: '联系人信息',
    content: 'Last-content',
  },
  {
    title: '银行账号信息',
    content: 'Last-content',
  },
  {
    title: '资质附件',
    content: 'Last-content',
  },
];

export default function CurdUserModal(props) {

  return (
    <Modal width='1024px' title="拟定新合同" open={props.visible} onOk={props.handleOk} onCancel={props.handleCancel} okText='提交审批' cancelText='取消'
      
    >
     
      <Form
        name="basic"
        autoComplete="off"
        form={props.form}
        initialValues={{ type: 'unsigned', tradeUnit: 'company', unit: 'guankang' }}
      >
        <Form.Item 
          label="合约编号"
          name="code"
          rules={[{ required: true, message: '请输入合约编号' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="合约名称"
          name="name"
          rules={[{ required: true, message: '请输入合约名称' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="合约类型"
          name="type"
          rules={[{ required: true, message: '请选择合约类型' }]}
        >
          <Select
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
          name="tradeUnit"
          rules={[{ required: true, message: '交易单元不能为空' }]}
        >
          <Select
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