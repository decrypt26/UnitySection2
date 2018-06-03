import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import Post from './components/Post';

it('should render Post', () => {
  const data = {
    id: '1',
    name: 'Oscar',
    thumbnail: 'http://placekitten.com/g/303/303',
    image: 'http://placekitten.com/g/305/305',
    feeling:
      'Tom is my best friend. He is always there in the hour of need. He steals food from the neighbors just for me.'
  };
  const div = document.createElement('div');
  ReactDOM.render(<Post key="1" data={data} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should contain Thumbnail in Post', () => {
  const data = {
    id: '1',
    name: 'Oscar',
    thumbnail: 'http://placekitten.com/g/303/303',
    image: 'http://placekitten.com/g/305/305',
    feeling:
      'Tom is my best friend. He is always there in the hour of need. He steals food from the neighbors just for me.'
  };
  const wrapper = shallow(<Post key="1" data={data} />);
  expect(wrapper.find('.thumbnail').length).toEqual(1);
});

it('should contain body in Post', () => {
  const data = {
    id: '1',
    name: 'Oscar',
    thumbnail: 'http://placekitten.com/g/303/303',
    image: 'http://placekitten.com/g/305/305',
    feeling:
      'Tom is my best friend. He is always there in the hour of need. He steals food from the neighbors just for me.'
  };
  const wrapper = shallow(<Post key="1" data={data} />);
  expect(wrapper.find('.media-body').length).toEqual(1);
});
