import { 
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    Button,
    Col
 } from 'reactstrap';
 import HomePageImg from './images/homepage2.jpeg'
 import { useContext, UserContext } from 'react';

function HomePage() {

    return (
        <Col sm="12" md={{ size: 6, offset: 3 }} className="text-center">
            <Card >
                <img
                className="homePageImg"
                alt="Card image"
                src={HomePageImg}
                />
                <CardBody>
                    <CardTitle tag="h5">
                    Welcome To
                    </CardTitle>
                    <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                    >
                       Svitlana's Bad Bank
                    </CardSubtitle>
                    <CardText>
                        Thank you for choosing Svitlana's Bad Bank for your banking.
                        You can Create an Account first, then start your banking activities!
                    </CardText>
                    <Button href="#/createaccount">Create New Account</Button>
                </CardBody>
        </Card> 
    </Col>
    )
}

export default HomePage;