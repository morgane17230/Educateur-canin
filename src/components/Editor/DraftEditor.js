import React, { useState } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import PropTypes from 'prop-types';

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import 'src/styles/editor.scss';

const DraftEditor = ({ setReportContent }) => {
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());

  const handleEditorChange = (state) => {
    setEditorState(state);
    setReportContent(
      draftToHtml(convertToRaw(editorState.getCurrentContent())),
    );
  };

  return (
    <div className="editor">
      <Editor
        editorState={editorState}
        onEditorStateChange={handleEditorChange}
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
        toolbar={{
          options: [
            'inline',
            'fontSize',
            'fontFamily',
            'list',
            'textAlign',
            'colorPicker',
            'link',
            'history',
          ],
          inline: {
            inDropdown: false,
            className: undefined,
            component: undefined,
            dropdownClassName: undefined,
            options: [
              'bold',
              'italic',
              'underline',
              'strikethrough',
            ],
            bold: { className: undefined },
            italic: { className: undefined },
            underline: { className: undefined },
            strikethrough: { className: undefined },
            monospace: { className: undefined },
            superscript: { className: undefined },
            subscript: { className: undefined },
          },
          fontSize: {
            options: [8, 9, 10, 11, 12, 14, 16, 18, 24, 30, 36, 48, 60, 72, 96],
            className: undefined,
            component: undefined,
            dropdownClassName: undefined,
          },
          fontFamily: {
            options: [
              'Arial',
              'Georgia',
              'Impact',
              'Tahoma',
              'Times New Roman',
              'Verdana',
            ],
            className: undefined,
            component: undefined,
            dropdownClassName: undefined,
          },
          list: {
            inDropdown: false,
            className: undefined,
            component: undefined,
            dropdownClassName: undefined,
            options: ['unordered', 'ordered', 'indent', 'outdent'],
            unordered: { className: undefined },
            ordered: { className: undefined },
            indent: { className: undefined },
            outdent: { className: undefined },
          },
          textAlign: {
            inDropdown: false,
            className: undefined,
            component: undefined,
            dropdownClassName: undefined,
            options: ['left', 'center', 'right', 'justify'],
            left: { className: undefined },
            center: { className: undefined },
            right: { className: undefined },
            justify: { className: undefined },
          },
          colorPicker: {
            className: undefined,
            component: undefined,
            popupClassName: undefined,
            colors: [
              'rgb(97,189,109)',
              'rgb(26,188,156)',
              'rgb(84,172,210)',
              'rgb(44,130,201)',
              'rgb(147,101,184)',
              'rgb(71,85,119)',
              'rgb(204,204,204)',
              'rgb(65,168,95)',
              'rgb(0,168,133)',
              'rgb(61,142,185)',
              'rgb(41,105,176)',
              'rgb(85,57,130)',
              'rgb(40,50,78)',
              'rgb(0,0,0)',
              'rgb(247,218,100)',
              'rgb(251,160,38)',
              'rgb(235,107,86)',
              'rgb(226,80,65)',
              'rgb(163,143,132)',
              'rgb(239,239,239)',
              'rgb(255,255,255)',
              'rgb(250,197,28)',
              'rgb(243,121,52)',
              'rgb(209,72,65)',
              'rgb(184,49,47)',
              'rgb(124,112,107)',
              'rgb(209,213,216)',
            ],
          },
          link: {
            inDropdown: false,
            className: undefined,
            component: undefined,
            popupClassName: undefined,
            dropdownClassName: undefined,
            showOpenOptionOnHover: true,
            defaultTargetOption: '_self',
            options: ['link', 'unlink'],
            link: { className: undefined },
            unlink: { className: undefined },
            linkCallback: undefined,
          },
          history: {
            inDropdown: false,
            className: undefined,
            component: undefined,
            dropdownClassName: undefined,
            options: ['undo', 'redo'],
            undo: { className: undefined },
            redo: { className: undefined },
          },
        }}
      />
    </div>
  );
};

DraftEditor.propTypes = {
  setReportContent: PropTypes.func.isRequired,
};

DraftEditor.defaultProps = {};

export default DraftEditor;