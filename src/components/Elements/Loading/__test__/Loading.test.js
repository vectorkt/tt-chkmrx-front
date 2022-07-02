import { fireEvent, render, screen } from '@testing-library/react';
import Loading from '../Loading';


test(
    'renders Loading Screen with appropriate size',
    async () => {

        render(<Loading size={"10rem"}/>);

        const LoadingElement = screen.getByTestId(/Loading/i);
        expect(LoadingElement).toBeInTheDocument();
        expect(LoadingElement).toHaveStyle(`width: 10rem; height: 10rem;`);

    })