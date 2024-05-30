import Head from 'next/head'
import Image from 'next/image'

// import styles from './index.module.css'
import { useEffect, useState } from 'react'
import { useStepsForm } from 'sunflower-antd';
import { Modal, Form, Input, Select, Steps, Button, DatePicker,message } from 'antd'

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 18 },
};
const tailLayout = {
  wrapperCol: { offset: 18, span: 10 },
};

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
  // {
  //   title: '资质附件',
  //   content: 'Last-content',
  // },
];

export default function CurdUserModal(props) {
  const {
    form,
    formValues,
    current,
    gotoStep,
    stepsProps,
    formProps,
    submit,
    formLoading,
  } = useStepsForm({
    async submit(values) {
      const { status, email, desc } = values;
      console.log('values', status, email, desc,values);
      // await new Promise(r => setTimeout(r, 1000));
      try {
      let res = await fetch(`/api/user`, {
        method: "POST",
        body: JSON.stringify(
          values
        ),
      });
      res = await res.json();
      message.success('添加签约客户成功')
    } catch (error) {
      message.error(error.message)
    }
    props.refresh()
      props.handleCancel()
      return 'ok';
    },
    total: 5,
  });

  const addUser = async () => {
    console.log('values', formValues);
    // try {
    //   let res = await fetch(`/api/user`, {
    //     method: "POST",
    //     body: JSON.stringify(
    //       form.getFieldsValue()
    //     ),
    //   });
    //   res = await res.json();
    //   message.success('添加签约客户成功')
    // } catch (error) {
    //   message.error(error.message)
    // }
    // props.refresh()

  }

  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  return (
    <Modal width='1024px' title="新增用户" open={props.visible} onCancel={props.handleCancel} footer={null}
    >
      <Steps {...stepsProps} style={{ marginBottom: 24, marginTop: 24 }} current={current} items={items} />
      <Form
        name="basic"
        autoComplete="off"
        {...layout}
        {...formProps}
        initialValues={{ status: 'unsigned', unit: 'company', electricalUnit: 'guankang' }}
      >
        {formList[current]}
        <Form.Item {...tailLayout} >
          <div style={{marginTop:24, display:'flex',justifyContent: 'flex-end'}}>
          {current < steps.length - 1 && (
            <Button type="primary" style={{ marginRight: '8px' }} onClick={() => gotoStep(current + 1)}>
              下一步
            </Button>
          )}
          {current > 0 && (
            <Button style={{ marginRight: '8px' }} onClick={() => gotoStep(current - 1)}>
              上一步
            </Button>)}
          {current === steps.length - 1 && 
          <Button
            style={{ marginRight: 10 }}
            type="primary"
            loading={formLoading}
            onClick={() => {
              submit().then(result => {
                if (result === 'ok') {
                  gotoStep(current + 1);
                }
              });
            }}
          >确定</Button>}
          <Button onClick={()=>{props.handleCancel()}}>取消</Button>
          </div>
        </Form.Item>
      </Form>
    </Modal>
  )
}

