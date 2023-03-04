import { useState } from 'react';
import { BreedSelect } from './BreedSelect';
import { Layout } from './Layout';
import { Dog } from './Dog';
import { fetchDogByBreed } from 'api';
import { DogSkeleton } from './DogSkeleton';
import { ErrorMessage } from './ErrorMessage';

export const App = () => {
  const [dog, setDog] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchDog = async breedId => {
    try {
      setError(false);
      setIsLoading(true);
      const fetchedDog = await fetchDogByBreed(breedId);
      setDog(fetchedDog);
    } catch {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      <BreedSelect onSelect={fetchDog} />
      {dog && !isLoading && <Dog dog={dog} />}
      {isLoading && <DogSkeleton />}
      {error && (
        <ErrorMessage>
          У нас не получилось взять данные о собачке, попробуйте еще разочек 😇
        </ErrorMessage>
      )}
    </Layout>
  );
};
