import React, { Component } from 'react';
import axios from 'axios';
import classnames from 'classnames';
import ChartLine from '../ChartLine/ChartLine';
import ChartDoughnut from '../ChartDoughnut/ChartDoughnut';

import { borderBox } from '../style-lib';
import styled from 'styled-components';

const Main = styled.section`
    ${ borderBox() }
    padding: 30px;
    border-left: 1px solid #ccc;

    #target{
        margin-top: 60px;

        .title{
            font-size: 1.8rem;
            margin-bottom: 20px;
        }
    }
`;

const DropdownStyle = styled.ul`
    background: white;
    border: 1px solid #eee;
    position: absolute;
    z-index: 2;
    height: 40px;
    overflow: hidden;
    line-height: 40px;

    li {
        padding: 0 20px;
        span{
            line-height: 40px;
            cursor: pointer;
        }

        &:first-child{
            font-weight: bold;
        }

        span{
            display: block;
        }

        a{
            text-decoration: underline;
            color: blue;
            margin-right: 5px;
            cursor: pointer;
        }
    }

    &:after{
        content: '';
        position: absolute;
        right: 10px;
        top: 15px;
        display: block;
        width: 0;
        height: 0;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-top: 10px solid #ccc;
    }

    &.open{
        height: auto;
        max-height: 380px;
        overflow: auto;

        li{
            &:first-child{
                display: none;
            }
        }

        &:after{
            border-top: 0;
            border-left: 10px solid transparent;
            border-right: 10px solid transparent;
            border-bottom: 10px solid black;
        }
    }
`;

class GraphRepo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            repos: [],
            active: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    toogleClass() {
        this.setState({active: this.state.active ? false : true});
    }

    componentDidMount() {
        let $this = this;
        let URL = `https://api.github.com/users/angular/repos`;

        axios.get(URL).then(function(res) {
            $this.setState({
                repos: res.data
            });
        })
        .catch(function(e) {
            console.log("ERROR ", e);
        });
    }

    handleClick(repo) {
        document.querySelector('#target .users').innerHTML = repo.watchers_count;
        document.querySelector('#target .contributions').innerHTML = repo.forks_count;

        // Dropdown efföect
        document.querySelector('.selected span').innerHTML = repo.full_name;
        document.querySelector('.dropdown').scrollTop = 0;
    }

    render() {
        const renderItems = this.state.repos.map(function(repo, i) {
              return <li
                        data-contributions={repo.watchers_count}
                        data-clients={repo.watchers_count}
                        key={i}>
                        <span onClick={(e) => this.handleClick(repo)} className='repoName'>
                            {repo.full_name}
                        </span>
                  </li>
        }, this);

        let classes = classnames('dropdown', this.state.active ? "open" : "");

        return (
            <Main>
                <DropdownStyle className={classes} onClick={this.toogleClass.bind(this)}>
                    <li className='selected'><span>Select a repo</span></li>
                    {renderItems}
                </DropdownStyle>
                <section id='target'>
                    <div className='content'>
                        Users: <span className='users'> 0 </span> <br />
                        Contributions: <span className='contributions'>0</span>
                        {/*<ChartLine />*/}
                        <ChartDoughnut />
                    </div>
                </section>
            </Main>
        );
  }
}

export default GraphRepo;
