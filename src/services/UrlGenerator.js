import { Platform } from 'react-native';
import config from '../../variable.json';

const UrlGenerator =  {

    async main(){
        let url = "";
        if(Platform.OS !== 'web' ){
            url = config.protocol1 + "://" + config.host1
        }
        console.log(url + config.api_version_path + config.main_path)
        return url + config.api_version_path + config.main_path;
    },
    async posts(props){
        let url = "";
        if(Platform.OS !== 'web' ){
            url = config.protocol1 + "://" + config.host1
        }
        console.log(url + config.api_version_path + "/" + props.username + "/" + props.slug)
        return url + config.api_version_path + "/" + props.username + "/" + props.slug;
    },
    async login(){
        let url = "";
        if(Platform.OS !== 'web' ){
            url = config.protocol + "://" + config.host
        }
        console.log(url + config.login_path)
        return url + config.login_path;
    },
    async username(){
        let url = "";
        if(Platform.OS !== 'web' ){
            url = config.protocol + "://" + config.host
        }
        console.log(url + config.username_path)
        return url + config.username_path;
    },
    async email(){
        let url = "";
        if(Platform.OS !== 'web' ){
            url = config.protocol + "://" + config.host
        }
        console.log(url + config.email_path)
        return url + config.email_path;
    },
    async signup(){
        let url = "";
        if(Platform.OS !== 'web' ){
            url = config.protocol + "://" + config.host
        }
        console.log(url + config.signup_path)
        return url + config.signup_path;
    },
    async code(){
        let url = "";
        if(Platform.OS !== 'web' ){
            url = config.protocol + "://" + config.host
        }
        console.log(url + config.verify_path)
        return url + config.verify_path;
    },
}

export default UrlGenerator;