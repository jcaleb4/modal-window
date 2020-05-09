import React, { Fragment, useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import './Modal.scss';

const Modal = ({ children, closeHandler, isOpen, direction }) => {
    const [isfirstRun, setFirsRun] = useState(true);

    // will run only if modal opens
    // prevents animation to run before modal opens
    useEffect(() => {
        if (isOpen) {
            setFirsRun(false);
        }
    }, [isOpen]);

    const closeBtn = <button className="icon-cross2 closeBtn" onClick={() => closeHandler(direction)}></button>;

    // Cloning children in order to pass down closeModal function instead of sending it from the parent container
    const childrenContent = React.cloneElement(children, { closeModal: () => closeHandler(direction) });

    const shadowOverlay = (
        <CSSTransition in={isOpen} timeout={300} classNames="shadow" unmountOnExit >
            <div className="shadow" onClick={() => closeHandler(direction)}></div>
        </CSSTransition>
    );

    const modalTemplate = (modalElement) => {
        return (
            <Fragment>
                {modalElement}
                {shadowOverlay}
            </Fragment>
        );
    };

    const centerModal = (
        <CSSTransition in={isOpen} timeout={300} classNames="modal" unmountOnExit >
            <div className="modal">
                {closeBtn}
                {childrenContent}
            </div>   
        </CSSTransition>
    );

    const topModal = (
        <div className={`modal ${isfirstRun ? 'hide' : 'top'} ${isOpen ? 'display' : 'rewind'}`}>
            {closeBtn}
            {childrenContent}
        </div>
    );

    return direction ? modalTemplate(centerModal) : modalTemplate(topModal);
}

export default React.memo(Modal);