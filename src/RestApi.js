import Axios from 'axios';


const call = async ({ method, data, header, url }) => {
    let optons = {
        method: method ? method : "GET",
        data: data ? data : null,
        header: header ? header : null,
    }
    const res= await Axios(url, optons);
    if(res.status=="200"){
        return res.data;
    }else{
        return res.error;
    }
}
// static  seriesFun=async (data)=>{

//     data.map((params)=> {
//         this.apiAxios();
//     })
//   }
//   static    parallelFun=async ()=>{

//   }



module.exports =  {
    _callApi : call
};