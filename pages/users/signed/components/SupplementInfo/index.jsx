
import { Card, Button, Form, Avatar, Descriptions, Divider, Table, message } from 'antd'
import { PlusOutlined } from '@ant-design/icons';
import styles from './index.module.css'
import { useEffect, useState } from 'react'


const cardStyle = { width: '90%', marginBottom: 24, borderRadius: 2 }
const { Meta } = Card;


export default function SupplementInfo() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false)
  const [contacts, setContacts] = useState(null)


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
    getUserList()

  }



  useEffect(() => {

  }, [])

  return (
    <Card title="其他信息" style={cardStyle}>
      <div>
        <div style={{fontWeight:600}}>企业联系人</div>
        {contacts&&contacts?.map(contact => {
          return <div className={styles.label}>
            <div>
              {contact.name}
            </div>
          </div>
        })}
         {!contacts&& <div className={styles.label}>
            <div>
              暂无联系人
            </div>
          </div>
        }

      </div>
      <div>
        <div style={{fontWeight:600}}>银行账号</div>
        {contacts&&contacts?.map(contact => {
          return <div className={styles.label}>
            <div>
              {contact.name}
            </div>
          </div>
        })}
         {!contacts&& <div className={styles.label}>
            <div>
              暂无银行账号
            </div>
          </div>
        }
      </div>

    </Card>
  )
}
