import React, { Component } from 'react';
//import logo from './logo.svg'; // src={logo}
import { borderBox } from '../style-lib';
import { widthFlex } from '../style-lib';
import styled from 'styled-components';

const Main = styled.section`
    ${ borderBox() }
    ${ widthFlex('65%') }

    padding: 30px;
    border-left: 1px solid #ccc;
`;

function teste(){
    console.log('hahaha')
}

class AppContent extends Component {
  render() {
    return (
        <Main>
            Conteudo da APP Brow!!!
        </Main>
    );
  }
}

export default AppContent;
