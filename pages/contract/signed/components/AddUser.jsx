import Head from 'next/head'
import Image from 'next/image'

// import styles from './index.module.css'
import { useEffect } from 'react'
import { Modal,Form ,Input} from 'antd'



export default function AddUser(props) {


return (
    <Modal title="新增用户" open={props.visible} onOk={props.handleOk} onCancel={props.handleCancel} >
      <Form
    name="basic"
    autoComplete="off"
     form={props.form}
  >
    <Form.Item
      label="名称"
      name="name"
      rules={[{ required: true, message: '请输入签约用户名称' }]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="年龄"
      name="age"
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="地址"
      name="address"

    >
      <Input />
    </Form.Item>
 

   
  </Form>
    </Modal>
)
}