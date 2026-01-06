import { createBrowserRouter } from "react-router-dom"
import App from "../App.jsx"
import TestPage from "../page/TestPage.jsx"
import NotFound from "../page/NotFound.jsx"

const router = createBrowserRouter([
  {path: '/app',element: <App />,},
  {path: '/test', element: <TestPage />},
  {path: '*', element: <NotFound />},
])


export default router