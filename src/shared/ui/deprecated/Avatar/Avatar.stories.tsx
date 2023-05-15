import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Avatar } from './Avatar';
import programmer from './programmer.jpg';

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: 'shared/Avatar',
  component: Avatar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  src: programmer,
  size: 150,
};

export const Small = Template.bind({});
Small.args = {
  src: programmer,
  size: 50,
};
