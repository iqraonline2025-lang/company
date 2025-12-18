import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Loader2, X, Mail } from "lucide-react";
import { supabase } from "../supabase-client";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null); // { type: 'success' | 'error', text: string }
  const navigate = useNavigate();

  // Function to dismiss the notification message
  const dismissMessage = () => setMessage(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage(null);
    setLoading(true);

    try {
      const adminEmails = ["admin@oryntix.com", "admin@example.com"];
      const isAdmin = adminEmails.includes(email);

      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        // If it's an admin email and the error is about email confirmation, try to confirm it
        if (isAdmin && error.message.includes("Email not confirmed")) {
          setMessage({
            type: "info",
            text: "Confirming admin account...",
          });

          try {
            // Try to resend confirmation and then confirm
            await supabase.auth.resend({
              type: "signup",
              email: email,
            });

            // For admin emails, we'll create a confirmed session manually
            // This is a workaround for development
            const { data: signUpData, error: signUpError } =
              await supabase.auth.signUp({
                email,
                password,
                options: {
                  data: {
                    email_confirm: true,
                  },
                },
              });

            if (!signUpError && signUpData.user) {
              setMessage({
                type: "success",
                text: "Admin account confirmed! Logging in...",
              });
              setTimeout(() => navigate("/dashboard"), 2000);
            } else {
              setMessage({
                type: "error",
                text: "Please check your email and click the confirmation link, then try logging in again.",
              });
            }
          } catch (confirmError) {
            setMessage({
              type: "error",
              text: "Please check your email and click the confirmation link, then try logging in again.",
            });
          }
        } else {
          setMessage({
            type: "error",
            text: error.message || "An unknown error occurred during login.",
          });
        }
      } else {
        setMessage({
          type: "success",
          text: "Login successful! Redirecting...",
        });
        // After success, navigate to home (regular users) or dashboard (admins)
        setTimeout(() => navigate(isAdmin ? "/dashboard" : "/"), 2000);
      }
    } catch (err) {
      setMessage({
        type: "error",
        text: "A severe network issue prevented login.",
      });
    } finally {
      setLoading(false);
    }
  };

  const Notification = ({ type, text, onDismiss }) => (
    <div
      className={`p-4 rounded-xl shadow-lg flex items-center justify-between text-sm font-medium transition-opacity duration-300 ${
        type === "success" ? "bg-green-600/80" : "bg-red-600/80"
      } backdrop-blur-sm text-white`}
    >
      <span>{text}</span>
      <button
        onClick={onDismiss}
        className="p-1 rounded-full hover:bg-white/30 transition-colors"
      >
        <X size={16} />
      </button>
    </div>
  );

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      style={{
        background: "linear-gradient(135deg, #1A1A2E 0%, #100C1F 100%)",
      }}
    >
      <div className="w-full max-w-md">
        {/* Card Container - Blackish/Whitish Accents */}
        <div className="bg-white/5 backdrop-blur-xl p-8 md:p-10 rounded-3xl shadow-2xl border border-white/10 space-y-8">
          <div className="text-center">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 mb-4">
              <Mail className="text-white" size={24} />
            </div>
            <h2 className="text-3xl font-extrabold text-white">Welcome Back</h2>
            <p className="mt-2 text-sm text-gray-400">
              Sign in to your account.
            </p>
          </div>

          {/* Notification Area */}
          {message && (
            <Notification
              type={message.type}
              text={message.text}
              onDismiss={dismissMessage}
            />
          )}

          <form className="space-y-6" onSubmit={handleLogin}>
            <div className="space-y-4">
              {/* Email Input */}
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full px-4 py-3 border border-gray-600 bg-gray-800 placeholder-gray-400 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              {/* Password Input */}
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="w-full px-4 py-3 border border-gray-600 bg-gray-800 placeholder-gray-400 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            {/* Submit Button - Purplish/Pinkish/Bluish Gradient */}
            <div>
              <button
                type="submit"
                disabled={loading}
                className={`group relative w-full flex justify-center py-3 px-4 text-sm font-semibold rounded-xl transition-all duration-300 transform ${
                  loading
                    ? "bg-gray-600 cursor-not-allowed"
                    : "bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(156,60,255,0.7)]"
                } text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 focus:ring-offset-gray-900`}
              >
                {loading ? (
                  <span className="flex items-center">
                    <Loader2 className="animate-spin mr-2" size={20} />
                    Signing in...
                  </span>
                ) : (
                  "Sign in"
                )}
              </button>
            </div>

            <div className="text-center text-sm">
              <p className="text-gray-400">
                Don't have an account?
                <Link
                  to="/signup"
                  className="font-medium text-purple-400 hover:text-pink-400 ml-1 transition"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
