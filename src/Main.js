import React, { Component } from 'react'
import axios from 'axios';
import { Card, Container, CardImg, CardTitle, CardText, CardBody } from 'reactstrap';
import './Style.css'
import c7 from './c7.jpg'

export default class Main extends Component {
    constructor(props) {
        super(props)

        this.state = {
            list: null,
        }
    }
    componentDidMount = () => {
        this.getList();
    }

    getList = () => {
        axios.get("https://randomuser.me/api/")
            .then((response) => {
                if (response.status === 200) {
                    let obb = response.data.results;
                    console.log("response data------", response.data.results)
                    this.setState({
                        list: obb
                    })
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }
    render() {
        console.log("thisSTate======", this.state.list)
        return (
            <React.Fragment>
                <Container className='bg'>
                    {this.state.list !== null && this.state.list.map((data, index) => (
                        //   <li key={index}>{data.email} <br/>{data.name.first} &nbsp; {data.name.last}</li>


                        <Card className='btcard' inverse>
                            <CardImg top src={c7}
                                alt="Card picture"

                            />
                            <img
                                alt="Card profile picture"
                                className='profilepic'
                                src={data.picture.medium}

                            />
                            <CardBody className='fcolor'>
                                <CardTitle tag="h5">
                                    <b>{data.name.first} &nbsp; {data.name.last}</b><hr />
                                </CardTitle>
                                <CardText>
                                    {data.email}<br />
                                    {data.phone}
                                </CardText>
                            </CardBody>
                        </Card>

                    ))}
                </Container>
            </React.Fragment>
        )
    }
}
