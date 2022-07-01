import { fireEvent, render, screen } from '@testing-library/react';
import VerticalBarChart from '../VerticalBarChart';



test(
    'renders VerticalBarChart',
    async () => {

        jest.mock('react-chartjs-2', () => ({
            Bar: () => null
        }));


        const timeSlices = ['January', 'February', 'March', "April"];
        const labels = ['Partially Good Files', 'Bad Files'];
        const data = [
            [1, 2, 3, 4],
            [2, 4, 6, 8],
        ];

        render(<VerticalBarChart className={"w-50"} title={"title"} labels={labels} data={data} timeSlices={timeSlices} />);

        const bar = screen.getByTestId('VerticalBarChart')
        expect(bar).toBeInTheDocument();

    })