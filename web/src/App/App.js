import React, { Component } from 'react';
//import logo from './logo.svg'; // src={logo}
import CheckList from '../Checklist/Checklist';
import SearchUser from '../SearchUser/SearchUser';
import GraphRepo from '../GraphRepo/GraphRepo';

import { borderBox } from '../style-lib';
import { rowFlexBox } from '../style-lib';
import { widthFlex } from '../style-lib';

import styled from 'styled-components';

const Principal = styled.section`
    ${ borderBox() }
    font-family: 'Source Sans Pro', sans-serif;
`;

const MainContent = styled.section`
    ${ rowFlexBox() }

    .pages{
        ${ widthFlex('75%') }

        @media (max-width: 1200px) {
          ${ widthFlex('65%') }
        }

        @media (max-width: 420px) {
          ${ widthFlex('100%') }
        }
    }
`;

class App extends Component {

  render() {
    return (
        <Principal>
            <MainContent>
                <CheckList />
                <section className='pages'>
                    <GraphRepo />
                    <SearchUser />
                </section>
            </MainContent>
        </Principal>
    );
  }
}

export default App;
