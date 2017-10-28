import React, { Component } from 'react';
//import logo from './logo.svg'; // src={logo}
import CheckList from '../Checklist/Checklist';
import SearchUser from '../SearchUser/SearchUser';

import { borderBox } from '../style-lib';
import { rowFlexBox } from '../style-lib';

import styled from 'styled-components';

const Principal = styled.section`
    ${ borderBox() }
    font-family: 'Source Sans Pro', sans-serif;
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
                <SearchUser />
            </MainContent>
        </Principal>
    );
  }
}

export default App;
