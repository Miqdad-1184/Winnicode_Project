import React, { useState } from 'react';
import MDEditor from '@uiw/react-md-editor';
import '@uiw/react-md-editor/markdown-editor.css';
import '@uiw/react-markdown-preview/markdown.css';


export default function TextArea() {
  const [value, setValue] = useState();

  return (
    <div>
        <strong>Isi Berita</strong>
      <MDEditor value={value} onChange={setValue} />
    </div>
  );
}
