export function formUserStatus(statusCode:string):any{
    const map = {
        'signed':'已签约',
        'unsigned':'未签约',
        'expired':'合同过期'
    }

    return map[statusCode]
}