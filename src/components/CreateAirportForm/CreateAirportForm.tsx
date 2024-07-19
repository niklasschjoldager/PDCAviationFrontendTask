import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm, SubmitHandler } from 'react-hook-form';
import { postAirport } from '../../api';
import type { PostAirport } from '../../api';
import Button from '../Button';
import styles from './CreateAirportForm.module.scss';
import { useEffect } from 'react';

interface CreateAirportFormData {
  name: string;
  iata: string;
}

function CreateAirportForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm<CreateAirportFormData>({
    defaultValues: {
      name: '',
      iata: '',
    },
    mode: 'onBlur',
  });
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: ({ name, iata }: PostAirport) => {
      const newAirport = {
        name: name,
        iata: iata.toUpperCase(),
      };

      return postAirport(newAirport);
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['airports'] });
      reset({ name: '', iata: '' });
    },
  });

  const onSubmit: SubmitHandler<CreateAirportFormData> = (data) => {
    mutation.mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <h2 className={styles.form__title}>New airport</h2>
      <div className={styles.form__content}>
        <div className={styles['form-field']}>
          <label htmlFor="name" className={styles['form-field__label']}>
            Name
          </label>
          <input
            {...register('name', {
              required: 'Name is required',
              minLength: {
                value: 5,
                message: 'Name must be at least 5 characters',
              },
            })}
            aria-invalid={errors.name ? 'true' : 'false'}
            type="text"
            className={styles['form-field__input']}
          />
          {errors.name && (
            <p className={styles['form-field__error-message']} role="alert">
              {errors.name.message}
            </p>
          )}
        </div>
        <div className={styles['form-field']}>
          <label htmlFor="iata" className={styles['form-field__label']}>
            IATA Code
          </label>
          <input
            {...register('iata', {
              required: 'IATA Code is required',
              min: 3,
              max: 3,
              minLength: {
                value: 3,
                message: 'IATA Code is 3 letters',
              },
              maxLength: {
                value: 3,
                message: 'IATA Code is 3 letters',
              },
            })}
            aria-invalid={errors.iata ? 'true' : 'false'}
            type="text"
            className={`${styles['form-field__input']} ${styles['form-field__input--uppercase']}`}
          />
          {errors.iata && (
            <p className={styles['form-field__error-message']} role="alert">
              {errors.iata.message}
            </p>
          )}
        </div>
      </div>
      {isSubmitSuccessful && <p>Airport successfully created!</p>}
      <Button className={styles.form__button} disabled={isSubmitting}>
        Save
      </Button>
    </form>
  );
}

export default CreateAirportForm;
