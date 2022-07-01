import { fireEvent, render, screen } from '@testing-library/react';
import MixedChart from '../MixedChart';



test(
    'renders MixedChart',
    async () => {

        jest.mock('react-chartjs-2', () => ({
            Bar: () => null
        }));

        const labels = ['Dataset 1', 'Dataset 2', 'Dataset 3',]
        const types = ["line", "bar", "bar"];
        const timeSlices = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        const data1 = [1, 2, 3, 4, 5, 6, 7];
        const data2 = data1.map(item => item * 2)
        const data3 = data1.map(item => item * 3)
        const data = [data1, data2, data3];

        render(<MixedChart className={"w-50"} {...{ labels, types, timeSlices, data }} />);

        const bar = screen.getByTestId('MixedChart')
        expect(bar).toBeInTheDocument();

    })