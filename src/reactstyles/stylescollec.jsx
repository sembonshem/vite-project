import React from 'react';
import {ToggleMessageCSS} from './ToggleMessage.jsx';
//you can import multiple components from one file
import {ToggleMessageComps, InlineStyle} from './styledcomps.jsx';

export function StylesCollection() {
  return (
    <div>
      <h1>Styles Collection</h1>
      <InlineStyle />
      <ToggleMessageCSS />
      <ToggleMessageComps />
    </div>
  );
}