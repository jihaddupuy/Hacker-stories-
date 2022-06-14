import logo from './logo.svg';
import './App.css';
import { getByTitle } from '@testing-library/react';

function getTitle(title){
  return title;
}

const list =[
  {
  title: 'React',
  url: 'https://reactjs.org',
  author: 'Jordan Walke',
  num_comments: 3,
  point: 4,
  objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
  ];

function App() {
  return (
    
      <div>
          <h1> Hello {getTitle('React')}</h1>
      </div>
  );
}

export default App;
