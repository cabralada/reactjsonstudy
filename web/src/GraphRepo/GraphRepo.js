import React, { Component } from 'react';
import axios from 'axios';
import classnames from 'classnames';
import ChartDoughnut from '../ChartDoughnut/ChartDoughnut';
import ChartBar from '../ChartBar/ChartBar';

import { borderBox } from '../style-lib';

import styled from 'styled-components';

const Main = styled.section`
    ${ borderBox() }
    padding: 30px;
    border-left: 1px solid #ccc;
    min-height: 100vh;

    #target{
        margin-top: 60px;
        ul{
            margin-bottom: 20px;
            overflow: hidden;
            li{
                float: left;
                margin-right: 20px;
                font-size: 1.2rem;

                span{
                    font-weight: 900;
                    display: inline-block;
                    margin-left: 5px
                }
            }
        }
        .title{
            font-size: 1.8rem;
            margin-bottom: 20px;
        }

        .chartjs-render-monitor{
            margin-bottom: 40px;
        }

        .graphs{
            display: none;
            &.show{
                display: block;
            }
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

    @media (max-width: 420px) {
      width: calc(100% - 60px);
    }

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

let legendChart = '';

class GraphRepo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            repos: [],
            active: false,
            gitUsers: '',
            gitContributions: '',
            contributionsList: [],
            listUsers: [],
            repoName: ''
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
        let $this = this;
        let $target =  document.querySelector('#target');
        $target.querySelector('.graphs').className += " show";
        // Dropdown effect
        document.querySelector('.selected span').innerHTML = repo.full_name;
        document.querySelector('.dropdown').scrollTop = 0;

        // Define values to share
        $this.setState({
            active: this.state.active ? false : true,
            repoName: this.state.repoName,
            gitUsers: repo.watchers_count,
            gitContributions: repo.forks_count
        });

        legendChart = repo.full_name;

        // Searching for contributions on repository selected
        let URL = repo.contributors_url;
        axios.get(URL).then(function(res) {
            $this.setState({
                contributionsList: res.data
            });
        })
        .catch(function(e) {
            console.log("ERROR ", e);
        });
    }

    render() {

        let contributionsByRepo = this.state.contributionsList.map(function(item, i) {
            return item.contributions;
        });

        let usersByRepo = this.state.contributionsList.map(function(item, i) {
            return item.login;
        });

        let heightListUsers = usersByRepo.length * 40;

        console.log('qtd users:', usersByRepo.length);

        let renderItems = this.state.repos.map(function(repo, i) {
            return <li
                key={i}>
                <span onClick={(e) => this.handleClick(repo)} className='repoName'>
                    {repo.full_name}
                </span>
            </li>
        }, this);

        let classes = classnames('dropdown', this.state.active ? "open" : "");

        return (
            <Main>
                <DropdownStyle
                    className={classes}
                    onClick={this.toogleClass.bind(this)}
                >
                    <li className='selected'>
                        <span>Select a repo</span>
                    </li>
                    {renderItems}
                </DropdownStyle>
                <section id='target'>
                    <div className='graphs'>
                        <ChartBar
                            height={heightListUsers}
                            legend={legendChart}
                            label={usersByRepo}
                            infoData={contributionsByRepo}
                        />
                        <ChartDoughnut
                            label={['Watchers', 'Forks']}
                            infoData={
                                [this.state.gitUsers,this.state.gitContributions]
                            }
                        />
                    </div>
                </section>
            </Main>
        );
  }
}

export default GraphRepo;
