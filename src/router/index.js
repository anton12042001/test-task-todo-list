import TaskPage from "../pages/TaskPage/TaskPage";

export const publicRoutes = [
    {path: '/task/', element: <TaskPage/>},
    {path: '/task/:id', element: <TaskPage/>},
]