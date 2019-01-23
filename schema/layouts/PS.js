import React from 'react';
import {Item} from 'canner-helpers';

export default function PS({ps}) {
  return (
    <div>
      <Item />
      <p style={{marginTop: -24, fontSize: 12}}>{ps}</p>
    </div>
  )
}