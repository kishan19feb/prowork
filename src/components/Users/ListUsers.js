import React from 'react';
import {Container, TableWrap} from '../Styled';

function ListUsers(){
    let userData = localStorage.getItem('userData') || JSON.stringify([]);
    userData = JSON.parse(userData);
    return (
        <Container>
            <h1>Users List</h1>
            <TableWrap>
                <thead>
                    <tr><th>Name</th><th>Gender</th><th>Age</th><th>Address</th><th>Description</th></tr>
                </thead>
                <tbody>
                    {userData.map((item, i)=>(
                        <tr key={i}>
                            <td>{item.firstName} {item.lastName}</td>
                            <td>{item.gender}</td>
                            <td>{item.age}</td>
                            <td>{item.address}</td>
                            <td>{item.description}</td>
                        </tr>
                    ))}
                </tbody>
            </TableWrap>
       </Container>
    );
}
export default ListUsers;