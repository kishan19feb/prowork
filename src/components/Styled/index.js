import Styled from 'styled-components';

/* App.js Styles */
export const AppContainer = Styled.div`
  display:flex;
`;

export const AppWrap = Styled.div``;

export const Container = Styled.div`
    background-color: #FEFEFE;
    height: 100vh;
    width: 100%;
    padding: 1em;
    margin-left: 200px;
`;


/* Navigation Component Style */

export const NavWrap = Styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    width: 200px;
    height:100vh;
    background-color: #f1f1f1;
    position: fixed;
`;

export const NavItem = Styled.li`
      a {
        display: block;
        color: ${props => props.active ? "#FFF" : "#000"};
        padding: 8px 16px;
        text-decoration: none;
        background-color: ${props => props.active ? "#555" : ""};
      }
      
      a:hover {
        background-color: #555;
        color: white;
      }
`;

/* User Add Form */

export const InputWrap = Styled.div`
    margin-bottom: 5px;

    input {
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        box-sizing: border-box;
    }

    select {
        width: 100%;
        padding: 16px 20px;
        border-radius: 4px;
        background-color: #fff;
    }

    textarea {
        width: 100%;
        height: 150px;
        padding: 12px 20px;
        box-sizing: border-box;
        border: 2px solid #ccc;
        border-radius: 4px;
        resize: none;
    }

    button {
        background-color: #555;
        border: none;
        color: white;
        padding: 16px 32px;
        text-decoration: none;
        margin: 4px 2px;
        cursor: pointer;
        width:30%;
    }
`;

export const FormWrap = Styled.div`
    width: 60%;
`;

export const NameWrap = Styled.div`
    display:flex;
    justify-content:space-between;
    div:first-child{
        width:98%;
        margin-right:2%;
    }
    div:last-child{
        width:98%;
        margin-left:2%;
    }
`;


/* User List Styles */

export const TableWrap = Styled.table`
    border-collapse: collapse;
    width: 100%;

    td, th {
        border: 1px solid #ddd;
        padding: 8px;
      }
      
       tr:nth-child(even){background-color: #f2f2f2;}
      
       tr:hover {background-color: #ddd;}
      
       th {
        padding-top: 12px;
        padding-bottom: 12px;
        text-align: left;
        background-color: #555;
        color: white;
      }

`;