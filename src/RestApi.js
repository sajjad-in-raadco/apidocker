import Axios from 'axios';


const call = async ({ method, data, header, url }) => {
    let optons = {
        method: method ? method : "GET",
        data: data ? data : null,
        header: header ? header : null,
    }
    return await Axios(url, optons);
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