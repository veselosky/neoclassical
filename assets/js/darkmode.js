/**
 * Dark Mode Theme Switcher
 * Respects user preference from localStorage or system preference
 * Prevents flash of unstyled content by running early
 */
(function() {
  'use strict';
  
  const THEME_KEY = 'neo-theme';
  const THEME_LIGHT = 'light';
  const THEME_DARK = 'dark';
  const THEME_AUTO = 'auto';
  
  /**
   * Get the effective theme based on preference and system settings
   * @param {string} preference - User preference: 'light', 'dark', or 'auto'
   * @returns {string} - 'light' or 'dark'
   */
  function getEffectiveTheme(preference) {
    if (preference === THEME_LIGHT || preference === THEME_DARK) {
      return preference;
    }
    
    // Auto mode: use system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return THEME_DARK;
    }
    
    return THEME_LIGHT;
  }
  
  /**
   * Get stored theme preference from localStorage
   * @returns {string|null} - Stored preference or null
   */
  function getStoredTheme() {
    try {
      return localStorage.getItem(THEME_KEY);
    } catch (e) {
      return null;
    }
  }
  
  /**
   * Store theme preference in localStorage
   * @param {string} theme - Theme to store
   */
  function setStoredTheme(theme) {
    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch (e) {
      // localStorage not available
    }
  }
  
  /**
   * Apply theme to the document
   * @param {string} theme - 'light' or 'dark'
   */
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-bs-theme', theme);
    document.body.setAttribute('data-bs-theme', theme);
  }
  
  /**
   * Set theme and update UI
   * @param {string} preference - User preference: 'light', 'dark', or 'auto'
   */
  function setTheme(preference) {
    const effectiveTheme = getEffectiveTheme(preference);
    applyTheme(effectiveTheme);
    setStoredTheme(preference);
    
    // Update toggle button state if available
    if (typeof updateThemeToggle === 'function') {
      updateThemeToggle(preference, effectiveTheme);
    }
  }
  
  /**
   * Initialize theme on page load
   */
  function initTheme() {
    const stored = getStoredTheme();
    const preference = stored || THEME_AUTO;
    const effectiveTheme = getEffectiveTheme(preference);
    applyTheme(effectiveTheme);
  }
  
  /**
   * Cycle to next theme preference
   */
  function cycleTheme() {
    const current = getStoredTheme() || THEME_AUTO;
    let next;
    
    // Cycle: auto -> light -> dark -> auto
    switch (current) {
      case THEME_AUTO:
        next = THEME_LIGHT;
        break;
      case THEME_LIGHT:
        next = THEME_DARK;
        break;
      case THEME_DARK:
        next = THEME_AUTO;
        break;
      default:
        next = THEME_AUTO;
    }
    
    setTheme(next);
  }
  
  // Initialize when DOM is ready to avoid accessing document.body too early
  function onDomReady() {
    initTheme();

    // Listen for system theme changes when in auto mode
    if (window.matchMedia) {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function() {
        const stored = getStoredTheme();
        if (!stored || stored === THEME_AUTO) {
          initTheme();
        }
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', onDomReady);
  } else {
    onDomReady();
  }
  
  // Expose functions globally for UI components
  window.neoTheme = {
    setTheme: setTheme,
    cycleTheme: cycleTheme,
    getStoredTheme: getStoredTheme,
    getEffectiveTheme: getEffectiveTheme,
    THEME_LIGHT: THEME_LIGHT,
    THEME_DARK: THEME_DARK,
    THEME_AUTO: THEME_AUTO
  };
})();
