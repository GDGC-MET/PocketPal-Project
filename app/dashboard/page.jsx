"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/src/contexts/AuthContext';
import './dashboard.css';

export default function DashboardPage() {
  const { user, isAuthenticated, loading, logout } = useAuth();
  const router = useRouter();
  const [stats, setStats] = useState({
    totalSavings: 3200,
    expenses: 1200,
    earnings: 1300
  });

  const [recentSpendings, setRecentSpendings] = useState([
    {
      id: 1,
      description: 'Zomato Order',
      category: 'Food',
      date: '2023-10-10',
      amount: 200,
      paymentMethod: 'UPI',
      status: 'Completed'
    },
    {
      id: 2,
      description: 'Amazon Order',
      category: 'Shopping',
      date: '2023-10-11',
      amount: 500,
      paymentMethod: 'Debit Card',
      status: 'Completed'
    },
    {
      id: 3,
      description: 'Netflix Subscription',
      category: 'Entertainment',
      date: '2023-10-12',
      amount: 649,
      paymentMethod: 'UPI',
      status: 'Completed'
    },
    {
      id: 4,
      description: 'Electricity Bill',
      category: 'Bills',
      date: '2023-10-13',
      amount: 1001,
      paymentMethod: 'Net Banking',
      status: 'Completed'
    },
    {
      id: 5,
      description: 'Phone Bill',
      category: 'Bills',
      date: '2023-10-14',
      amount: 500,
      paymentMethod: 'Net Banking',
      status: 'Completed'
    }
  ]);

  const [updates, setUpdates] = useState([
    { id: 1, text: 'Ordered Biryani for ₹500', time: '30 minutes ago' },
    { id: 2, text: 'Purchased Bluetooth headphones for ₹500', time: '2 hours ago' },
    { id: 3, text: 'Subscription renewed for ₹649', time: '1 day ago' }
  ]);

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push('/auth/login');
    }
  }, [isAuthenticated, loading, router]);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loader"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  return (
    <div className="dashboard-container">
      {/* Header */}
      <header className="dashboard-header">
        <div className="header-left">
          <div className="logo">
            <span className="logo-icon">💰</span>
            <span className="logo-text">PocketPal</span>
          </div>
        </div>
        <div className="header-right">
          <button className="icon-btn" title="Notifications">
            <span>🔔</span>
          </button>
          <button className="icon-btn" title="Profile" onClick={handleLogout}>
            <span>👤</span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="dashboard-main">
        <div className="content-left">
          {/* Welcome Section */}
          <section className="welcome-section">
            <h1 className="welcome-title">Welcome Back, {user?.name || 'User'}!</h1>
          </section>

          {/* Stats Cards */}
          <section className="stats-section">
            <div className="stat-card stat-savings">
              <div className="stat-icon">💰</div>
              <div className="stat-info">
                <div className="stat-value">₹{stats.totalSavings.toLocaleString()}</div>
                <div className="stat-label">Total Savings</div>
                <div className="stat-period">6 Months</div>
              </div>
              <button className="stat-action-btn" title="Copy">📋</button>
            </div>

            <div className="stat-card stat-expenses">
              <div className="stat-icon">🛒</div>
              <div className="stat-info">
                <div className="stat-value">₹{stats.expenses.toLocaleString()}</div>
                <div className="stat-label">Expenses</div>
                <div className="stat-period">This Month</div>
              </div>
              <button className="stat-action-btn" title="Copy">📋</button>
            </div>

            <div className="stat-card stat-earnings">
              <div className="stat-icon">💵</div>
              <div className="stat-info">
                <div className="stat-value">₹{stats.earnings.toLocaleString()}</div>
                <div className="stat-label">Earnings</div>
                <div className="stat-period">This Month</div>
              </div>
              <button className="stat-action-btn" title="Copy">📋</button>
            </div>
          </section>

          {/* Daily Saving Tips */}
          <section className="tips-section">
            <div className="tips-card">
              <div className="tips-icon">💡</div>
              <div className="tips-content">
                <h3 className="tips-title">Daily Saving Tips</h3>
                <p className="tips-text">
                  Try the "52 Week Challenge": Save ₹1 in week 1, ₹2 in week 2, and so on. By the end of the year, you'll have saved ₹1,378!
                </p>
              </div>
            </div>
          </section>

          {/* Recent Spendings Table */}
          <section className="spendings-section">
            <h2 className="section-title">Recent Spendings</h2>
            <div className="table-container">
              <table className="spendings-table">
                <thead>
                  <tr>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Date</th>
                    <th>Amount (₹)</th>
                    <th>Payment Method</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {recentSpendings.map((spending) => (
                    <tr key={spending.id}>
                      <td>{spending.description}</td>
                      <td>{spending.category}</td>
                      <td>{spending.date}</td>
                      <td>{spending.amount}</td>
                      <td>{spending.paymentMethod}</td>
                      <td>
                        <span className="status-badge">{spending.status}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>

        {/* Right Sidebar - Updates */}
        <aside className="sidebar-right">
          <div className="updates-panel">
            <h3 className="updates-title">Updates</h3>
            <div className="updates-list">
              {updates.map((update) => (
                <div key={update.id} className="update-item">
                  <p className="update-text">{update.text}</p>
                  <span className="update-time">{update.time}</span>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </main>

      {/* Floating Action Button */}
      <button className="fab" title="Chat">
        💬
      </button>
    </div>
  );
}
