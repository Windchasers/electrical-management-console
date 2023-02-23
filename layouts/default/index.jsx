import { MailOutlined, SettingOutlined,AppstoreOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import Header from './component/header'
import styles from './index.module.css'
import { useRouter } from 'next/router'
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem('客户管理', 'users', <MailOutlined />, [
    getItem('签约客户管理', '/users/signed'),
    getItem('电厂客户管理', '/users/factory'),
  ]),
  getItem('合同管理', 'contract', <AppstoreOutlined />, [
    getItem('合同概览', '/contract/summary'),
    getItem('签约合同', '/contract/signed'),
  ]),
  getItem('交易管理', 'trade', <SettingOutlined />, [
    getItem('交易日历', '/trade/calendar'),
    getItem('预测电量', '/trade/expect'),
    getItem('市场结果', '/trade/result'),
    getItem('收益电价', '/trade/price'),

  ]),
  getItem('结算管理', 'count', <SettingOutlined />, [
    getItem('结算电量', '/count/amount'),
    getItem('交易结算', '/count/trade'),
    getItem('结算对比', '/count/compare'),
    getItem('结算日志', '/count/log'),
    getItem('费用回收', '/count/recycle'),

  ]),
  getItem('数据分析', 'data', <SettingOutlined />, [
    getItem('客户简况', '/data/users'),
    getItem('电量预测', '/data/expect')
  ]),
 
];
const Layout = ({children}) => {
  const router = useRouter()
  const onClick = (e) => {
    router.push(e.key)
    console.log('click ', e);
  };
  return ( 
    <div className={styles.wrap}>
    <Header></Header>
    <div className={styles.menu}>
    <Menu
      onClick={onClick}
      style={{
        width: 256,
      }}
      defaultSelectedKeys={['/users/signed']}
      defaultOpenKeys={['users']}
      mode="inline"
      items={items}
    />
    </div>
    
    <div className={styles.main}>{children}</div>
   
    </div>
  );
};
export default Layout;