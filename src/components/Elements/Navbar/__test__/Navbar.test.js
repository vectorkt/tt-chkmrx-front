import { fireEvent, render, screen } from '@testing-library/react';
import Navbar from '../Navbar';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';


test(
    'renders and clicks Navbar',
    async () => {

        const history = createMemoryHistory();

        const titles = ["ProjectA", "ProjectB", "ProjectC"];

        const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => { });
        const MockFunction = jest.fn(() => { alert("something") })

        
        render(
            <Router location={history.location} navigator={history}>
                <Navbar isLoggedIn={true} titles={titles} />
            </Router>
        );

        const ProjectA = screen.getByText(/ProjectA/i);
        expect(ProjectA).toBeInTheDocument();

        fireEvent.click(ProjectA);
        expect(history.location.pathname).toBe('/projects/ProjectA');

        const Home = screen.getByText(/Home/i);
        expect(Home).toBeInTheDocument();

        
        fireEvent.click(Home);
        expect(history.location.pathname).toBe('/');

    })