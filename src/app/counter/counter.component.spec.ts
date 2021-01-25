import {CounterComponent} from './counter.component';

describe('CounterComponent', () => {
 let component: CounterComponent;

 beforeEach(() => {
    component = new CounterComponent();
  }); // Вспомогательный елемент для создания нового инстанса

 it('should inc counter by 1', () => {
    component.increment();
    expect(component.counter).toBe(1);
  });

 it('should inc counter by 1', () => {
    component.decrement();
    expect(component.counter).toBe(-1);
  });

 it('should inc val by emitter', () => {
    let result = null;
    component.counterEmitter.subscribe(v => result = v);

    component.increment();

    expect(result).toBe(1);
  });

 it('should inc val by emitter', () => {
    let result = null;
    component.counterEmitter.subscribe(v => result = v);

    component.decrement();

    expect(result).toBe(-1);
  });
});
