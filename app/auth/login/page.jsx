"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/src/contexts/AuthContext';
import '../auth.css';

export default function LoginPage() {
  const { login, isAuthenticated } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    const res = await login({ email, password });
    setLoading(false);
    if (res.success) {
      router.push('/dashboard');
    } else {
      setError(res.message || 'Login failed');
    }
  };

  if (isAuthenticated) {
    router.replace('/dashboard');
    return null;
  }

  return (
    <div className="auth-container">
      {/* Left Side - Branding */}
      <div className="auth-left">
        <div className="auth-branding">
          <div className="auth-logo">💰</div>
          <h1 className="auth-brand-title">PocketPal</h1>
          <p className="auth-brand-subtitle">Your Smart Financial Companion</p>
        </div>
        
        <div className="auth-features">
          <div className="auth-feature">
            <span className="auth-feature-icon">📊</span>
            <p className="auth-feature-text">Track expenses effortlessly</p>
          </div>
          <div className="auth-feature">
            <span className="auth-feature-icon">💡</span>
            <p className="auth-feature-text">Get personalized saving tips</p>
          </div>
          <div className="auth-feature">
            <span className="auth-feature-icon">🎯</span>
            <p className="auth-feature-text">Achieve your financial goals</p>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="auth-right">
        <div className="auth-form-container">
          <div className="auth-form-header">
            <h2 className="auth-form-title">Welcome Back!</h2>
            <p className="auth-form-subtitle">Sign in to continue to your account</p>
          </div>

          <form onSubmit={onSubmit} className="auth-form">
            <div className="auth-input-group">
              <label className="auth-label">Email Address</label>
              <div className="auth-input-wrapper">
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="auth-input"
                />
              </div>
            </div>

            <div className="auth-input-group">
              <label className="auth-label">Password</label>
              <div className="auth-input-wrapper">
                <input
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                  className="auth-input"
                />
              </div>
            </div>

            {error && (
              <div className="auth-error">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="auth-submit-btn"
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          <div className="auth-footer">
            Don't have an account?{' '}
            <a href="/auth/register" className="auth-link">Create one</a>
          </div>
        </div>
      </div>
    </div>
  );
}
