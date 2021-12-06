import React from 'react';
import DraftEditor from 'src/containers/Editor/DraftEditor';
import Field from 'src/containers/ControlledComponents/Field';
import PropTypes from 'prop-types';

// StyleSheet
import 'src/styles/editormodal.scss';

const EditorModal = ({ changeField, reportTitle }) => (
  <div className="editor-modal">
    <form className="editor-modal-content">
      <Field
        name="reportTitle"
        type="text"
        placeholder="Titre du compte rendu"
        value={reportTitle}
        onChange={changeField}
      />
      <DraftEditor />
      <div className="editor-modal-action">
        <button type="button">Annuler</button>
        <button type="button">Valider</button>
      </div>
    </form>
  </div>
);

EditorModal.propTypes = {
  changeField: PropTypes.func.isRequired,
  reportTitle: PropTypes.string,
};

EditorModal.defaultProps = {
  reportTitle: '',
};

export default EditorModal;
