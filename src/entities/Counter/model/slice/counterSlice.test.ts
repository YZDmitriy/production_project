import { CounterSchema } from './../types/counterSchema';
import { CounterReducer, counterActions } from './counterSlice';

describe('counterSlice.test', () => {
  test('decrement', () => {
    const state: CounterSchema = { value: 10 };
    expect(CounterReducer(state, counterActions.decrement())).toEqual({
      value: 9,
    });
  });

  test('increment', () => {
    const state: CounterSchema = { value: 10 };
    expect(CounterReducer(state, counterActions.increment())).toEqual({
      value: 11,
    });
  });

  test('should work with empty state', () => {
    expect(CounterReducer(undefined, counterActions.increment())).toEqual({
      value: 1,
    });
  });
});
