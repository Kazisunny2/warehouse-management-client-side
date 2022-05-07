import React from "react";
import { Table } from "react-bootstrap";

const Blogs = () => {
  return (
    <div>
      <h2> 1. Difference between javascript and nodejs</h2>
      <p> Answer: Key Differences Between javascript and nodejs:</p>
      <Table striped bordered>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Javascript</th>
            <th>NodeJS</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>
              Javascript is a programming language that is used for writing
              scripts on the website.
            </td>
            <td>NodeJS is a Javascript runtime environment.</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Javascript can only be run in the browsers.</td>
            <td>
              We can run Javascript outside the browser with the help of NodeJS.
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>It is basically used on the client-side.</td>
            <td>It is mostly used on the server-side.</td>
          </tr>
          <tr>
            <td>4</td>
            <td>
              Javascript is capable enough to add HTML and play with the DOM.
            </td>
            <td>Nodejs does not have capability to add HTML tags.</td>
          </tr>
          <tr>
            <td>5</td>
            <td>
              Javascript can run in any browser engine as like JS core in safari
              and Spidermonkey in Firefox.
            </td>
            <td>
              V8 is the Javascript engine inside of node.js that parses and runs
              Javascript.
            </td>
          </tr>
          <tr>
            <td>6</td>
            <td>Javascript is used in frontend development.</td>
            <td>Nodejs is used in server-side development.</td>
          </tr>
        </tbody>
      </Table>
      <br />
      <h2> 2. Differences between sql and nosql databases.</h2>
      <p> Answer: Key Differences Between sql and nosql databases:</p>
      <Table striped bordered>
        <thead>
          <tr>
            <th>S.No</th>
            <th>sql</th>
            <th>nosql </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS).</td>
            <td>Non-relational or distributed database system.</td>
          </tr>
          <tr>
            <td>2</td>
            <td>These databases have fixed or static or predefined schema</td>
            <td>They have dynamic schema.</td>
          </tr>
          <tr>
            <td>3</td>
            <td>
              These databases are not suited for hierarchical data storage.
            </td>
            <td>
              These databases are best suited for hierarchical data storage.
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>These databases are best suited for complex queries.</td>
            <td>These databases are not so good for complex queries.</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Vertically Scalable</td>
            <td>Horizontally scalable</td>
          </tr>
          <tr>
            <td>6</td>
            <td>Follows ACID property</td>
            <td>Follows CAP(consistency, availability, partition tolerance)</td>
          </tr>
        </tbody>
      </Table>
      <br />
      <h2>3. When should you use nodejs and when should you use mongodb?</h2>
      <p>
        MondoDB is a Database Management System, it's used to store data. NodeJS
        is a runtime environment for running JavaScript on a server. They can be
        used together but none is a replacement for the other.
      </p>
    </div>
  );
};

export default Blogs;
