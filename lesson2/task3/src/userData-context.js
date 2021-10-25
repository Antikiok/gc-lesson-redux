import React from 'react';

export const userData = {
  anotherUser: { name: 'not a Nikola Tesla', avatar_url: 'another Url' },
  teslaUser: { name: 'Nikola Tesla', avatar_url: 'https://avatars3.githubusercontent.com/u10001' },
};

export const userDataContext = React.createContext(userData.teslaUser);
