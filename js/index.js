// Listen to events after the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    let being_states = ['Luca Magrone', 'a maker', 'a tinkerer', 'a coder'];
    let being = document.querySelector('#being');
    let state_count = 0;
    let states_total = being_states.length;
    let change = 0.01;
    let time = 1500;
    let timeout = change * time;
    being.style.opacity = 1;

    // Change every second
    window.setInterval(function() {
        if (parseFloat(being.style.opacity) <= 0.0 || parseFloat(being.style.opacity) == 1.0)
        {
            change *= (-1);

            if (change > 0)
            {
                if (state_count < states_total - 1)
                {
                    state_count++;
                }
                else
                {
                    state_count = 0;
                }
                being.textContent = being_states[state_count];
            }
        }

        being.style.opacity = String(parseFloat(being.style.opacity) + change);
    }, timeout);

    detectDarkMode();
});
