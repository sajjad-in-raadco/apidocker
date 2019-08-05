/* eslint-disable linebreak-style */
import React, { Component } from 'react';
import {_callApi} from './RestApi';
 

let { Provider, Consumer } = React.createContext();

class Rest extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      data: null,
      loading: true
    }
  }
  

   async callApi (){
    this.setState({
        error: null,
        data: null,
        loading: true
      });

      const {method, route} = this.props;
      const data= await _callApi({
          method:method,
          url: route
    });
    this.setState({
        error: null,
        data: data,
        loading: false
      })
  }
  
 

  componentWillMount() {
    const { method, route, run } = this.props;
    if (run) {
     this.callApi();
    } else {
      this.setState({
        error: null,
        data: null,
        loading: false
      })
    }
  }
  render() {
    const { data, loading, error } = this.state;
    const { run } = this.props;

    return (<Provider value={{ data, loading, error, callApi: run ? undefined :this.callApi  }}>
            <Consumer>
                {this.props.children}
            </Consumer>
        </Provider>)


  }
}

export default Rest;