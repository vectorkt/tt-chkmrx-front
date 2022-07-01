import { render, screen, waitFor } from '@testing-library/react';
import APItest from '../APItest';

test(
    'basic api',
    async () => {
        render(<APItest/>)

        // const rawElement = await screen.findByText('Kyle');
        const rawElement = await screen.findByText('Jim');
        expect(rawElement).toBeInTheDocument();
    }

)