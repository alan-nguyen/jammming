const clientId = '1c20b29457b94f69bc70b14d677499dc';
const redirectUri = 'http://localhost:3000/';
let accessToken = '';

// Spotify module
const Spotify = {
  getAccessToken() {
    if (accessToken) {
      return accessToken;
    }
    // Check for access token match
    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

    if (accessTokenMatch && expiresInMatch) {
      accessToken = accessTokenMatch[1];
      const expires_in = Number(expiresInMatch[1]);
      // This clears the parameters, allowing us to grab a new access token when it expires
      window.setTimeout(() => (accessToken = ''), expiresIn * 1000);
      window.history.pushState('Access Token', null, '/');
      return accessToken;
    }
  },
};

export default Spotify;
