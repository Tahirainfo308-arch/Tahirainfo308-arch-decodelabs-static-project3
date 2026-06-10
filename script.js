/**
 * DECODELABS PROJECT 3 — INTERACTIVE CONTROLLER LOGIC
 * Architecture Structure: Input -> Process -> Output Loop
 */

// 1. SELECTING SENSORY RECEPTORS (DOM NODES RETRIEVAL)
const executionBtn = document.querySelector('.js-trigger');
const themeToggleBtn = document.querySelector('.js-theme-toggle');
const dynamicTextField = document.getElementById('target-text');

const counterDisplay = document.getElementById('live-count');
const incrementBtn = document.getElementById('count-up');
const resetBtn = document.getElementById('count-clear');

const hudLogStatus = document.getElementById('hud-log');
const hudPulseMonitor = document.getElementById('hud-pulse');

// 2. RUNTIME INTERNAL VARIABLES (STATE TRACKING ENVIRONMENTS)
let appCounterState = 0;
let isContentMutated = false;

// 3. CORE LOGIC ENGINE FUNCTIONS & TASK EVENT LISTENERS

// A. Task Requirement: Click to Dynamic Content Update Function
executionBtn.addEventListener('click', () => {
    // Process Variable Mutation Check
    if (!isContentMutated) {
        // Output DOM Mutation Render
        dynamicTextField.innerHTML = "<strong>Sequence Mutation Successful!</strong> The raw layout string was intercepted and transformed via client-side runtime logic smoothly.";
        dynamicTextField.style.color = "var(--accent-glow)";
        executionBtn.textContent = "Revert Architecture";
        
        // System Feedback Logging
        logSystemActivity("DOM Content Mutated");
        isContentMutated = true;
    } else {
        // Reverting the layout back to baseline parameters
        dynamicTextField.innerHTML = "The environment is currently in its default state. Awaiting user interaction trigger sequence...";
        dynamicTextField.style.color = "var(--text-muted)";
        executionBtn.textContent = "Execute Mutation";
        
        logSystemActivity("DOM Content Restored");
        isContentMutated = false;
    }
});

// B. Task Requirement: Matrix Theme Toggle System (Dark <-> Light Grid Switch)
themeToggleBtn.addEventListener('click', () => {
    const activeThemeAttribute = document.body.getAttribute('data-theme');
    
    if (activeThemeAttribute === 'matrix-light') {
        // Switching back to Dark Premium Slate Setup
        document.body.removeAttribute('data-theme');
        themeToggleBtn.textContent = "Switch Matrix Mode";
        logSystemActivity("Slate Dark Theme Mode Loaded");
    } else {
        // Activating Minimalist Light Core System Grid
        document.body.setAttribute('data-theme', 'matrix-light');
        themeToggleBtn.textContent = "Default Slate Mode";
        logSystemActivity("Matrix Light Theme Loaded");
    }
});

// C. Task Requirement: Dynamic Numerical Counters Component Logic
incrementBtn.addEventListener('click', () => {
    // Increment Processing Variable
    appCounterState++;
    
    // Formatting presentation value string (Padding zeros e.g. '05')
    renderCounterOutput();
    logSystemActivity(`Counter Augmented: ${appCounterState}`);
});

resetBtn.addEventListener('click', () => {
    // Reset Process Logic
    appCounterState = 0;
    
    renderCounterOutput();
    logSystemActivity("Counter Core Cleared");
});

// Helper Function: Formats and prints out updated state to viewport layout
function renderCounterOutput() {
    if(appCounterState < 10) {
        counterDisplay.textContent = `0${appCounterState}`;
    } else {
        counterDisplay.textContent = appCounterState;
    }
}

// System Logger Hook Utility
function logSystemActivity(eventMessage) {
    hudLogStatus.textContent = eventMessage;
    
    // Pulse animation trigger effect
    hudPulseMonitor.style.opacity = "0.5";
    setTimeout(() => {
        hudPulseMonitor.style.opacity = "1";
    }, 150);
}