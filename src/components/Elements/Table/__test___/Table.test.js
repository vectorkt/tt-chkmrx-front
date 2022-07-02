import { fireEvent, render, screen } from '@testing-library/react';
import Table from '../Table';

test(
    'table test',
    async () => {

        const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});

        const rowHandler = (event) => {
            var target = event.target;
            var parent = target.parentElement;
            alert(parent.getAttribute('data'));
        }

        const rowHandlerMock = jest.fn(rowHandler)



        render(
            <Table
                className={"table-primary"}
                rowClickHandler={rowHandlerMock}
                header={["index", "First", "Last", "Handle"]}
                body=
                {[
                    ["1", "Mark", "Otto", "@mdo"],
                    ["2", "Jacob", "Thornton", "@fat"],
                    // ["3", "Mark", "Otto", "@mdo"],
                ]}
                data=
                {[
                    "first row data",
                    "second row data",
                    "third row data",
                ]}
            />
        );

        const firstRow = screen.getByText(/Mark/i).closest("tr");
        expect(firstRow).toBeInTheDocument();
        expect(firstRow).toHaveAttribute("data", "first row data");


        const table = screen.getByText(/Mark/i).closest("table");
        expect(table).toBeInTheDocument();
        expect(table).toHaveClass("table-primary");

        fireEvent.click(firstRow);
        expect(rowHandlerMock).toBeCalled();
        expect(alertMock).toBeCalled();




    })