/**
 *
 * @param {String} elementId
 */
export const App = (elementId) => {
    // When function App() call
    (()=> {
        const app = document.createElement('div');
        app.innerHTML = '<h1>Hello word</h1>';
        document.querySelector(elementId).append(app);
    })();
}
