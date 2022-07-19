import axios  from 'axios';
import UrlGenerator from './UrlGenerator';
// const publicIp = require('public-ip');

const ApiRequest =  {
    async mainPage(setResponse){ 
            const uri = await UrlGenerator.main();
            axios.get(uri)
            .then((response) => {
                // console.log(response.data);  
                setResponse(response.data)
            }).catch(error =>{
                if(error.status_code === 400){
                    console.log(error.status_code);  
                    setResponse(error.status_code) 
                }else{
                    console.log({error:true, msg: "Something went wrong. Please try again later."});
                    setResponse({error:true, msg: "Something went wrong. Please try again later."});
                }
            });
    },
    async posts(props ,setResponse){ 
        const username = props.username;
        const slug = props.slug;
        const uri = await UrlGenerator.posts({username, slug});

        axios.get(uri)
        .then((response) => {
            console.log(response.data);  
            setResponse(response.data)
        }).catch(error =>{
            if(error.status_code === 400){
                console.log(error.status_code);  
                setResponse(error.status_code) 
            }else{
                console.log({error:true, msg: "Something went wrong. Please try again later."});
                setResponse({error:true, msg: "Something went wrong. Please try again later."});
            }
        });
}
}

export default ApiRequest;