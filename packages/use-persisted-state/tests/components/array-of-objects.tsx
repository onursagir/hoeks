import * as React from 'react';
import peopleData from './people.json';
import usePersistedState from '../../src';

const ArrayOfObjects: React.FunctionComponent = () => {
  const [people, setPeople, clear, isHydrated] = usePersistedState<typeof peopleData>([], '@userPersistedState/arrayOfObjects');

  const onAddClick = React.useCallback(() => {
    setPeople((state) => [...state, peopleData[state.length]]);
  }, [setPeople]);

  if (!isHydrated) return <p>Loading...</p>;

  return (
    <>
      <div id="people">
        {people.map((person, i) => {
          return (
            <div key={i}>
              <h1>{person.name}</h1>
              <p>
                {person.github}, {person.dob.day}-{person.dob.month}-{person.dob.year}
              </p>
              <ul>
                {Object.entries(person.repos).map(([repoName, repoData]) => {
                  return (
                    <React.Fragment key={repoName}>
                      <li>
                        {repoName} ({repoData?.downloads})
                      </li>
                      <li>{repoData?.stargazers.join(', ')}</li>
                    </React.Fragment>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
      <button id="add-btn" onClick={onAddClick}>
        Add person
      </button>
      <button id="clear-btn" onClick={clear}>
        Clear people
      </button>
    </>
  );
};

export default ArrayOfObjects;
