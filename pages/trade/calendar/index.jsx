import { useEffect ,useState} from 'react'
import { Badge, Calendar,Input,Popconfirm } from 'antd';
import {EditOutlined,CheckOutlined,CloseOutlined } from '@ant-design/icons'
import styles from './index.module.css'
const { TextArea } = Input;
const emptyTime = {year:()=>{return 0},month:()=>{return 0},date:()=>{return 0}}
const checkIsEdit = (edit,value) => {
  return  edit.year() === value.year() && edit.month() === value.month() && edit.date() === value.date()
};
const getMonthData = (value) => {
  if (value.month() === 8) {
    return 1394;
  }
};
const App = () => {
  const [edit,setEdit] = useState(emptyTime)
  const monthCellRender = (value) => {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  };
  const dateCellRender = (value) => {
    const isEdit = checkIsEdit(edit,value)
    return (
      <ul className="events">
        <div className={styles.editHeader}>{edit !== emptyTime?<Popconfirm
    title="切换编辑"
    description="确认切换编辑吗，当前的内容将丢失"
    onConfirm={()=>{handleDateEdit(value)}}
    onCancel={()=>{}}
    okText="确认"
    cancelText="取消"
  >
   <EditOutlined style={{ color: '#08c' }} />
  </Popconfirm>:<EditOutlined style={{ color: '#08c' }} onClick={()=>{handleDateEdit(value)}}/>}
        {isEdit && <div><CheckOutlined /><Popconfirm
    title="退出编辑"
    description="确认退出编辑吗，当前的内容将丢失"
    onConfirm={quitEdit}
    onCancel={()=>{}}
    okText="确认"
    cancelText="取消"
  >
   <CloseOutlined />
  </Popconfirm></div>}</div>
       {isEdit && <TextArea/>}
        {/* {listData.map((item) => (
          <li key={item.content}>
            <Badge status={item.type} text={item.content} />
            
          </li>
        ))} */}
      </ul>
    );
  };

  const handleDateEdit = (value)=>{
    console.log(value,value.date());
    setEdit(value)
  }
  const quitEdit = ()=>{
    setEdit(emptyTime)
  }
  return <Calendar dateCellRender={dateCellRender}  bordered/>;
};
export default App;