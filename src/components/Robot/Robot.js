import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
background-color: blue;
padding: 1rem;
text-align: center;
margin: 0.5rem;
width: 20rem;
justify-content: center;
&:hover {
    box-shadow: 5px 10px 10px 5px #e6dddd; 
}
`;

const Image = styled.img`
    height: 4rem;
    width: 4rem;
    border-radius: 2rem;
    pointer-events: none;
    margin-bottom: 8rem;
`;

const Name = styled.p`
    font-size: 1.5rem;
    font-weight: bold;
`;

const UserName = styled.p`
    font-size: 1em;
    font-weight: bold;
`;

const Robot = ({robot}) => (
    <>
        <Card>
            <Image src={`https://robohash.org/${robot.id}?size=200x200`} alt='logo' />
            <Name>
                {robot.name}
            </Name>
            <UserName>
                {robot.userName}
            </UserName>
        </Card>
    </>
)

export default Robot;