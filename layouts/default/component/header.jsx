
import { Button,Avatar,Dropdown,Space } from 'antd'
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
          <a target="_blank" rel="noopener noreferrer" >
           登出
          </a>
        ),
      },
  
  ];

export default function Header({  }) {
    return (
    <div className={styles.wrap}>
        <div className={styles.title}>贯康电力系统</div>
        
        <Dropdown menu={{ items }}>
    <a onClick={(e) => e.preventDefault()}>
      <Space>
      <div>贯康电力</div> <Avatar size={32} icon={<UserOutlined />} />
      </Space>
    </a>
  </Dropdown>
    </div>
    )
}
