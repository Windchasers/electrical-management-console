import Head from 'next/head'
import Image from 'next/image'

// import styles from './index.module.css'
import { useEffect, useState } from 'react'
import { Modal, Form, Input,DatePicker, Select, Steps, Button } from 'antd'


export default function CurdUserModal(props) {

  return (
    <Modal width='1024px' title="新增结算记录" open={props.visible} onOk={props.handleOk} onCancel={props.handleCancel} okText='确认' cancelText='取消'
      
    >
     
      <Form
        name="basic"
        autoComplete="off"
        form={props.form}
        style={{padding:24}}
      >
        <Form.Item 
          label="结算月份"
          name="month"
          rules={[{ required: true, message: '请选择结算月份' }]}
        >
          <DatePicker  style={{width:'100%'}} picker="month" />
        </Form.Item>
        <Form.Item
          label="结算企业总数"
          name="companyAmount"
          rules={[{ required: true, message: '请输入结算企业总数' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="批发交易合同总电量"
          name="tradeElectricAmount"
          rules={[{ required: true, message: '请输入批发交易合同总电量' }]}
        >
                    <Input addonAfter="兆瓦时"/>
        </Form.Item>
        <Form.Item
          label="零售交易合同总电量"
          name="retailElectricAmount"
          rules={[{ required: true, message: '零售交易合同总电量不能为空' }]}
        >
           <Input addonAfter="兆瓦时"/>
        </Form.Item>
        <Form.Item
          label="售电公司购电均价"
          name="sellerPurchaseAveragePrice"
          rules={[{ required: true, message: '交易单元不能为空' }]}
        >
         <Input addonAfter="元/兆瓦时"/>
        </Form.Item>
        <Form.Item
          label="售电公司售电均价"
          name="sellerSellingAveragePrice"
          rules={[{ required: true, message: '用电单元不能为空' }]}
        >
          <Input addonAfter="元/兆瓦时"/>
        </Form.Item>
        <Form.Item
          label="购售电价差收入"
          name="sellingBuyingDifference"
        >
         <Input addonAfter="元"/>
        </Form.Item>
        <Form.Item
          label="分摊考核电费"
          name="share"
        >
          <Input addonAfter="元"/>
        </Form.Item>
        <Form.Item
          label="售电服务费"
          name="exchange"
        >
          <Input  addonAfter="元"/>
        </Form.Item>

      </Form>
    </Modal>
  )
}