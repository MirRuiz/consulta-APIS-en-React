import React from "react";
import { Link, useHistory } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button"



export const LoginPage: React.FC = () => {
  const history = useHistory();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleNavigation = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (username === "admin" && password === "test") {
      history.push("/home-page");
    } else {
      alert("User / password not valid, psst... admin / test");
    }
  };

  return (
    <form onSubmit={handleNavigation}>
      <h2>Hello to the API page</h2>
      <div>
        <div>
          <TextField
            required
            label="Username: "
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <TextField
            required
            label="Password: "
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button variant="outlined" type="submit">Login</Button>
      </div>
    </form>
  );
};
