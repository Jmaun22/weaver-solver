// import {ladderSolver} from '../utils/weaversolver';

import 'bulma/css/bulma.min.css';
import { Button, Form, Icon } from 'react-bulma-components';
import React, { useState } from 'react';
import { ladderSolver, fourLetterWords } from '../utils/weaversolver';
import API from '../utils/API';




const Solver= () => {
    const [startword, setStartWord] = useState('Start word');
    const [endword, setEndWord] = useState('End word');
    const [wordList, setWordList] = useState([
   
   'word ', 'list'
    ]);

    // APi call
    const [result, setResult] = useState('');
    const searchapi = (query) =>
    API.search(query)
      .then((res) => setResult(res.data[0].mousehover))
      .catch((err) => console.log(err));

      // api click handler

      const data = {
        mousehover: `${sessionStorage.getItem('test')}`
      }


      const handleAPICall = (e) => {
        console.log('clicked api')
        e.preventDefault();
        // searchapi();
        postapi(data)

        console.log('I think it worked')
      };

      // post api 

      const postapi = (data) => 
      API.postit(data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  
        const solvingLadder = async (event) => {
            event.preventDefault();

            console.log('is it even working')
            alert(`sumbitted ${startword} and ${endword}`);
     

        console.log(ladderSolver(startword, endword, fourLetterWords));

        const answer = ladderSolver(startword, endword, fourLetterWords)
        console.log('answer' + typeof(answer[0]))

        const answerListString = JSON.stringify(answer[0]);
        const answerList = answerListString.replace('[', '').replaceAll('"'- '').replace(']', '').split(',')
       console.log("yyo" + answerList);


        setWordList(answerList);
 



    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === 'startword') {
        setStartWord(value);
        } else if (name === 'endword') {
            setEndWord(value);
        }

        console.log(startword);

        console.log(endword);

    }

  
    return (
        <>
        <div>
        <h1>{result}word</h1>
        <button onClick={handleAPICall}>Search</button>
      <form>
        <Form.Field>
          <Form.Label>Start Word</Form.Label>
          <Form.Control onChange={handleChange}>
            <Form.Input
              color="success"
              value={startword}
              onChange={(e) => {
                return setStartWord(e.target.value);
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
          <Form.Control onChange={handleChange}>
            <Form.Input
              color="danger"
              value={endword}
              onChange={(e) => {
                return setEndWord(e.target.value);
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
            <Button color="link" onClick={solvingLadder}>Submit </Button>
          </Form.Control>
          <Form.Control>
            <Button color="link" colorVariant="light" >
              Cancel
            </Button>
          </Form.Control>
        </Form.Field>
      </form>

        </div>

           <div>
           <h1>Your answer will appear here</h1>
        <h2>{wordList}</h2>
  
     
      </div>
      </>
    );
    

 

 
  }


  export default Solver;