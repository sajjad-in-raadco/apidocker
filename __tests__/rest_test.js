import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Rest} from '../src';

Enzyme.configure({ adapter: new Adapter() });

test('Welcome component should return correct output', () => {
  const wrapper = shallow(<Rest
     route="http://babahassan.ir/api/elements/site"
  method="GET"
  run > 
{({ data, error, loading }) => {
              if(loading){
                return (<span>loading....</span>)
              }
              console.log({ data, error, loading });
              return (
                <div>
                  {JSON.stringify({ data, error, loading })}
                </div>
              );
            }}
  </Rest>);

});
