import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ProfileCard } from './ProfileCard';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import programmer from 'shared/assets/test/programmer.jpg'

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => (
  <ProfileCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  data: {
    username: 'admin',
    age: 99,
    country: Country.Belarus,
    first: 'John',
    lastname: 'Doll',
    city: 'NY',
    currency: Currency.EUR,
    avatar: programmer
  },
};

export const WithError = Template.bind({});
WithError.args = {
    error: 'true'
};

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true
};
