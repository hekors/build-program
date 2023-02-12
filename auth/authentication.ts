
import { createClient } from "@supabase/supabase-js";
import { useEffect } from "react";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);

async function signInWithGitHub() {
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'github',
    });
};

async function signInWithTwitter() {
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'twitter',
    });
};

export {
    signInWithGitHub,
    signInWithTwitter
};