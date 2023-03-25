import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './users.module.css'
import { Table,Button,Form, message } from 'antd'
import { useEffect ,useState} from 'react'
import AddUser from './components/AddUser'

const inter = Inter({ subsets: ['latin'] })

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
  },
];

export default function Users() {
  const [dataSource, setDataSourceState] = useState([]);
  const [loading, setLoading] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  
  const handleOk = () => {
    console.log('form',form.getFieldsValue());
    handleAddUser()
    setIsModalOpen(false);
  };
  
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [form] = Form.useForm();

  // 获取用户列表
  const getUserList = async ()=>{
    setLoading(true)
  const res = await fetch("http://localhost:3000/api/user", {
        method: "GET",
      })
      const list = await res.json();
      console.log(list);
      
      setDataSourceState(list.data );
      setLoading(false)
  }

  const handleAddUser = async ()=>{
  try {
    let res = await fetch("http://localhost:3000/api/user", {
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
  getUserList()

  }


  
  useEffect(()=>{
    // console.log(666);
    getUserList()
  },[])
  
  return (
    <div className={styles.contents}>
      <div className={styles.topic}>签约客户管理</div>
      <div className={styles.operationBar}><Button onClick={showModal}>新增</Button></div>
      {/* <Tabs
        defaultActiveKey="1"
        tabPosition={mode}
        style={{ height: 220 }}
        items={new Array(30).fill(null).map((_, i) => {
          const id = String(i);
          return {
            label: `Tab-${id}`,
            key: id,
            disabled: i === 28,
            children: `Content of tab ${id}`,
          };
        })}
      /> */}
      <AddUser visible={isModalOpen} handleCancel={handleCancel} handleOk = {handleOk} form={form}/>
      <Table dataSource={dataSource} columns={columns  } loading={loading} bordered />
    </div>
  )
}
