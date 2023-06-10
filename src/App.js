import React from 'react';
import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import DefaultLayout from './components/Layouts/DefaultLayout';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map(({ path, component, layout }, index) => {
                        //logic layout
                        let Layout;
                        if (layout) {
                            Layout = layout;
                        } else {
                            if (layout === null) {
                                Layout = Fragment;
                            } else Layout = DefaultLayout;
                        }
                        //page
                        const Page = component;

                        return (
                            <Route
                                key={index}
                                path={path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
