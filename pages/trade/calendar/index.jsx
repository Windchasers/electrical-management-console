import { useEffect ,useState} from 'react'
import { Badge, Calendar,Input } from 'antd';
import {EditOutlined,CheckOutlined,CloseOutlined } from '@ant-design/icons'
import styles from './index.module.css'
const { TextArea } = Input;

const checkIsEdit = (edit,value) => {
  return  edit.year() === value.year() && edit.month() === value.month() && edit.date() === value.date()
};
const getMonthData = (value) => {
  if (value.month() === 8) {
    return 1394;
  }
};
const App = () => {
  const [edit,setEdit] = useState({year:()=>{return 0},month:()=>{return 0},date:()=>{return 0}})
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
        <div className={styles.editHeader}><EditOutlined style={{ color: '#08c' }} onClick={()=>{handleDateEdit(value)}}/>
        {isEdit && <div><CheckOutlined /><CloseOutlined /></div>}</div>
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
  return <Calendar dateCellRender={dateCellRender}  bordered/>;
};
export default App;