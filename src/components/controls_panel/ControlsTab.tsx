import React, {useState} from 'react';
import Modal from 'react-modal';
import { v4 as uuidv4 } from 'uuid';
import {CONTROL_OUTPUTS, CONTROL_INPUTS} from './CONTROLS_MANIFEST';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ControlComponent from './controlComponent'
import clone from 'just-clone';
import localforage from 'localforage';

import './Controls.css';
import '../../App.css';

localforage.config({name: 'react-flow', storeName: 'flows'});

const ControlsTab = ({ results, theme }) => {
    const [modalIsOpen, setIsModalOpen] = useState(false);
    const [ctrlsManifest, setCtrlsManifest] = useState([{
      type: 'input',
      name: 'Slider',
      id: 'INPUT_PLACEHOLDER'
    }, {
      type: 'output',
      name: 'Plot',
      id: 'OUTPUT_PLACEHOLDER'
    }]);

    const modalStyles = {overlay: {zIndex: 99},content: {zIndex: 100}};
    const openModal = () => { setIsModalOpen(true); }
    const afterOpenModal = () => {}
    const closeModal = () => { setIsModalOpen(false); }
    
    async function cacheManifest(manifest) {
      try {    
        await setCtrlsManifest(manifest);
      } catch (e) {
        console.warn(e);
      } finally {
        localforage.setItem('ctrlsManifest', manifest)
      }
    }

    const addCtrl = ctrlObj => {
      const ctrl = {...ctrlObj, id: `ctrl-${uuidv4()}`}
      console.log('adding ctrl...', ctrl);
      console.log(ctrl.type, ctrl.type=='input');
      setIsModalOpen(false);
      cacheManifest([...ctrlsManifest, ctrl]);
    }

    const rmCtrl = e => {
      const ctrlId = e.target.id;
      console.warn('Removing', ctrlId);
      const filteredOutputs = ctrlsManifest.filter(ctrl => ctrl.id !== ctrlId);
      cacheManifest(filteredOutputs);
    }

    const updateCtrlValue = (val, ctrl) => {
      // console.log(val, ctrl);
      let manClone = clone(ctrlsManifest);
      manClone.map((c, i) => {
        if (c.id  === ctrl.id) {
          manClone[i].val = val;
        }
      });
      cacheManifest(manClone);
    }

    const attachParam2Ctrl = (param, ctrl) => {
      console.log(param, ctrl);
      let manClone = clone(ctrlsManifest);
      manClone.map((c, i) => {
        if (c.id  === ctrl.id) {
          manClone[i].param = param;
        }
      });
      cacheManifest(manClone);
    }

    return (
      <div>
          <div className="save__controls">
              <a onClick={openModal}>🎚️ Add Control</a>
          </div>

          <div className='App-controls-header'>
            <div className="input-header">Inputs</div>
            <div className="output-header">Outputs</div>
          </div>

          <div className='App-controls-panel'>
            <div className='ctrl-inputs-sidebar'>
              {ctrlsManifest.filter(c => c.type == 'input').map((ctrl, i) =>
                <div key={ctrl.id} className='ctrl-input'>
                  <button onClick = {e => rmCtrl(e)} id = {ctrl.id} className='ctrl-close-btn'>x</button>
                  <ControlComponent 
                    ctrlObj={ctrl} 
                    theme={theme} 
                    results={results}
                    updateCtrlValue={updateCtrlValue}
                    attachParam2Ctrl={attachParam2Ctrl}
                  />
                </div>
              )}
              <div className='ctrl-input' style={{overflow:'scroll', height:300}}>
                <pre>{JSON.stringify(ctrlsManifest, undefined, 2)}</pre>
              </div>
            </div>
            <div className='ctrl-outputs-container'>
              <div className='ctrl-outputs-canvas'>
              {ctrlsManifest.filter(c => c.type == 'output').map((ctrl, i) =>
                <div key={ctrl.id} className='ctrl-output'>
                  <button onClick = {e => rmCtrl(e)} id = {ctrl.id} className='ctrl-close-btn'>x</button>
                  <ControlComponent 
                    ctrlObj={ctrl}
                    results={results}
                    theme={theme} 
                    updateCtrlValue={updateCtrlValue}
                    attachParam2Ctrl={attachParam2Ctrl}
                  />                
                </div>
              )}
              </div>
            </div>
          </div>

              
          <Modal
              isOpen={modalIsOpen}
              onAfterOpen={afterOpenModal}
              onRequestClose={closeModal}
              style={modalStyles}
              ariaHideApp={false}
              contentLabel="Choose a Python function"
          >
          <button onClick={closeModal} className='ctrl-close-btn'>x</button>
          <Tabs>
          <TabList>
            <Tab>Inputs</Tab>
            <Tab>Outputs</Tab>
          </TabList>

          <TabPanel key={0}>
            <div className='ctrl-picker-container'>
              {CONTROL_INPUTS.map((ctrl, ctrlIndex) =>
                <span key={ctrlIndex}>
                  <button onClick={() => addCtrl({
                    type: ctrl.type,
                    name: ctrl.name    
                  })}>
                    {ctrl.name}
                  </button>
                </span>
              )}
            </div>
          </TabPanel>      

          <TabPanel key={1}>
            <div className='ctrl-picker-container'>
              {CONTROL_OUTPUTS.map((ctrl, ctrlIndex) =>
                <span key={ctrlIndex}>
                  <button onClick={() => addCtrl({
                    type: ctrl.type,
                    name: ctrl.name             
                  })}>
                    {ctrl.name}
                  </button>
                </span>
              )}
            </div>
          </TabPanel>              

        </Tabs>        

        </Modal>
      </div>
    );
};

export default ControlsTab;
