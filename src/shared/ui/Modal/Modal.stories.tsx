import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Modal } from './Modal';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  isOpen: true,
  children: 'Text,Text,Text,Text,Text,Text,Text',
};

export const Dark = Template.bind({});
Dark.args = {
  isOpen: true,
  children: 'Text,Text,Text,Text,Text,Text,Text',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
