
import styles from './index.module.css'
import { Table,Button,Form, message } from 'antd'
import { useEffect ,useState} from 'react'



const columns = [
  {
    title: '用户实际总用水量',
    dataIndex: 'actualWaterAmount',
    key: 'actualWaterAmount',
  },
  {
    title: '已购买总水量',
    dataIndex: 'purchasedWaterAmount',
    key: 'purchasedWaterAmount',
  },
  {
    title: '已购买总水电均价',
    dataIndex: 'purchasedAveragePrice',
    key: 'purchasedAveragePrice',
  },
  {
    title: '2%以内的超用',
    dataIndex: 'directAveragePrice',
    key: 'directAveragePrice',
  },
  {
    title: '2%以上的超用结算价格',
    dataIndex: 'directPrice',
    key: 'directPrice',
  },
  {
    title: '2%以上的少用价格',
    dataIndex: 'directLessPrice',
    key: 'directLessPrice',
  },
];
export default function Users() {
  const [dataSource, setDataSourceState] = useState([]);
  const [loading, setLoading] = useState(false)
  useEffect(()=>{

  })
  
  return (
    <div className={styles.contents}>
      结算电量管理
      <Table dataSource={dataSource} columns={columns} loading={loading} bordered />
    </div>
  )
}
