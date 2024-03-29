import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Text, TextSize, TextTheme } from './Text';
import { Theme } from '@/shared/const/theme';

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

export const SizeM = Template.bind({});
TiTleAndText.args = {
  title: 'Title, Title, Title',
  text: 'Title Title Title Title Title',
  size: TextSize.M,
};

export const SizeS = Template.bind({});
TiTleAndText.args = {
  title: 'Title, Title, Title',
  text: 'Title Title Title Title Title',
  size: TextSize.S,
};

export const TiTleAndTextSizeM = Template.bind({});
TiTleAndTextSizeM.args = {
  title: 'Title, Title, Title',
  text: 'Title Title Title Title Title',
  size: TextSize.M,
};

export const TiTleAndTextSizeL = Template.bind({});
TiTleAndTextSizeL.args = {
  title: 'Title, Title, Title',
  text: 'Title Title Title Title Title',
  size: TextSize.L,
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
