import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import nock from 'nock';
import App from './App';

beforeEach(() => {
  nock('https://api.myjson.com')
    .get('/bins/u0wci')
    .reply(200, [
      {
        id: '1',
        name: 'Oscar',
        thumbnail: 'http://placekitten.com/g/303/303',
        image: 'http://placekitten.com/g/305/305',
        feeling:
          'Tom is my best friend. He is always there in the hour of need. He steals food from the neighbors just for me.'
      }
    ]);
});

it('dummy server works and App renders properly', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should contain Panel in App', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('.panel').length).toEqual(1);
});
