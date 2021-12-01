import React from 'react';
import MyEditor from 'src/containers/Editor/Editor';
import Field from 'src/containers/ControlledComponents/Field';
import PropTypes from 'prop-types';

// StyleSheet
import 'src/styles/editormodal.scss';

const EditorModal = ({ changeField, reportTitle }) => {
  console.log((e) => e.target);

  return (
    <div className="editor-modal">
      <form className="editor-modal-content">
        <Field
          name="reportTitle"
          type="text"
          placeholder="Titre du compte rendu"
          value={reportTitle}
          onChange={changeField}
        />
        <MyEditor
          className="html-view"
          id="reportContent"
          name="reportContent"
          type="text"
          placeholder=""
        />
        <div className="editor-modal-action">
          <button type="button">Annuler</button>
          <button type="button">Valider</button>
        </div>
      </form>
    </div>
  );
};

EditorModal.propTypes = {
  changeField: PropTypes.func.isRequired,
  reportTitle: PropTypes.string,
};

EditorModal.defaultProps = {
  reportTitle: '',
};

export default EditorModal;
