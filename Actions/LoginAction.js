/**
 * Created by a1 on 2017/8/25.
 */
import *as types from './action'
import FetchUtil  from  '../Mei_tuan/Home/FetchUtil'
export function doLogin()

{
    return dispatch => {

        dispatch(isLogining());
        // 模拟用户登录
        let fetchtil = new FetchUtil();

        fetchtil.getUrl('http://app.whgzt.com/index.php/Login/login?phone=13966666666&password=123456').then((responseData)=>{

            dispatch(loginSuccess(true, responseData));

        }).catch((error)=>{

             dispatch(loginSuccess(false, null));

        }).done();


    }
}
function isLogining()
{
    return {

        type: types.LOGIN_IN_DOING
    }
}
function loginSuccess(isSuccess, user)
{
    return{

        type: types.LOGIN_IN_DONE,
        isSuccess: isSuccess,
        user: user
    }
}