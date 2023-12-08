import { toast } from 'react-toastify';

const useToast = () => {
    const showToast = (code: number, message: string) => {
        if (code === 0) {
            toast.success(message, {
                position: "bottom-left",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                theme: "light",
                });
        } else if (code === 1) {
            toast.error(message, {
                position: "bottom-left",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                theme: "light",
                });
        }
    };
  
    return showToast;
}

export default useToast;
