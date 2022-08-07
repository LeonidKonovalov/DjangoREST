// import logo from './logo.svg';
import './App.css';
import React from "react";
import AuthorList from "./components/Author";
import MenuList from "./components/Menu";
import FooterList from "./components/Footer";
import axios from "axios";


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      'authors': []
    }
  }


  componentDidMount() {
    axios.get('http://127.0.0.1:8000/api/authors/')
        .then(response => {
            const authors = response.data
              this.setState(
                  {
                    'authors': authors
                  })
        }).catch(error => console.log(error))
  }

    // const authors = [
    //   {
    //     'first_name': 'Joanne',
    //     'last_name': 'Rowling',
    //     'birthday_year': 1965,
    //     'email':'jkrowling@jkrowling.com'
    //   },
    //   {
    //     'first_name': 'Aleksandr',
    //     'last_name': 'Pushkin',
    //     'birthday_year': 1799,
    //     'email':'alex@pushkin.com'
    //   },
    // ]
    // this.setState(
    //     {
    //   'authors': authors
    //       }
    // )
  // }


  render(){
    return (
      <div>

        <MenuList menu={this.state.authors}/>
        <AuthorList author={this.state.authors}/>
        <FooterList footer={this.state.authors}/>
      </div>
    )
  }
}

export default App;
