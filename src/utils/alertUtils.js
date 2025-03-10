import { Icons, ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { TOAST_TYPE } from "../constants/constants";

const AlertUtils = () => {

    

    const toastConfig = {
        position: 'top-center',
        autoClose: 3000,
        theme: "dark", 
      };

    const showToast = (type, msg) => {
        switch (type) {
            case TOAST_TYPE.SUCCESS:
                toast.success(msg,toastConfig);
                break;
            case TOAST_TYPE.ERROR:
                toast.error(msg,toastConfig);
                break;
            case TOAST_TYPE.WARNING:
                toast.warning(msg,toastConfig);
                break;
            case TOAST_TYPE.INFO:
                toast.info(msg,toastConfig);
                break;
            default:
                break;

        }
    }

    return {showToast, ToastContainer};

}

export default AlertUtils;