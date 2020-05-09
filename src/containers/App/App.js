import React, { Fragment, useState } from 'react';

import Modal from '../../components/Modal/Modal';
import Progress from '../../components/Progress/Progress';
import progressData from '../../assets/mockData/progressData';

import './App.scss';

function App() {
  const [topModelState, setTopModelState] = useState(false);
  const [centerModelState, setCenterModelState] = useState(false);

  const toggleModalState = (direction) => {
    if (direction) {
      setCenterModelState(!centerModelState);
      
    } else {
      setTopModelState(!topModelState);
    }
  }

  return (
    <Fragment>
      <Modal isOpen={centerModelState} closeHandler={toggleModalState} direction="center">
        <Progress progressData={progressData} />
      </Modal>
      <Modal isOpen={topModelState} closeHandler={toggleModalState}>
        <Progress progressData={progressData} />
      </Modal>

      <div className="app__container">
        <button
          className="app__process__btn btn ripple"
          onClick={() => toggleModalState()}
        >
          From Top
        </button>
        <button
          className="app__process__btn btn enfasis ripple"
          onClick={() => toggleModalState('center')}
        >
          From Center
        </button>
      </div>
    </Fragment>
  );
}

export default App;
