import 'react-native-url-polyfill/auto'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://akgcznxscilwctypxvaq.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFrZ2N6bnhzY2lsd2N0eXB4dmFxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUzNTI1NzUsImV4cCI6MjAzMDkyODU3NX0.-R0grEt-N0JnZDufukYbzeB1JsXUuBPDeSEErnj9eFc"

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
        storage: AsyncStorage,
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: false,
    },
})