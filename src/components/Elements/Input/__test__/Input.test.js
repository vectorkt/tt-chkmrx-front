import { fireEvent, userEvent, render, screen } from '@testing-library/react';
import Input from '../Input';

test(
    'renders SearchBox and updates on change',
    async () => {

  

        const MockFunction = jest.fn((value) => {return value})

        render(<Input value={''} placeholder={"Placeholder..."} handler={MockFunction} />);

        const myinput = screen.getByPlaceholderText('Placeholder...')
        expect(myinput).toBeInTheDocument();
        
        fireEvent.change(myinput, { target: { value: "new value" } })
        expect(MockFunction).toHaveBeenCalledWith("new value");

    })