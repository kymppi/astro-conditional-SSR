import { useStore } from '@nanostores/preact';
import { JSX } from 'preact/jsx-runtime';
import { user } from '../state/example';

export const Preact = (props: { children: JSX.Element }) => {
  const userInfo = useStore(user);

  if (userInfo.loggedIn)
    return (
      <div>
        <h2>Preact {userInfo.name}</h2>
      </div>
    );
  else return props.children;
};
