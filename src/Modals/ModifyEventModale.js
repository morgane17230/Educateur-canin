/* eslint-disable no-param-reassign */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Field from 'src/containers/ControlledComponents/Field';
import Select from 'src/containers/ControlledComponents/Select';
import Icon from '@mdi/react';
import { mdiClose } from '@mdi/js';

// StyleSheet

import 'src/styles/eventmodals.scss';

const ModifyEventModale = ({
  eventValue,
  setOpenModifyEventModale,
  events,
  onGetPrestas,
  prestaId,
  startTime,
  endTime,
  prestas,
  changeField,
}) => {
  const currentEvent = events.find((event) => event.id === eventValue);

  useEffect(() => {
    onGetPrestas();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };

  return (
    <div className="event-modal">
      <div className="event-modal-content modify">
        <button
          className="event-modal-close"
          type="button"
          onClick={() => setOpenModifyEventModale(false)}
        >
          <Icon path={mdiClose} title="close modal" size={1} />
        </button>
        <div className="event-modal-header">
          <div>
            Modifier le rendez-vous du {' '}
            <span>
              {new Date(
                Number(currentEvent.start_time),
              ).toLocaleDateString('fr-FR', {
                weekday: 'long',
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </span>
          </div>
        </div>
        <form
          method="POST"
          className="event-modal-form"
          onSubmit={handleSubmit}
        >
          <Field
            id="startTime"
            name="startTime"
            type="datetime-local"
            placeholder="Date de début"
            onChange={changeField}
            value={startTime}
          />
          <Field
            id="endTime"
            name="endTime"
            type="datetime-local"
            placeholder="Date de fin"
            onChange={changeField}
            value={endTime}
          />
          <Select
            id="prestaId"
            name="prestaId"
            placeholder="Prestations"
            value={prestaId}
            type="select"
            onChange={changeField}
            datas={prestas}
          />

          <button
            type="submit"
            className="event-modal-form-button"
            value={currentEvent.id}
          >
            Valider
          </button>
        </form>
      </div>
    </div>
  );
};

ModifyEventModale.propTypes = {
  setOpenModifyEventModale: PropTypes.func.isRequired,
  onGetPrestas: PropTypes.func.isRequired,
  eventValue: PropTypes.number,
  events: PropTypes.array,
  prestaId: PropTypes.string,
  startTime: PropTypes.string,
  endTime: PropTypes.string,
  prestas: PropTypes.array,
  changeField: PropTypes.func.isRequired,
};

ModifyEventModale.defaultProps = {
  prestaId: '',
  startTime: '',
  endTime: '',
  events: [],
  eventValue: 0,
  prestas: [],
};

export default ModifyEventModale;
