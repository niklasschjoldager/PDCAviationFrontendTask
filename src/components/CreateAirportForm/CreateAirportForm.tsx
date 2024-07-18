import { useMutation, useQueryClient } from '@tanstack/react-query';
import Button from '../Button';
import TextInput from '../TextInput';
import { postAirport } from '../../api';
import type { PostAirport } from '../../api';
import styles from './CreateAirportForm.module.scss';
import { useState } from 'react';

function CreateAirportForm() {
  const INITIAL_FORM_VALUES = { name: '', iata: '' };
  const [formData, setFormData] = useState(INITIAL_FORM_VALUES);
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (newAirport: PostAirport) => {
      return postAirport(newAirport);
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['airports'] });
      setFormData(INITIAL_FORM_VALUES);
    },
  });

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const nextFormData = {
      ...formData,
      ...{ [event.target.name]: event.target.value },
    };
    setFormData(nextFormData);
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    mutation.mutate({ name: formData.name, iata: formData.iata });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className={styles.form__title}>New airport</h2>
      <div className={styles.form__content}>
        <TextInput
          onChange={handleChange}
          id="name"
          label="Name"
          value={formData.name}
          minLength={5}
        />
        <TextInput
          onChange={handleChange}
          id="iata"
          label="IATA Code"
          value={formData.iata}
          minLength={3}
          maxLength={3}
        />
        <Button>Save</Button>
      </div>
    </form>
  );
}

export default CreateAirportForm;
