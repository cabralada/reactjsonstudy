import React, { Component } from 'react';
import axios from 'axios';
import { borderBox } from '../style-lib';
import { widthFlex } from '../style-lib';
import { rowFlexBox } from '../style-lib';
import styled from 'styled-components';

const Main = styled.section`
    ${ borderBox() }
    min-height: 100vh;
    padding: 30px;
    border-left: 1px solid #ccc;

    .searchUser {
        ${ borderBox() }
        width: 100%;
        border-radius: 4px;
        border: 1px solid #eee;
        font-size: 1.2rem;
        padding: 10px 20px;
        margin-bottom: 20px;

        &:focus{
            outline: none;
        }
    }
`;

const UsersList = styled.ul`
    ${ rowFlexBox() }

    li {
        ${ widthFlex('25%') }
        position: relative;

        @media (max-width: 768px) {
          ${ widthFlex('50%') }
        }

        @media (max-width: 420px) {
          ${ widthFlex('100%') }
          margin-bottom: 20px;
        }

        img{
            width: 100%;
            height: auto;
            position: relative;
            z-index: 0;
            vertical-align: middle;

            @media (max-width: 420px) {
                border-radius: 4px
            }
        }

        div{
            position: absolute;
            z-index: 1;
            bottom: 0;
            left: 5%;
            height: 100%;
            width: 90%;

            span{
                background: white;
                position: absolute;

                &.username{
                    top: 10px;
                }

                &.repo{
                    bottom: 10px;
                    word-wrap: break-word;
                    width: 100%;
                    left: 0;
                    font-size: .8rem;
                }
            }
        }
    }
`;

class SearchUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      search: ''
    };
  }

  updateSearch(event) {
      this.setState({
          search: event.target.value.substr(0, 20)
      })
  }

  componentDidMount() {
      let $this = this;
      let URL = `https://api.github.com/repos/angular/angular/contributors`;
      axios.get(URL)
        .then(function(res) {
            $this.setState({
                users: res.data
            });
    })
    .catch(function(e) {
        console.log("ERROR ", e);
    });
  }

  render() {

    // That is my filter function
    let filterUser = this.state.users.filter(
        (user) => {
            let value = user.login.toLowerCase()
                .indexOf(this.state.search.toLowerCase())
            return value !== -1
        }
    );

    const renderItems = filterUser.map(function(user, i) {
        return <li key={i}>
                <img alt={user.login} src={user.avatar_url} />
                <div>
                    <span className='username'>{user.login}</span>
                    <span className='repo'>{user.repos_url}</span>
                </div>
            </li>
    });

    return (
        <Main>
            <form>
                <fieldset>
                    <input
                        className='searchUser'
                        type="text"
                        placeholder='Search a repo by user'
                        value={this.state.search}
                        onChange={this.updateSearch.bind(this)}
                        />
                </fieldset>
            </form>

            <UsersList>
                {renderItems}
            </UsersList>
        </Main>
    );
  }
}


export default SearchUser;
