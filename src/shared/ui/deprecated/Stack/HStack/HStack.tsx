import { Flex, FlexProps } from '../Flex/Flex';

type HStackProps = Omit<FlexProps, 'direction'>;

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const HStack = (props: HStackProps) => {
  const { justify = 'start' } = props;

  return <Flex direction="row" {...props} justify={justify} />;
};
