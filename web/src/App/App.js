import React, { Component } from 'react';
//import logo from './logo.svg'; // src={logo}
import CheckList from '../Checklist/Checklist';
import AppContent from '../AppContent/AppContent';

import { borderBox } from '../style-lib';
import { rowFlexBox } from '../style-lib';

import styled from 'styled-components';

const Principal = styled.section`
    ${ borderBox() }
`;

const MainContent = styled.section`
    ${ rowFlexBox() }
`;

class App extends Component {
  render() {
    return (
        <Principal>
            <MainContent>
                <CheckList />
                <AppContent />
            </MainContent>
        </Principal>
    );
  }
}

export default App;
