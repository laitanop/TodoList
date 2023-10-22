import { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import React from "react";
import { SUPABASE_KEY, SUPABASE_URL } from "../../helpers/constants";
import { UserSession } from "./authTypes";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

import Typography from "@mui/material/Typography";
import { signIn, signUp } from "../../Services/Auth";

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

function Authentication() {
    const [authSession, setAuthSession] = useState<UserSession | null>(null);
    const [errorSession, setErrorSession] = useState(null);
    const [signUpSession, setSignUpSession] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const email = formData.get("email")?.toString();
        const password = formData.get("password")?.toString();

        const { data, error } = signUpSession
            ? await signUp(email, password)
            : await signIn(email, password);
        if (data?.user?.email) {
            setAuthSession(data as UserSession);
            setErrorSession(null);
        } else {
            setErrorSession(error.message);
        }
    };

    const handleLogout = async () => {
        setErrorSession(null);
        const { error } = await supabase.auth.signOut();

        setAuthSession(null);
        setErrorSession(error.message);
    };

    if (!authSession?.user?.email) {
        return (
            <Container maxWidth="sm">
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    minHeight="100vh"
                >
                    <Grid>
                        <Grid item xs={3}>
                            <Typography variant="h6" component="h2">
                                Welcome to todo list
                            </Typography>
                            <Typography variant="h5" component="h2">
                                {signUpSession ? "Sign Up" : "Sign In"}
                            </Typography>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                        </Grid>
                        {errorSession && <div>{errorSession}</div>}
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            {signUpSession ? "Sign Up" : "Sign In"}
                        </Button>
                        <Grid>
                            {signUpSession
                                ? "Already have an account?"
                                : "Don't have an account?"}

                            <Button
                                onClick={() =>
                                    setSignUpSession((current) => !current)
                                }
                            >
                                {signUpSession ? "Sign In" : "Sign Up"}
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        );
    } else {
        return (
            <div>
                Logged in!
                <button
                    onClick={() => {
                        handleLogout();
                    }}
                >
                    {" "}
                    logout{" "}
                </button>
            </div>
        );
    }
}

export default Authentication;
