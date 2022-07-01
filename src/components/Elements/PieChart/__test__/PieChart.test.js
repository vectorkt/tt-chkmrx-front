import { fireEvent, render, screen } from '@testing-library/react';
import PieChart from '../PieChart';



test(
    'renders PieChart',
    async () => {

        jest.mock('react-chartjs-2', () => ({
            Pie: () => null
        }));
        

        const labels = ['Red', 'Blue', 'Yellow',]// 'Green', 'Purple', 'Orange'];
        const dataset = [12, 19, 3,]// 5, 2, 3];

        render(<PieChart className={"w-50"} title={"title"} labels={labels} dataset={dataset} />);

        const pie = screen.getByTestId('PieChart')
        expect(pie).toBeInTheDocument();
        // expect(btn).toHaveClass("btn-primary");

        // fireEvent.click(btn);
        // expect(MockFunction).toBeCalled();
        // expect(alertMock).toBeCalled();

    })