import { Editor } from '@monaco-editor/react';
import { useRef } from 'react';
import { Range } from 'monaco-editor';
import './App.css';

function App() {
  const editorRef = useRef<any>(null);
  const monacoRef = useRef<any>(null);
  const decoratorsRef = useRef<any>(null);

  return (
    <Editor
      height='100vh'
      defaultLanguage='handlebars'
      defaultValue='{{ i18n test.test }} '
      theme='vs-dark'
      onMount={(e, m) => {
        const decorators = e.createDecorationsCollection([
          {
            range: new Range(0, 1, 1, 21),
            options: {
              className: 'myMarker',
              glyphMarginClassName: 'myGlyphMarginClass',
              glyphMarginHoverMessage: [
                {
                  value:
                    'The variable has no keys for any language. Specify keys for the variable in the translations page',
                },
              ],
            },
          },
        ]);

        decoratorsRef.current = decorators;
        editorRef.current = e;
        monacoRef.current = m;
      }}
      options={{
        glyphMargin: true,
      }}
    />
  );
}

export default App;
