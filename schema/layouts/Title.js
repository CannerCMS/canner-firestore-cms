import React from 'react';
import {Item} from 'canner-helpers';

export default function Title({title}) {
  return (
    <div>
      <h1>{title}</h1>
      <Item />
    </div>
  )
}