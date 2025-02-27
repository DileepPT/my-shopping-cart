import { useNavigate } from "react-router-dom";

const PageNavigator = ()=>{

    const navigate = useNavigate();

    const navigateTo  = (path, data)=>{
        if(data){
            navigate(path, {state:{data}});
        }else{
            navigate(path);
        }
    };

    const goBack = ()=>{
        navigate(-1); 
    };

    return {navigateTo , goBack}
};

export default PageNavigator;