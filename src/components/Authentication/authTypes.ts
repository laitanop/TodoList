type SessionType = {
    access_token: string;
    expires_at: number;
    expires_in: number;
    refresh_token: string;
    token_type: string;
};
type UserType = {
    app_metadata: { provider: string; providers: Array<[]> };
    aud: string;
    confirmation_sent_at: string;
    confirmed_at: string;
    created_at: string;
    email: string;
    email_confirmed_at: string;
    id: string;
    identities: Array<[]>;
    last_sign_in_at: string;
    phone: string;
    role: string;
    updated_at: string;
    user_metadata: Record<string, never>;
};

export interface UserSession {
    user: UserType;
    session: SessionType;
}
