
import styles from './index.module.css'
import { Table,Tabs,Form, message } from 'antd'
import { useEffect ,useState} from 'react'
import CombinedTable from '@/components/CombinedTable'

const items = [
  {
    key: 'general',
    label: `通用`
  },
  {
    key: 'direct',
    label: `2%`,
  },
  {
    key: '3',
    label: `Tab 3`,
  },
];

const monthMap = {
  janurary: '一月',
  feburary: '二月',
  march:'三月',
  april:'四月',
  may:'五月',
  june:'六月',
  july:'七月',
  august:'八月',
  september:'九月',
  october:'十月',
  november:'十一月',
  decemeber:'十二月'
}

const columns = [
  {
    title: '月份',
    dataIndex: 'month',
    key: 'month',
    render: (_, record) => {
      return (<div>{monthMap[record.month]}</div>)
    }
  },
  {
    title: '用户实际总用水量',
    dataIndex: 'actualWaterAmount',
    key: 'actualWaterAmount',
    editable:true
  },
  {
    title: '已购买总水量',
    dataIndex: 'purchasedWaterAmount',
    key: 'purchasedWaterAmount',
    editable:true
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
    editable:true
  },
  {
    title: '2%以上的超用结算价格',
    dataIndex: 'directPrice',
    key: 'directPrice',
    editable:true
  },
  {
    title: '2%以上的少用价格',
    dataIndex: 'directLessPrice',
    key: 'directLessPrice',
  },
]
export default function Users() {
  const [dataSource, setDataSourceState] = useState([]);
  const [loading, setLoading] = useState(false)
  const [activeKey,setActiveKey] = useState('general')
  const onChange = (key)=>{
    setActiveKey(key)
  }

  // 获取结算列表
  const getCountList = async ()=>{
    setLoading(true)
      const res = await fetch(`/api/count`, {
            method: "GET",
          })
      const list = await res.json();
      console.log(list);
      
      setDataSourceState(list.data );
      setLoading(false)
  }

  const handleEditSave = async (row) => {
    try{
    const res = await fetch("/api/count", {
      method: "POST",
      body: JSON.stringify(row)
    })
    message.success('编辑成功！')
    getCountList()
    console.log('res',res.json());
  }catch{

  }
  }

  useEffect(()=>{
    getCountList()
  },[])
  
  return (
    <div className={styles.contents}>
      结算电量管理
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      {/* <Table  dataSource={dataSource} columns={columnMap[activeKey]} loading={loading} bordered /> */}
      <CombinedTable columns={columns} data={dataSource} handleEditSave={handleEditSave} loading={loading}/>
    </div>
  )
}
