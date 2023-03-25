import { useEffect ,useState} from 'react'
import { Badge, Calendar,Input,Popconfirm,message } from 'antd';
import {EditOutlined,CheckOutlined,CloseOutlined } from '@ant-design/icons'
import { formatDateKey,checkDateKey} from './util'
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
  const [calendarData,setCalendarData] = useState([{content:'1'}])
  const [edit,setEdit] = useState(emptyTime)
  const [eventInput,setEventInput] = useState('')
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
   {!isEdit &&<EditOutlined style={{ color: '#08c' }} />}
  </Popconfirm>:<EditOutlined style={{ color: '#08c' }} onClick={()=>{handleDateEdit(value)}}/>}
        {isEdit && <div><CheckOutlined onClick={handleDateEventSubmit} /><Popconfirm
    title="退出编辑"
    description="确认退出编辑吗，当前的内容将丢失"
    onConfirm={quitEdit}
    onCancel={()=>{}}
    okText="确认"
    cancelText="取消"
  >
   <CloseOutlined />
  </Popconfirm></div>}</div>
       {isEdit && <TextArea onChange={handleEventInputChange} value={calendarData.find(i=>checkDateKey(value,i.key))?.content}/>}
        {calendarData.map((item) =>{ 
          if(checkDateKey(value,item.key) && !isEdit){
          return(
           <li key={item.key}>
             <Badge status='success' text={item.content} />
          </li>
        )
          }
      })}
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

  const getCalendarData = async ()=>{
    try {
      const res = await fetch("http://localhost:3000/api/trade-calendar", {
      method: "GET"
    })
    const list = await res.json()
    setCalendarData(list.data)
    console.log('get-res',list.data,calendarData);      
    } catch (error) {
      console.log(error);
    }
  }

  const handleEventInputChange = (e)=>{
    setEventInput(e.target.value)
  }

  const handleDateEventSubmit = async ()=>{
    const data = {}
    
    try {
      
      data.key = formatDateKey(edit.year(),edit.month(),edit.date())
      data.content = eventInput
      console.log('ei',edit.month(),data);
      const res = await fetch("http://localhost:3000/api/trade-calendar", {
      method: "POST",
      body: JSON.stringify(data)
    })

    console.log('res',await res.json());
    message.success('编辑成功！')
    quitEdit()
    getCalendarData()
    
    
      
    } catch (error) {
      console.log(error);
    }
    
  }

  useEffect(()=>{
    getCalendarData()
  },[])
  return <Calendar dateCellRender={dateCellRender}  bordered/>;
};
export default App;