const formList = [
  <>
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
        style={{ width: '100%' }}
        options={[
          { value: 'company', label: '售电公司' },
        ]}
      />
    </Form.Item>
    <Form.Item
      label="用电单元"
      name="electricalUnit"
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
  </>,
  <>
    <Form.Item
      label="统一信用代码"
      name="creditCode"
      rules={[{ required: true, message: '请输入统一信用代码' }]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="企业名称"
      name="companyName"
      rules={[{ required: true, message: '请输入签约企业名称' }]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="法人代表"
      name="legalPerson"

    >
      <Input placeholder='请输入法人代表' />
    </Form.Item>
    <Form.Item
      label="企业注册地址"
      name="registerAddress"
    >
      <Input placeholder='请输入企业注册地址' />
    </Form.Item>
    <Form.Item
      label="注册资金"
      name="registeredCapital"
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="企业性质"
      name="companyType"
    >
      <Select
        style={{ width: '100%' }}
        options={[
          { value: 'independent', label: '独资' },
          { value: 'corporation', label: '合资' },
          { value: 'foreignMerchant', label: '外商' },
          { value: 'SOE', label: '国有企业' }
        ]}
      />
    </Form.Item>
    <Form.Item
      label="电话号码"
      name="phone"
    >
      <Input placeholder='请输入电话号码' />
    </Form.Item>
  </>,
  <>
    <Form.Item
      label="电网户号"
      name="accountNum"
      rules={[
        {
          required: true,
          message: '请输入电网户号',
        },
      ]}
    >
      <Input placeholder="请输入电网户号" />
    </Form.Item>
    <Form.Item
      label="电网户名"
      name="accountName"
      rules={[
        {
          required: true,
          message: '请输入电网户名',
        },
      ]}
    >
      <Input placeholder="请输入电网户名" />
    </Form.Item>
    <Form.Item
      label="所属电网"
      name="electricMatrix"
    >
      <Select
        style={{ width: '100%' }}
        options={[
          { value: 'sichuan', label: '国网四川省电力公司' },
          { value: 'others', label: '其他' },
        ]}
      />
    </Form.Item>
    <Form.Item label="抄表日" name="recordDate"
      rules={[
        {
          required: true,
          message: '请输入抄表日',
        },
      ]}>
      <Input placeholder="请输入抄表日" />
    </Form.Item>
    <Form.Item
      label="抄表周期"
      name="cycle"
    >
      <Select
        style={{ width: '100%' }}
        options={[
          { value: 'eachMonth', label: '月月' },
          { value: 'singleMonth', label: '单月' },
          { value: 'doubleMonth', label: '双月' },
          { value: 'day', label: '天' },
        ]}
      />
    </Form.Item>
    <Form.Item label="年均用电量" name="yearlyUsage">
      <Input placeholder="请输入年均用电量" />
    </Form.Item>
    <Form.Item
      label="接入电压等级"
      name="voltageLevel"
    >
      <Select
        style={{ width: '100%' }}
        options={[
          { value: '10', label: '10KV' },
          { value: '20', label: '20KV' },
          { value: '35', label: '35KV' },
          { value: '66', label: '66KV' },
          { value: '110', label: '110KV' },
          { value: '220', label: '220KV' },
          { value: '330', label: '330KV' },
        ]}
      />
    </Form.Item>
    <Form.Item label="变压器容量" name="volume">
      <Input placeholder="请输入变压器容量" />
    </Form.Item>
    <Form.Item label="目录电价" name="menuPrice">
      <Input placeholder="请输入目录电价" />
    </Form.Item>
    <Form.Item label="输配电价" name="outputPrice">
      <Input placeholder="请输入输配电价" />
    </Form.Item>
  </>,
  <>
    <Form.Item
      label="联系人"
      name="contact"
      rules={[
        {
          required: true,
          message: '请输入联系人',
        },
      ]}
    >
      <Input placeholder="请输入联系人" />
    </Form.Item>
    <Form.Item label="联系人职务" name="contactJob">
      <Input placeholder="请输入联系人职务" />
    </Form.Item>
    <Form.Item label="办公电话" name="workPhone">
      <Input placeholder="请输入办公电话" />
    </Form.Item>
    <Form.Item label="移动电话" name="mobilePhone"
      rules={[
        {
          required: true,
          message: '请输入联系人',
        },
      ]}
    >
      <Input placeholder="请输入移动电话" />
    </Form.Item>
    <Form.Item label="传真号码" name="fax">
      <Input placeholder="请输入传真号码" />
    </Form.Item>
    <Form.Item label="邮编" name="zipCode">
      <Input placeholder="请输入邮编" />
    </Form.Item>
    <Form.Item label="电子邮箱" name="email">
      <Input placeholder="请输入电子邮箱" />
    </Form.Item>
    <Form.Item label="QQ/微信" name="tecent">
      <Input placeholder="请输入QQ/微信号码" />
    </Form.Item>
    <Form.Item label="生日" name="birthday">
      <DatePicker placeholder="请输入QQ/微信号码" />
    </Form.Item>
    <Form.Item label="联系地址" name="contactAddress">
      <Input placeholder="请输入联系地址" type='textArea' />
    </Form.Item>
  </>,
  <>
    <Form.Item
      label="企业名称"
      name="bankCompanyName"
    >
      <Input placeholder="请输入企业名称" />
    </Form.Item>
    <Form.Item label="税号" name="taxNum">
      <Input placeholder="请输入税号" />
    </Form.Item>
    <Form.Item label="单位地址" name="unitAddress">
      <Input placeholder="请输入单位地址" />
    </Form.Item>
    <Form.Item label="电话号码" name="phoneNum">
      <Input placeholder="请输入电话号码" />
    </Form.Item>
    <Form.Item
      label="开户银行"
      name="depositBank"
    >
      <Select
        style={{ width: '100%' }}
        options={[
          { value: 'gongshang', label: '工商银行' },
          { value: 'jianshe', label: '建设银行' },
          { value: 'nongye', label: '农业银行' },
          { value: 'zhongguo', label: '中国银行' },
        ]}
      />
    </Form.Item>
    <Form.Item label="银行账号" name="bankAccount">
      <Input placeholder="请输入银行账号" />
    </Form.Item>
    <Form.Item label="开户行地址" name="depositBankAddress">
      <Input placeholder="请输入开户行地址" />
    </Form.Item>
  </>
]