/* eslint-disable */

export function initSpotify() {
    window.onSpotifyWebPlaybackSDKReady = () => {
        const token = '[BQABXcFKQ03llXP5uAhGnl5XY0B5N8z3t_E21PE-t-ue-acO6sOOY4dmtYVU4eNJ1VARTl0e5m6NDW3UWm15EUyAgSn_RL_64UqJy5_d-peYUlQTMoB72yjD73xCPLT8USfyat1IEah2lb0ohaJqOLPp_0jlPj9RToqQqHGA50OS-wERuUv_BtNJUQ]';
        const player = new Spotify.Player({
            name: 'Web Playback SDK Quick Start Player',
            getOAuthToken: cb => {
                cb(token);
            }
        });

        // Error handling
        player.addListener('initialization_error', ({
            message
        }) => {
            console.error(message);
        });
        player.addListener('authentication_error', ({
            message
        }) => {
            console.error(message);
        });
        player.addListener('account_error', ({
            message
        }) => {
            console.error(message);
        });
        player.addListener('playback_error', ({
            message
        }) => {
            console.error(message);
        });

        // Playback status updates
        player.addListener('player_state_changed', state => {
            console.log(state);
        });

        // Ready
        player.addListener('ready', ({
            device_id
        }) => {
            console.log('Ready with Device ID', device_id);
        });

        // Not Ready
        player.addListener('not_ready', ({
            device_id
        }) => {
            console.log('Device ID has gone offline', device_id);
        });

        // Connect to the player!
        player.connect();
    };
}