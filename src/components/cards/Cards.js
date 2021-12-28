import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import styled from 'styled-components'

/* const Div1 = styled.div`
    padding: 4rem;
    display: flex;
  background-color: #101522;
 
`;
const Div2 = styled.div`

    display: flex;
    flex-flow: column;
    align-items: center;
    max-width: 1120px;
    width: 100%;
    margin: 0 auto;

  background-color: #101522;
 
`; */
const Div3 = styled.div`
    position: relative;
    width: 100%;
    border-radius: 25px;

  background-color:  #101522;
 
`;




function Cards() {
  return (
<div
      style={{

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '25px',
        height: '100%',
        width: '100%',
        backgroundColor: "#101522"
      }}
    >
    
     
        <Div3 className='cards__wrapper'>

          <ul className='cards__items'>
            <CardItem


              src='https://sketchfab.com/models/d7b857dfd9c14611b1e7423c671b4f73/embed'
              text='Sample Office'
            
              label='A'
              path='/services'
            />
            <CardItem
              src='https://sketchfab.com/models/f2992a1ec6454ab5bb5b4a0c09973e24/embed'
              text='Sample Office'
              label='B'
              path='/products'
            />
            <CardItem
              src='https://sketchfab.com/models/24de5497539a4eccb5bb17285d2155bd/embed'
              text='Sample Office'
              label='C'
              path='/sign-up'
            />
          </ul>
          
          
        </Div3>
     
    </div>
    
  );
}

export default Cards;