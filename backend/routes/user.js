const express = require('express');
const { body, validationResult } = require('express-validator');
const User = require('../models/User');
const auth = require('../middleware/auth');

const router = express.Router();

// @route   GET /api/user/profile
// @desc    Get user profile
// @access  Private
router.get('/profile', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    res.json({
      success: true,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        avatar: user.avatar,
        preferences: user.preferences,
        goals: user.goals,
        subscriptions: user.subscriptions,
        createdAt: user.createdAt
      }
    });
  } catch (error) {
    console.error('Get profile error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// @route   PUT /api/user/profile
// @desc    Update user profile
// @access  Private
router.put('/profile', auth, [
  body('name', 'Name is required').not().isEmpty(),
  body('email', 'Please include a valid email').isEmail()
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array()
      });
    }

    const { name, email, avatar, preferences } = req.body;

    // Check if email is already taken by another user
    if (email !== req.user.email) {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({
          success: false,
          message: 'Email already in use'
        });
      }
    }

    const user = await User.findByIdAndUpdate(
      req.user.id,
      {
        name,
        email,
        avatar,
        preferences: preferences || req.user.preferences
      },
      { new: true, runValidators: true }
    );

    res.json({
      success: true,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        avatar: user.avatar,
        preferences: user.preferences
      }
    });
  } catch (error) {
    console.error('Update profile error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// @route   POST /api/user/goals
// @desc    Create a new savings goal
// @access  Private
router.post('/goals', auth, [
  body('name', 'Goal name is required').not().isEmpty(),
  body('targetAmount', 'Target amount is required').isNumeric(),
  body('category', 'Category is required').not().isEmpty()
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array()
      });
    }

    const { name, targetAmount, category, deadline } = req.body;

    const user = await User.findById(req.user.id);
    user.goals.push({
      name,
      targetAmount,
      category,
      deadline: deadline ? new Date(deadline) : null
    });

    await user.save();

    res.status(201).json({
      success: true,
      goal: user.goals[user.goals.length - 1]
    });
  } catch (error) {
    console.error('Create goal error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// @route   PUT /api/user/goals/:goalId
// @desc    Update a savings goal
// @access  Private
router.put('/goals/:goalId', auth, async (req, res) => {
  try {
    const { goalId } = req.params;
    const { name, targetAmount, currentAmount, category, deadline, isActive } = req.body;

    const user = await User.findById(req.user.id);
    const goal = user.goals.id(goalId);

    if (!goal) {
      return res.status(404).json({
        success: false,
        message: 'Goal not found'
      });
    }

    if (name) goal.name = name;
    if (targetAmount) goal.targetAmount = targetAmount;
    if (currentAmount !== undefined) goal.currentAmount = currentAmount;
    if (category) goal.category = category;
    if (deadline) goal.deadline = new Date(deadline);
    if (isActive !== undefined) goal.isActive = isActive;

    await user.save();

    res.json({
      success: true,
      goal
    });
  } catch (error) {
    console.error('Update goal error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// @route   DELETE /api/user/goals/:goalId
// @desc    Delete a savings goal
// @access  Private
router.delete('/goals/:goalId', auth, async (req, res) => {
  try {
    const { goalId } = req.params;

    const user = await User.findById(req.user.id);
    const goal = user.goals.id(goalId);

    if (!goal) {
      return res.status(404).json({
        success: false,
        message: 'Goal not found'
      });
    }

    goal.remove();
    await user.save();

    res.json({
      success: true,
      message: 'Goal deleted successfully'
    });
  } catch (error) {
    console.error('Delete goal error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// @route   POST /api/user/subscriptions
// @desc    Add a subscription
// @access  Private
router.post('/subscriptions', auth, [
  body('name', 'Subscription name is required').not().isEmpty(),
  body('amount', 'Amount is required').isNumeric(),
  body('frequency', 'Frequency is required').isIn(['monthly', 'yearly', 'weekly', 'daily'])
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array()
      });
    }

    const { name, amount, frequency, nextBillingDate } = req.body;

    const user = await User.findById(req.user.id);
    user.subscriptions.push({
      name,
      amount,
      frequency,
      nextBillingDate: nextBillingDate ? new Date(nextBillingDate) : null
    });

    await user.save();

    res.status(201).json({
      success: true,
      subscription: user.subscriptions[user.subscriptions.length - 1]
    });
  } catch (error) {
    console.error('Add subscription error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// @route   DELETE /api/user/subscriptions/:subscriptionId
// @desc    Remove a subscription
// @access  Private
router.delete('/subscriptions/:subscriptionId', auth, async (req, res) => {
  try {
    const { subscriptionId } = req.params;

    const user = await User.findById(req.user.id);
    const subscription = user.subscriptions.id(subscriptionId);

    if (!subscription) {
      return res.status(404).json({
        success: false,
        message: 'Subscription not found'
      });
    }

    subscription.remove();
    await user.save();

    res.json({
      success: true,
      message: 'Subscription removed successfully'
    });
  } catch (error) {
    console.error('Remove subscription error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

module.exports = router;
