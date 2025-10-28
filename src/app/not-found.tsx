
import { Metadata } from "next";
import NotFound from "./components/not-found";

export const metadata: Metadata = {
    title: "404 Page | Gestalty ",
};

const ErrorPage = () => {
    return (
        <NotFound />
    );
};

export default ErrorPage;
