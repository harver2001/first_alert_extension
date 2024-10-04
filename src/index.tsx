import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ChatHelper from './components/ChatHelper';

const root = document.getElementById('react-root');

if (root) {
  ReactDOM.render(<ChatHelper />, root);
}
