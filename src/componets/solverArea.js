// import {ladderSolver} from '../utils/weaversolver';

import 'bulma/css/bulma.min.css';
import { Button, Form, Icon } from 'react-bulma-components';
import React, { useState } from 'react';




const Solver= () => {
    const [startword, setUsername] = useState('Start word');
    const [endword, setEmail] = useState('End word');

  
    return (
      <form>
        <Form.Field>
          <Form.Label>Start Word</Form.Label>
          <Form.Control>
            <Form.Input
              color="success"
              value={startword}
              onChange={(e) => {
                return setUsername(e.target.value);
              }}
            />
            <Icon align="left" size="small">
              <i className="fas fa-user" />
            </Icon>
            <Icon align="right" size="small">
              <i className="fas fa-check" />
            </Icon>
          </Form.Control>
          <Form.Help color="success">This startword is available</Form.Help>
        </Form.Field>
  
        <Form.Field>
          <Form.Label>End Word</Form.Label>
          <Form.Control>
            <Form.Input
              color="danger"
              value={endword}
              onChange={(e) => {
                return setEmail(e.target.value);
              }}
            />
            <Icon align="left" size="small">
              <i className="fas fa-envelope" />
            </Icon>
            <Icon align="right" size="small">
              <i className="fas fa-exclamation-triangle" />
            </Icon>
          </Form.Control>
          <Form.Help color="danger">This endword is invalid</Form.Help>
        </Form.Field>
  
    
  
     
        <Form.Field kind="group">
          <Form.Control>
            <Button color="link">Submit</Button>
          </Form.Control>
          <Form.Control>
            <Button color="link" colorVariant="light">
              Cancel
            </Button>
          </Form.Control>
        </Form.Field>
      </form>
    );
  }


  export default Solver;