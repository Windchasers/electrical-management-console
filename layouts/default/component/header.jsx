
import { Button,Avatar,Dropdown,Space } from 'antd'
import { signOut } from 'next-auth/react';
import { UserOutlined } from '@ant-design/icons'
import styles from './header.module.css'

const items = [
    {
      key: '1',
      label: (
        <a target="_blank" rel="noopener noreferrer" >
         个人信息
        </a>
      ),
    },
    {
        key: '2',
        label: (
          <a target="_blank" rel="noopener noreferrer" onClick={()=>{signOut()}}>
           登出
          </a>
        ),
      },
  
  ];

export default function Header({  }) {
    return (
    <div className={styles.wrap}>
        <div className={styles.title}>electrical-management-console</div>
        
        <Dropdown menu={{ items }}>
    <a onClick={(e) => e.preventDefault()}>
      <Space>
      <div>guankang</div> <Avatar size={32} icon={<UserOutlined />} />
      </Space>
    </a>
  </Dropdown>
    </div>
    )
}
