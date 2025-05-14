import { google } from "googleapis";

export function getYouTubeInstance(accessToken: string) {
    const oauth2Client = new google.auth.OAuth2();
    oauth2Client.setCredentials({ access_token: accessToken });

    return google.youtube({
        version: "v3",
        auth: oauth2Client,
    });
}
