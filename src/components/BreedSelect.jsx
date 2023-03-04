import { fetchBreeds } from 'api';
import { useEffect, useState } from 'react';
import Select from 'react-select';
import { ErrorMessage } from './ErrorMessage';

export const BreedSelect = ({ onSelect }) => {
  const [breeds, setBreeds] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getBreeds() {
      try {
        setError(false);
        setIsLoading(true);
        const fetchedBreeds = await fetchBreeds();
        setBreeds(fetchedBreeds);
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getBreeds();
  }, []);

  const options = breeds.map(breed => ({
    label: breed.name,
    value: breed.id,
  }));

  return (
    <div>
      <Select
        options={options}
        onChange={option => onSelect(option.value)}
        isLoading={isLoading}
      />
      {error && (
        <ErrorMessage>
          Что-то пошло не так, перезагрузите страницу, вдруг поможет 🥹
        </ErrorMessage>
      )}
    </div>
  );
};
