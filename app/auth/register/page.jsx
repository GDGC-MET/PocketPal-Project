"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/src/contexts/AuthContext';
import '../auth.css';

export default function RegisterPage() {
  const { register, isAuthenticated } = useAuth();
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    const res = await register({ name, email, password });
    setLoading(false);
    if (res.success) {
      router.push('/dashboard');
    } else {
      setError(res.message || 'Registration failed');
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
            <h2 className="auth-form-title">Create Account</h2>
            <p className="auth-form-subtitle">Join PocketPal and start managing your finances</p>
          </div>

          <form onSubmit={onSubmit} className="auth-form">
            <div className="auth-input-group">
              <label className="auth-label">Full Name</label>
              <div className="auth-input-wrapper">
                <input
                  type="text"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="Enter your full name"
                  required
                  className="auth-input"
                />
              </div>
            </div>

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
                  placeholder="Create a strong password (min 6 characters)"
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
              {loading ? 'Creating Account...' : 'Create Account'}
            </button>
          </form>

          <div className="auth-footer">
            Already have an account?{' '}
            <a href="/auth/login" className="auth-link">Sign in</a>
          </div>
        </div>
      </div>
    </div>
  );
}
