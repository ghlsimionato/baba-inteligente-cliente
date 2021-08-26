import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { HIGH_TEMPERATURE_ALERT, LOW_TEMPERATURE_ALERT, CRYING_ALERT } from '../../../../utils/constants';

const getModalHeaderByAlertType = (alertType) => {
    if (alertType === HIGH_TEMPERATURE_ALERT) return 'Temperature Warning';

    switch (alertType) {
        case HIGH_TEMPERATURE_ALERT:
            return 'Baby Fever'
        case LOW_TEMPERATURE_ALERT:
            return 'Baby Temperature Low'
        case CRYING_ALERT:
            return 'Baby is Crying';
        default:
            return '';
    }
};

const getModalBodyContentByAlertType = (alertType) => {
    switch (alertType) {
        case HIGH_TEMPERATURE_ALERT:
            return 'Your baby\'s body temperature is higher than normal!'
        case LOW_TEMPERATURE_ALERT:
            return 'Your baby\'s body temperature is lower than normal!'
        case CRYING_ALERT:
            return 'Your baby is crying!';
        default:
    }
};

const AlertModal = (props) => {
    const { alertType, show, handleClose } = props;

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{getModalHeaderByAlertType(alertType)}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{getModalBodyContentByAlertType(alertType)}</Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default AlertModal;
