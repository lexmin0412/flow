import {
  createBrowserRouter,
	Link
} from "react-router-dom";
import AntdDemo from "../pages/antd-demo";
import PageWrapper from "../components/layout/page-wrapper";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: (
        <PageWrapper />
      ),
    },
    {
      path: "/antd-demo",
      element: <AntdDemo />,
    },
    {
      path: "/about",
      element: (
        <div>
          <div>About</div>
          <div>
            <Link className="cursor-pointer" to="/">
              回到首页
            </Link>
          </div>
        </div>
      ),
    },
  ],
  {
    basename: "/flow/",
  }
);

export default router
