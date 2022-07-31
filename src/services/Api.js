import axios  from 'axios';
import UrlGenerator from './UrlGenerator';
// import { publicIp } from 'public-ip';

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
    },
    async login(userData, setResponse){ 
        const {email, password} = userData;

            // const IPv4 = await publicIp();
            const uri = await UrlGenerator.login();
            axios.post(uri, 
            {
                email: email, 
                password: password,
            }).then((response) => {
                console.log(response.data);  
                setResponse(response.data)
            }).catch(error =>{
                if(error.response.status === 400){
                    console.log(error.response.data);  
                    setResponse(error.response.data) 
                }else{
                    console.log({error:true, msg: "Something went wrong. Please try again later."})
                    setResponse({error:true, msg: "Something went wrong. Please try again later."});
                }
            });
    },
    async username(username, setResponse){ 

            // const IPv4 = await publicIp.v4();
            const uri = await UrlGenerator.username();
            axios.post(uri, 
            {
                username: username
            }).then((response) => {
                console.log(response.data);  
                setResponse(response.data)
            }).catch(error =>{
                if(error.response.status === 400){
                    console.log(error.response.data);  
                    setResponse(error.response.data) 
                }else{
                    console.log({error:true, msg: "Something went wrong. Please try again later."})
                    setResponse({error:true, msg: "Something went wrong. Please try again later."});
                }
            });
    },
    async email(email, setResponse){ 

        // const IPv4 = await publicIp.v4();
        const uri = await UrlGenerator.email();
        axios.post(uri, 
        {
            email: email
        }).then((response) => {
            console.log(response.data);  
            setResponse(response.data)
        }).catch(error =>{
            if(error.response.status === 400){
                console.log(error.response.data);  
                setResponse(error.response.data) 
            }else{
                console.log({error:true, msg: "Something went wrong. Please try again later."})
                setResponse({error:true, msg: "Something went wrong. Please try again later."});
            }
        });
    },
    async signup(data, setResponse){ 
        
        const { name, username, email, password } = data;
        
        console.log("inside " + JSON.stringify(data))
        // const IPv4 = await publicIp();
        const uri = await UrlGenerator.signup();
        axios.post(uri, 
        {
            name : name,
            username : username,
            email : email,
            password : password,
            ip_address : "0.0.0.0"
        }).then((response) => {
            console.log(response.data);  
            setResponse(response.data)
        }).catch(error =>{
            if(error.response.status === 400){
                console.log(error.response.data);  
                setResponse(error.response.data) 
            }else{
                console.log(JSON.stringify(error))
                console.log({error:true, msg: "Something went wrong. Please try again later."})
                setResponse({error:true, msg: "Something went wrong. Please try again later."});
            }
        });
    },
    async code(code, email, setResponse){ 
        
        const uri = await UrlGenerator.code();
        axios.post(uri, 
        {
            email: email,
            code: code,
        }).then((response) => {
            console.log(response.data.response);  
            setResponse(response.data.response)
        }).catch(error =>{
            if(error.response.status === 400){
                console.log(error.response.data.response);  
                setResponse(error.response.data.response) 
            }else{
                console.log({error:true, msg: "Something went wrong. Please try again later."})
                setResponse({error:true, msg: "Something went wrong. Please try again later."});
            }
        });
    }
}

export default ApiRequest;