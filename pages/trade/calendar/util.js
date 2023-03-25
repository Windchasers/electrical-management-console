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