import { createClient } from "@supabase/supabase-js";
import { SUPABASE_KEY, SUPABASE_URL } from "../helpers/constants";

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export const signUp = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signUp({
        email,
        password,
    });

    return { data, error };
};

export const signIn = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });

    return { data, error };
};

export const signOut = async () => {
    const { error } = await supabase.auth.signOut();

    return { error };
};
