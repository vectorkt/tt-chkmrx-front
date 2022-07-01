import { fireEvent, render, screen } from '@testing-library/react';
import Button from '../Button';



test(
    'renders and clicks button',
    async () => {

        const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});
        const MockFunction = jest.fn(() => {alert("something")})

        render(<Button text="hello button" className={"btn-primary"} handler={MockFunction} />);

        const btn = screen.getByText(/hello button/i);
        expect(btn).toBeInTheDocument();
        expect(btn).toHaveClass("btn-primary");

        fireEvent.click(btn);
        expect(MockFunction).toBeCalled();
        expect(alertMock).toBeCalled();

    })