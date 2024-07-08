import { Inter } from '@next/font/google'
import styles from './users.module.css'
import { Card, Button, Form, Avatar, Descriptions, Divider, Table, message,Modal } from 'antd'
import { PlusOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react'
import CurdUserModal from './components/CurdUserModal'
import ClientList from '@/components/ClientList'
import SupplementInfo from './components/SupplementInfo'
import UserServiceRecord from './components/UserServiceRecord'
import { formUserStatus } from './utils'

const inter = Inter({ subsets: ['latin'] })

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
  const { confirm } = Modal;
  const [loading, setLoading] = useState(false)
  const [refreshUserFlag,setRefreshUserFlag] = useState(false)
  const [currUser, setCurrUser] = useState({})
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [serviceData, setServiceData] = useState([])

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    console.log('form', form.getFieldsValue());
    handleAddUser()
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [form] = Form.useForm();

  const getUser = async (id) => {
    setLoading(true)
    const res = await fetch(`/api/user/${id}`, {
      method: "GET",
    })
    const user = await res.json();
    return user
  }


  const handleAddUser = async () => {
    try {
      let res = await fetch(`/api/user`, {
        method: "POST",
        body: JSON.stringify(
          form.getFieldsValue()
        ),
      });
      res = await res.json();
      message.success('添加签约客户成功')
    } catch (error) {
      message.error(error.message)
    }


  }

  const showDeleteUserConfirm = () => {
    confirm({
      title: '确认删除当前用户吗？',
      content: '删除操作将无法回退，用户关联数据可能被清理',
      okText: '确认',
      okType: 'danger',
      cancelText: '取消',
      onOk:async()=> {
        try {
          setLoading(true)
          console.log(666,currUser);
          const res = await fetch(`/api/user/${currUser._id}`, {
            method: "DELETE",
          })
          const user = await res.json();
          message.success('删除签约客户成功')
        } catch (error) {
          message.error(error.message)
        }
        setCurrUser({})
        refreshUserList()

      }, 
      onCancel() {
        console.log('Cancel');
      },
    });
  };

  const onClick = async (user) => {

    const userInstance = await getUser(user.key)
    setCurrUser(userInstance.data)

  }

  const refreshUserList = ()=> {
    setRefreshUserFlag(true)
  }



  useEffect(() => {

  }, [])

  return (
    <div className={styles.contents}>
      <div className={styles.topic}>签约客户管理</div>
      <div className={styles.interfaceWrap}>
        <div className={styles.left}>
          <div className={styles.operationBar}><Button onClick={showModal}>新增</Button></div>
          <CurdUserModal visible={isModalOpen} handleCancel={handleCancel} handleOk={handleOk} form={form} refresh={refreshUserList} />
          {/* <Table dataSource={dataSource} columns={columns  } loading={loading} bordered /> */}
          <ClientList onClick={onClick} refreshFlag={refreshUserFlag} setter={setRefreshUserFlag} />
        </div>
        <div className={styles.right}>
          <Card title="签约客户信息" style={cardStyle}
          extra={currUser.name ?<Button type='primary' onClick={showDeleteUserConfirm} danger>删除</Button>:''}
          >
            <Meta
              avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
              title={currUser.name ?? '暂未选择客户'}
              description={currUser ? currUser.desc : '请选择目标客户'}
            />
            <Divider />
            <Descriptions>
              <Descriptions.Item label="客户编号">{currUser.code}</Descriptions.Item>
              <Descriptions.Item label="客户状态">{formUserStatus(currUser.status)}</Descriptions.Item>
              <Descriptions.Item label="所属区域">{currUser.region}</Descriptions.Item>
              <Descriptions.Item label="客户经理">{currUser.manager}</Descriptions.Item>
              <Descriptions.Item label="详细地址">{currUser.address}</Descriptions.Item>
            </Descriptions>
          </Card>
          <SupplementInfo />
          <UserServiceRecord/>


        </div>
      </div>
    </div>
  )
}
