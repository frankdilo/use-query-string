import "react-app-polyfill/ie11";
import * as React from "react";
import * as ReactDOM from "react-dom";

import { useQueryString } from "../.";

const App = () => {
  const username = useQueryString("username");
  const userId = useQueryString("userId", parseInt);

  return (
    <div>
      <p>
        Visit <a href="/?username=frankdilo">/?username=frankdilo</a>
        <br></br>
        Visit <a href="/?userId=123">/?userId=123</a>
      </p>
      <p>The parsed query param will appear below 👇</p>
      <code>
        {username ? `${username} | type = ${typeof username}` : ``}
        {userId ? `${userId} | type = ${typeof userId}` : ``}
      </code>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
