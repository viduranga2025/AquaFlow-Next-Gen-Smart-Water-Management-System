const WaterSystem = {
    // Advanced Configuration Data
    config: {
        'Residential': {
            accent: '#0ea5e9',
            status: 'Optimal Flow',
            pressure: '45 PSI',
            desc: 'Automated supply to 1,200 households.',
            stats: [
                { label: 'Avg Daily Use', val: '240k Liters', icon: 'fa-faucet' },
                { label: 'Leakage Rate', val: '0.02%', icon: 'fa-droplet-slash' },
                { label: 'Reservoir', val: '88%', icon: 'fa-water' }
            ]
        },
        'Industrial': {
            accent: '#8b5cf6',
            status: 'Heavy Load',
            pressure: '110 PSI',
            desc: 'Supply prioritized for Industrial Sector B.',
            stats: [
                { label: 'Industrial Demand', val: '850k Liters', icon: 'fa-industry' },
                { label: 'Quality Index', val: '98.5%', icon: 'fa-vial' },
                { label: 'Energy Use', val: '42kWh', icon: 'fa-bolt' }
            ]
        },
        'Emergency': {
            accent: '#ef4444',
            status: 'Critical Alert',
            pressure: '195 PSI',
            desc: 'Fire Hydrant System Active. High pressure diverted.',
            stats: [
                { label: 'Active Hydrants', val: '14 Units', icon: 'fa-fire-extinguisher' },
                { label: 'Main Valve', val: 'OVERRIDE', icon: 'fa-gears' },
                { label: 'Flow Priority', val: 'MAX', icon: 'fa-arrow-up' }
            ]
        }
    },

    switchZone(zone, element) {
        // UI Interaction
        document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));
        element.classList.add('active');

        const data = this.config[zone];
        
        // Update Branding & Colors
        document.documentElement.style.setProperty('--aqua-blue', data.accent);
        document.getElementById('zone-display').innerText = `Zone: ${zone}`;
        document.getElementById('zone-desc').innerText = data.desc;
        document.getElementById('status-text').innerText = `Flow: ${data.status}`;
        document.getElementById('pressure-val').innerText = data.pressure;

        this.renderStats(data.stats);
    },

    renderStats(stats) {
        const container = document.getElementById('metrics-container');
        container.innerHTML = stats.map(s => `
            <div class="stat-card">
                <i class="fa-solid ${s.icon}" style="color: var(--aqua-blue); font-size: 20px; margin-bottom: 10px;"></i>
                <div style="font-size: 12px; color: #94a3b8;">${s.label}</div>
                <div style="font-size: 20px; font-weight: bold;">${s.val}</div>
            </div>
        `).join('');
    }
};

window.onload = () => WaterSystem.switchZone('Residential', document.querySelector('.nav-item'));