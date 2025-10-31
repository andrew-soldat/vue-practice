import { useField, useForm } from 'vee-validate';
import * as yup from 'yup';
import {computed, watch} from "vue";

export function useAuth () {
  const {handleSubmit, isSubmitting, submitCount} = useForm();

  const {value: email, errorMessage: emailError, handleBlur: emailBlur} = useField(
    'email',
    yup
      .string()
      .trim()
      .required('This field cannot be empty.')
      .email('Enter a valid email address.')
  );

  const MIN_LENGTH = 6;

  const {value: password, errorMessage: passwordError, handleBlur: passwordBlur} = useField(
    'password',
    yup
      .string()
      .trim()
      .required('This field cannot be empty.')
      .min(MIN_LENGTH, `Password must be at least ${MIN_LENGTH} characters long.`)
  );

  const onSubmit = handleSubmit(values => {
    console.log(values)
  })

  const isTooManyAttempts = computed(() => submitCount.value >= 3);

  watch(isTooManyAttempts, val => {
    if (val) {
      setTimeout(() => submitCount.value = 0, 6000)
    }
  })

  return {
    email,
    emailError,
    emailBlur,
    password,
    passwordError,
    passwordBlur,
    onSubmit,
    isSubmitting,
    isTooManyAttempts,
  }
}
