import { useToast } from '@chakra-ui/react';
import * as yup from 'yup';

export function ShowToast(title, description, status) {
  const toast = useToast();
  return toast({
    title: title,
    description: description,
    status: status,
    duration: 5000,
    isClosable: true,
    position: 'bottom-right',
    variant: 'left-accent',
  });
}

export const messageSchema = yup.object().shape({
  trigger: yup.string().required('campo de nome é obrigatório'),
  channel: yup.string().required('campo de nome é obrigatório'),
  timer: yup.string().min(5).max(5).required('campo deve ter 5 caracteres'),
  message: yup
    .string()
    .min(10)
    .required('campo deve ter ao menos 10 caracteres'),
});

export function timerMask(text) {
  let onlyNumber = text.replace(/\D/g, '');
  let numberWithMask = [...onlyNumber]
    .map((letter, i, arr) => {
      if (i === 2) return [':', letter];
      return letter;
    })
    .flat(1)
    .join('');
  return numberWithMask;
}
