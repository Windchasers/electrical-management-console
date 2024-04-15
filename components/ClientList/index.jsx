import { Form, InputNumber, Popconfirm, Table, Menu, Input, Divider, Spin } from 'antd';
import { getClientBuildManifest } from 'next/dist/client/route-loader';
import { useState, useEffect } from 'react';
import styles from './index.module.css'

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const ClientList = (props) => {
  const [form] = Form.useForm();
  const [dataSource, setDataSourceState] = useState([]);
  const [loading, setLoading] = useState(false)

  // 获取用户列表
  const getUserList = async () => {
    setLoading(true)
    const res = await fetch(`/api/user`, {
      method: "GET",
    })
    const list = await res.json();
    console.log(list);

    setDataSourceState(list.data);
    setLoading(false)
  }

  const onClick = (user) => {
    console.log('clkuser:', user)
  }

  useEffect(() => {
    // console.log(666);
    getUserList()
  }, [])

  return (
    <div>
      <div className={styles.header}>客户列表</div>
      <Divider />
      <div className={styles.menu}>
        {loading && <Spin size='large' />}
        {!loading&&<Menu
          onClick={props.onClick ?? onClick}
          style={{
            width: 256,
          }}
          defaultSelectedKeys={['/users/signed']}
          mode="inline"
          items={dataSource.map(i => { return getItem(i.name, i._id) })}
        />}
      </div>
    </div>

  );
};
export default ClientList;
