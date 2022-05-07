import {render} from 'react-native-testing-library';
import { CustomButton } from './CustomButton';
import { App } from './App';

describe("<CustomButton />", () => {
   it("should match snapshot", () => {
     const snap = render(<CustomButton title="test" />).toJSON();  
       expect(snap).toMatchSnapshot();
   });
});

// describe("<App />", () => {
//     it("test", () => {
//        const snap = render(<App />).toJSON() 
//     });
// })