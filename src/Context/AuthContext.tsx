import { createContext } from "react";

interface AuthContext {}

export const AuthContext = createContext<AuthContext | null>(null);
