import { Form, InputNumber, Popconfirm, Table, Menu,Input ,Tree} from 'antd';
import { getClientBuildManifest } from 'next/dist/client/route-loader';
import { useState,useEffect } from 'react';

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

  const onClick= ()=>{}

  useEffect(()=>{
    // console.log(666);
    getUserList()
  },[])

  return (
    <Menu
      onClick={onClick}
      style={{
        width: 256,
      }}
      defaultSelectedKeys={['/users/signed']}
      mode="inline"
      items={dataSource.map(i=>{return getItem(i.name,i._id)})}
    />
  );
};
export default ClientList;
