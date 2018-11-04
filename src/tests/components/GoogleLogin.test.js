import React from 'react';
import { shallow } from 'enzyme';
import Googlelogin from '../../components/login/Google';

describe('Sociallogin Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Googlelogin />);
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should make a post request on form submission', async () => {

  });
});
