import React, { Component } from 'react';
//import logo from './logo.svg'; // src={logo}
import { borderBox } from '../style-lib';
import { widthFlex } from '../style-lib';
import styled from 'styled-components';

const CheckList = styled.aside`
    padding: 30px;
    text-align: left;
    overflow-y: auto;
    min-height: 100vh;

    ${ borderBox() }
    ${ widthFlex('25%') }

    @media (max-width: 1200px) {
      ${ widthFlex('35%') }
    }

    @media (max-width: 420px) {
      display: none
    }

    ul {
        li {
            margin-top: 10px;
            font-size: .8rem;
            line-height: 1rem;
            &:first-child{
                font-weight: bold;
                margin-top: 30px;
            }

            input {
                margin-right: 5px;
                &:checked {
                    & + span{
                        text-decoration: line-through;
                        font-style: italic;
                        color: rgba(0,0,0,.5)
                    }
                }
            }

            textarea {
                ${ borderBox() }
                resize: none;
                border: 1px solid rgba(0,0,0,.1);
                background: rgba(0,0,0,.05);
                border-radius: 4px;
                width: 100%;
                padding: 10px;
            }
        }
    }
`;

class Checklist extends Component {
  render() {
    return (
        <CheckList>
            <h2>Task Checklist</h2>

            <ul>
                <li>Basic version</li>
                <li>
                    <label>
                        <input checked readOnly type="checkbox" />
                        <span>
                            Create a search field with a (repo) typeahead, where user can type any github username and the search would return the list of users github repos
                        </span>
                    </label>
                </li>
                <li>
                    <label>
                        <input checked readOnly type="checkbox" />
                        <span>
                            User can then select a repo from the typeahead dropdown and the app should display a graph of contributions per user for this repo (x axis users, y axis number of contributions)
                        </span>
                    </label>
                </li>
                <li>
                    <label>
                        <input  checked readOnly type="checkbox" />
                        <span>
                            Make sure to handle the case, when username does not exist or user has no repos
                        </span>
                    </label>
                </li>
            </ul>

            <ul>
                <li>Fancy version</li>
                <li>
                    <label>
                        <input checked readOnly type="checkbox" />
                        <span>
                            Use ECMAScript 6
                        </span>
                    </label>
                </li>
                <li>
                    <label>
                        <input checked readOnly type="checkbox" />
                        <span>
                            Make it look nice design wise
                        </span>
                    </label>
                </li>
            </ul>

            <ul>
                <li>Additional info</li>
                <li>
                    <label>
                        <input checked readOnly type="checkbox" />
                        <span>
                            API endpoints needed (repos and contributors) - e.g.:
                            <textarea defaultValue="https://api.github.com/users/angular/repos" />
                            <textarea defaultValue="https://api.github.com/repos/angular/angular/contributors" />
                        </span>
                    </label>
                </li>
                <li>
                    <label>
                        <input checked readOnly type="checkbox" />
                        <span>
                            Feel free to use any other open API, that could make the assignment better/easier
                        </span>
                    </label>
                </li>
            </ul>

            <ul>
                <li>General guidelines</li>
                <li>
                    <label>
                        <input checked readOnly type="checkbox" />
                        <span>Project should be build with one of the Javascript frameworks/libraries of your choosing</span>
                    </label>
                </li>
                <li>
                    <label>
                        <input checked readOnly type="checkbox" />
                        <span>The code should be readable and clearly commented when needed</span>
                    </label>
                </li>
                <li>
                    <label>
                        <input checked readOnly type="checkbox" />
                        <span>The project should be pushed to a public github repository</span>
                    </label>
                </li>
                <li>
                    <label>
                        <input checked readOnly type="checkbox" />
                        <span>You can use all the open source libraries you need</span>
                    </label>
                </li>
                <li>
                    <label>
                        <input type="checkbox" />
                        <span>README.md should contain project documentation (how to run and build the project locally from scratch, project structure, gotchas,... anything worth mentioning)</span>
                    </label>
                </li>
                <li>
                    <label>
                        <input checked readOnly type="checkbox" />
                        <span>The project should support IE10+, Android native browser 4.4+ and all modern browsers (current version - 1)</span>
                    </label>
                </li>
                <li>
                    <label>
                        <input checked readOnly type="checkbox" />
                        <span>The UI should be responsive</span>
                    </label>
                </li>
                <li>
                    <label>
                        <input checked readOnly type="checkbox" />
                        <span>HTML should be semantic</span>
                    </label>
                </li>
            </ul>
        </CheckList>
    );
  }
}

export default Checklist;
