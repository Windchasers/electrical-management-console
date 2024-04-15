export const formatDateKey = (year,month,date)=>{
    let y = String(year)
    let m 
    if(month+1<10){
        m = '0'.concat(String(month+1))
    }else{
        m = String(month+1)
    }
    let d
    if(date<10){
        d = '0'.concat(String(date))
    }else{
        d = String(date)
    }
    return y.concat(m).concat(d)
}

export const checkDateKey = (value, key)=>{
    const compareKey = formatDateKey(value.year(),value.month(),value.date())
    return compareKey === key

}

export const monthMap = {
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