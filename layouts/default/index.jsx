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
  getItem('user-management', 'users', <MailOutlined />, [
    getItem('user-signed', '/users/signed'),
    getItem('user-factory', '/users/factory'),
  ]),
  getItem('contract-management', 'contract', <AppstoreOutlined />, [
    getItem('contract-summary', '/contract/summary'),
    getItem('contract-signed', '/contract/signed'),
  ]),
  getItem('trade-management', 'trade', <SettingOutlined />, [
    getItem('trade-calendar', '/trade/calendar'),
    getItem('expectation', '/trade/expect'),
    // getItem('市场结果', '/trade/result'),
    // getItem('收益电价', '/trade/price'),

  ]),
  getItem('count-managment', 'count', <SettingOutlined />, [
    getItem('count-amount', '/count/amount'),
    getItem('count-trade', '/count/trade'),
    getItem('count-compare', '/count/compare'),
    getItem('count-log', '/count/log'),
    getItem('count-recycle', '/count/recycle'),

  ]),
  getItem('data', 'data', <SettingOutlined />, [
    getItem('user-data', '/data/users'),
    getItem('expect-data', '/data/expect')
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