import React from 'react';
import { Editor, EditorState } from 'draft-js';
// import PropTypes from 'prop-types';

// StyleSheet

import 'src/styles/editor.scss';

const EditorModal = () => {
  const [editorState, setEditorState] = React.useState(() => EditorState.createEmpty());

  const editor = React.useRef(null);
  function focusEditor() {
    editor.current.focus();
  }

  return (
    <div className="editor-modal">
      <div className="editor-modal-content" onClick={focusEditor}>
        <Editor
          ref={editor}
          editorState={editorState}
          onChange={setEditorState}
          placeholder="Write something!"
        />
      </div>
    </div>
  );
};

EditorModal.propTypes = {};

EditorModal.defaultProps = {};

export default EditorModal;
