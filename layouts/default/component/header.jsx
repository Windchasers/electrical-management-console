
import { Button } from 'antd'
import styles from './header.module.css'

export default function Header({  }) {
    return (
    <div className={styles.wrap}>
        <div>贯康电力系统</div>
        <Button>登陆</Button>
    </div>
    )
}
