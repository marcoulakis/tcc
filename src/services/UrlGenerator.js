import { Platform } from 'react-native';
import config from '../../variable.json';

const UrlGenerator =  {

    async main(){
        let url = "";
        if(Platform.OS !== 'web' ){
            url = config.protocol + "://" + config.host
        }
        console.log(url + config.api_version_path + config.main_path)
        return url + config.api_version_path + config.main_path;
    },
    async posts(props){
        let url = "";
        if(Platform.OS !== 'web' ){
            url = config.protocol + "://" + config.host
        }
        console.log(url + config.api_version_path + "/" + props.username + "/" + props.slug)
        return url + config.api_version_path + "/" + props.username + "/" + props.slug;
    }
}

export default UrlGenerator;