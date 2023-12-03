import Summary from "./pages/Summary";
import Defensive from "./pages/Defensive";
import Offensive from "./pages/Offensive";
export const route = [
    {
        path: "/",
        element: <Summary />
    },
    {
        path: "/Defensive",
        element: <Defensive/>
    },
    {
        path: "/Offensive",
        element: <Offensive />
    }
]