import { toast as toastify, ToastOptions } from 'react-toastify';

const toast = (message: string, options: ToastOptions = {}): void => {
  toastify(message, {
    position: 'bottom-right',
    autoClose: 5000,
    type: 'default',
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    ...options
  });
};

export default toast;
