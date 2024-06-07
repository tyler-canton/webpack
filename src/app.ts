import {MDCRipple} from '@material/ripple/index';


const buttonElement = document.querySelector('.foo-button');
if (buttonElement instanceof Element) {
    new MDCRipple(buttonElement);
} else {
    console.error('Element not found or is not an instance of Element');
}

interface SimulatedObject {
  id: number;
  name: string;
  description: string;
}

const simObj = (key: string): SimulatedObject | null => {
return  {
    key1: { id: 1, name: 'Object One', description: 'This is object one sim' },
    key2: { id: 2, name: 'Object Two', description: 'This is object two' },
    key3: { id: 3, name: 'Object Three', description: 'This is object three' }
  }[key] || null;
};

// Usage
console.log(simObj('key2'));
console.log(simObj('key3'));
