import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Text, TextTheme } from './Text';

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const TiTleAndText = Template.bind({});
TiTleAndText.args = {
  title: 'Title, Title, Title',
  text: 'Title Title Title Title Title',
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
  title: 'Title, Title, Title',
};

export const OnlyText = Template.bind({});
OnlyText.args = {
  title: 'Title, Title, Title',
  text: 'Title Title Title Title Title',
};

export const TiTleAndTextDark = Template.bind({});
TiTleAndTextDark.args = {
  title: 'Title, Title, Title',
  text: 'Title Title Title Title Title',
};
TiTleAndTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
  title: 'Title, Title, Title',
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
  text: 'Title Title Title Title Title',
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Error = Template.bind({});
Error.args = {
  title: 'Title, Title, Title',
  text: 'Title Title Title Title Title',
  theme: TextTheme.ERROR,
};
