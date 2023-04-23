import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ProfileCard } from './ProfileCard';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';

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
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7L0C9tvKIhH4BO5MzFHwhGIb94AhRx9dmBw&usqp=CAU'
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
