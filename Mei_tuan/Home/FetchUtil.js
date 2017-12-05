/**
 * Created by a1 on 2017/9/13.
 */

class  FetchUtil {

    defaultProps = {

        name:'',
        age:'',

    };
    getUrl(url) {

        return new Promise((resolve,reject)=>{

            fetch(url).then((response)=>response.json()).then((responseData)=>{

                resolve(responseData);

            }).catch((error)=>{

                reject(error);

            }).done();
        })
    }
    postUrl(url){

        return new Promise((resolve,reject)=>{

            fetch(url).then((response)=>response.json()).then((responseData)=>{


            }).catch((error)=>{


            }).done()

        })
    }

    text(){

      return new Promise((resolve,reject) => {


      })

    }
}

export  default FetchUtil