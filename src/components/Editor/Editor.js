/* eslint-disable no-alert */
import React, { useState } from 'react';
import Toolbar from 'src/components/Editor/Toolbar';
import PropTypes from 'prop-types';

// StyleSheet
import 'src/styles/editor.scss';

const MyEditor = ({ setReportContent }) => {
  const [bold, setBold] = useState(false);
  const [italic, setItalic] = useState(false);
  const [underline, setUnderline] = useState(false);
  const [strike, setStrike] = useState(false);
  const [justifyLeft, setjustifyLeft] = useState(false);
  const [justifyRight, setjustifyRight] = useState(false);
  const [block, setBlock] = useState(false);
  const [orderedList, setOrderedList] = useState(false);
  const [unorderedList, setUnorderedList] = useState(false);
  const [outdent, setOutdent] = useState(false);
  const [indent, setIndent] = useState(false);
  const [insertHorizontalRule, setInsertHorizontalRule] = useState(false);
  const [undo, setUndo] = useState(false);
  const [link, setLink] = useState(false);
  const [unlink, setUnlink] = useState(false);
  const [centered, setCentered] = useState(false);
  const [remove, setRemove] = useState(false);
  const [selected, setSelected] = useState('');

  document.onmouseup = () => {
    const selObj = window.getSelection().toString();
    if (selObj.length !== 0) {
      setSelected(selObj);
    }
  };

  return (
    <div className="editor">
      <Toolbar
        setBold={setBold}
        setItalic={setItalic}
        setUnderline={setUnderline}
        setStrike={setStrike}
        setjustifyLeft={setjustifyLeft}
        setjustifyRight={setjustifyRight}
        setOrderedList={setOrderedList}
        setUnorderedList={setUnorderedList}
        setOutdent={setOutdent}
        setIndent={setIndent}
        setInsertHorizontalRule={setInsertHorizontalRule}
        setUndo={setUndo}
        setLink={setLink}
        setUnlink={setUnlink}
        setBlock={setBlock}
        setCentered={setCentered}
        setRemove={setRemove}
        bold={bold}
        italic={italic}
        underline={underline}
        strike={strike}
        justifyLeft={justifyLeft}
        justifyRight={justifyRight}
        block={block}
        orderedList={orderedList}
        unorderedList={unorderedList}
        outdent={outdent}
        indent={indent}
        insertHorizontalRule={insertHorizontalRule}
        undo={undo}
        link={link}
        unlink={unlink}
        centered={centered}
        remove={remove}
      />
      <div className="content-area">
        <div
          className="visuell-view"
          contentEditable
          onInput={(e) => setReportContent(e.currentTarget.innerText)}
        />
        <textarea className="html-view" />
      </div>
      {selected}
    </div>
  );
};

MyEditor.propTypes = {
  setReportContent: PropTypes.func.isRequired,
};

MyEditor.defaultProps = {};

export default MyEditor;
